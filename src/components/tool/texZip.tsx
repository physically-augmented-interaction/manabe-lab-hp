import { css } from "../../../styled-system/css";
import { useRef, useEffect, useCallback } from "react";

export const TexZip = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const resultRef = useRef<HTMLPreElement>(null);

  interface BibEntry {
    type: string;
    id: string;
    fields: Record<string, string>;
  }

  const parseBibTeX = (text: string) => {
    const entries: BibEntry[] = [];
    const entryRegex = /@(\w+)\s*{\s*([^,]*),([^@]*)}/g;

    let match;
    while ((match = entryRegex.exec(text)) !== null) {
      const [, type, id, fieldsText] = match;
      const fields: Record<string, string> = {};

      // フィールドを1つずつ解析
      let remaining = fieldsText.trim();
      while (remaining) {
        // キーを抽出
        const keyMatch = /^\s*(\w+)\s*=\s*/.exec(remaining);
        if (!keyMatch) break;

        const key = keyMatch[1].toLowerCase();
        remaining = remaining.slice(keyMatch[0].length);

        // 値を抽出（中括弧のネストを考慮）
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
          i++; // 終わりの " をスキップ
        }

        if (key && value) {
          fields[key] = value;
        }

        // 次のフィールドの開始位置まで進める
        remaining = remaining.slice(i).replace(/^\s*,\s*/, "");
      }

      entries.push({
        type: type.toLowerCase(),
        id,
        fields,
      });
    }
    console.log(entries);
    return entries;
  };

  const filterFields = (entries: BibEntry[]) => {
    const desiredFields = [
      "author",
      "title",
      "year",
      "pages",
      "numpages",
      "booktitle",
      "url",
      "doi",
      "series",
    ];

    return entries.map((entry) => {
      const filteredFields: Record<string, string> = {};
      desiredFields.forEach((field) => {
        if (entry.fields[field]) {
          filteredFields[field] = entry.fields[field];
        }
      });
      return {
        ...entry,
        fields: filteredFields,
      };
    });
  };

  const makeShorter = (entries: BibEntry[]) => {
    entries.forEach((entry) => {
      // authorは1st authorのみ
      if (entry.fields.author) {
        const authors = entry.fields.author.split(" and ");
        entry.fields.author = `${authors[0]} and others`;
      }
      // pagesのハイフンを直す
      if (entry.fields.pages) {
        entry.fields.pages = entry.fields.pages.replace("–", "-");
        entry.fields.pages = entry.fields.pages.replace(/-+/g, "--");
      }
      // booktitleがあってseriesがあった場合は、booktitleをseriesにしてseriesを削除
      if (entry.fields.booktitle && entry.fields.series) {
        entry.fields.booktitle = `Proc. ${entry.fields.series}`;
        delete entry.fields.series;
      }
    });
    return entries;
  };

  const convertToString = (entries: BibEntry[]) => {
    return entries
      .map((entry) => {
        const regex = /(?<=( title)|( TITLE))\s*=\s*\{([^{}]+)\}/g;
        const fields = Object.entries(entry.fields)
          .map(([key, value]) => `  ${key} = {${value}}`)
          .join(",\n")
          .replace(regex, (match, p1, p2, p3) => ` = {{${p3}}}`);

        return `@${entry.type}{${entry.id},\n${fields}\n}`;
      })
      .join("\n\n");
  };

  const handlePaste = useCallback(() => {
    const textArea = textAreaRef.current;
    const resultArea = resultRef.current;
    if (textArea && resultArea) {
      const bibTexContent = textArea.value;
      const entries = parseBibTeX(bibTexContent);
      const filteredEntries = filterFields(entries);
      const shortedEntries = makeShorter(filteredEntries);
      const result = convertToString(shortedEntries);
      resultArea.textContent = result;
    }
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    const textArea = textAreaRef.current;

    if (button) {
      button.addEventListener("click", handlePaste);
    }
    if (textArea) {
      textArea.addEventListener("input", handlePaste);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handlePaste);
      }
      if (textArea) {
        textArea.removeEventListener("input", handlePaste);
      }
    };
  }, [handlePaste]);

  return (
    <div>
      <textarea
        ref={textAreaRef}
        className={css({
          width: "100%",
          height: "100px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          outline: "none",
          resize: "vertical",
          "&:focus": {
            border: "1px solid #000",
          },
        })}
        placeholder="Paste BibTeX here"
      ></textarea>
      <button
        ref={buttonRef}
        className={css({
          padding: "10px 24px",
          borderRadius: "5px",
          backgroundColor: "#BE3144",
          color: "#fff",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          fontSize: "18px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#A5273F",
          },
          "&:active": {
            transform: "translateY(1px)",
            boxShadow: "none",
          },
        })}
      >
        圧縮！
      </button>
      <pre
        ref={resultRef}
        className={css({
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          border: "1px solid #ddd",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          fontSize: "14px",
          lineHeight: "1.5",
          maxHeight: "400px",
          overflowY: "auto",
        })}
      ></pre>
    </div>
  );
};
