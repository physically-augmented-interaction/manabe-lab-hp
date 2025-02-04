import { useRef, useCallback, useState } from "react";

export interface BibEntry {
  type: string;
  id: string;
  fields: Record<string, string>;
}

export const parseBibTeX = (text: string) => {
  const entries: BibEntry[] = [];
  const entryRegex = /@(\w+)\s*{\s*([^,]*),([^@]*)}/g;

  let match;
  while ((match = entryRegex.exec(text)) !== null) {
    const [, type, id, fieldsText] = match;
    const fields: Record<string, string> = {};

    let remaining = fieldsText.trim();
    while (remaining) {
      const keyMatch = /^\s*(\w+)\s*=\s*/.exec(remaining);
      if (!keyMatch) break;

      const key = keyMatch[1].toLowerCase();
      remaining = remaining.slice(keyMatch[0].length);

      let value = "";
      let braceCount = 0;
      let i = 0;

      if (remaining[0] === "{") {
        braceCount = 1;
        i = 1;
        while (i < remaining.length && braceCount > 0) {
          if (remaining[i] === "{") braceCount++;
          else if (remaining[i] === "}") braceCount--;
          if (braceCount > 0) value += remaining[i];
          i++;
        }
      } else if (remaining[0] === '"') {
        i = 1;
        while (i < remaining.length && remaining[i] !== '"') {
          value += remaining[i];
          i++;
        }
        i++;
      }

      if (key && value) {
        fields[key] = value;
      }

      remaining = remaining.slice(i).replace(/^\s*,\s*/, "");
    }

    entries.push({
      type: type.toLowerCase(),
      id,
      fields,
    });
  }
  return entries;
};

export const makeShorter = (
  entries: BibEntry[],
  options?: { zipMode?: boolean },
) => {
  entries.forEach((entry) => {
    // authorは1st authorのみ（zipMode時）
    if (options?.zipMode && entry.fields.author) {
      const authors = entry.fields.author.split(" and ");
      entry.fields.author = `${authors[0]} and others`;
    }

    // pagesのハイフンを直す
    if (entry.fields.pages) {
      entry.fields.pages = entry.fields.pages.replace("–", "-");
      entry.fields.pages = entry.fields.pages.replace(/-+/g, "--");
    }

    // titleは二重括弧にして小文字化を防ぐ
    if (entry.fields.title) {
      const rawTitle = entry.fields.title;
      const bracketCount = Math.min(
        rawTitle.match(/^{+/)?.[0].length ?? 0,
        rawTitle.match(/}+$/)?.[0].length ?? 0,
      );
      if (bracketCount !== 0) {
        entry.fields.title = `{${rawTitle.slice(bracketCount, -bracketCount)}}`;
      } else {
        entry.fields.title = `{${rawTitle}}`;
      }
    }

    // booktitleがあってseriesがあった場合は、booktitleをseriesにしてseriesを削除（zipMode時）
    if (
      options?.zipMode &&
      entry.fields.booktitle &&
      entry.fields.series &&
      entry.type.includes("proc")
    ) {
      entry.fields.booktitle = `Proc. ${entry.fields.series}`;
      delete entry.fields.series;
    }
  });
  return entries;
};

export const convertToString = (entries: BibEntry[]) => {
  return entries
    .map((entry) => {
      const fields = Object.entries(entry.fields)
        .map(([key, value]) => `  ${key} = {${value}}`)
        .join(",\n");

      return `@${entry.type}{${entry.id},\n${fields}\n}`;
    })
    .join("\n\n");
};

export const useTexCommon = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const resultRef = useRef<HTMLPreElement>(null);
  const [copyStatus, setCopyStatus] = useState<"default" | "copied">("default");

  const handlePaste = useCallback(() => {
    const textArea = textAreaRef.current;
    const resultArea = resultRef.current;
    if (textArea && resultArea) {
      const bibTexContent = textArea.value;
      const entries = parseBibTeX(bibTexContent);
      const shortedEntries = makeShorter(entries);
      const result = convertToString(shortedEntries);
      resultArea.textContent = result;
    }
  }, []);

  return {
    textAreaRef,
    buttonRef,
    resultRef,
    copyStatus,
    setCopyStatus,
    handlePaste,
  };
};
