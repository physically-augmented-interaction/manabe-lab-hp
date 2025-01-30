import { css } from "../../../styled-system/css";
import { useEffect } from "react";
import {
  parseBibTeX,
  makeShorter,
  convertToString,
  useTexCommon,
} from "./texCommon";
import type { BibEntry } from "./texCommon";

export const TexTitleRaw = () => {
  const {
    textAreaRef,
    buttonRef,
    resultRef,
    copyStatus,
    setCopyStatus,
    handlePaste,
  } = useTexCommon();

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
    <div style={{ position: "relative" }}>
      <textarea
        ref={textAreaRef}
        className={css({
          width: "100%",
          height: "250px",
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
        className={css({
          position: "absolute",
          top: "15px",
          right: "15px",
          padding: "6px 12px",
          borderRadius: "4px",
          backgroundColor: "#fff",
          color: "#BE3144",
          border: "1px solid #BE3144",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: "#BE3144",
            color: "#fff",
          },
          "&:active": {
            transform: "translateY(1px)",
            boxShadow: "none",
          },
        })}
        onClick={() => {
          if (textAreaRef.current) {
            textAreaRef.current.value = "";
            handlePaste();
          }
        }}
      >
        Clear
      </button>
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
        変換！
      </button>
      <div className={css({ position: "relative" })}>
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
            minHeight: "70px",
          })}
        ></pre>
        <button
          className={css({
            position: "absolute",
            top: "15px",
            right: "15px",
            padding: "10px 20px",
            borderRadius: "4px",
            backgroundColor: copyStatus === "copied" ? "#4CAF50" : "#BE3144",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: copyStatus === "copied" ? "#45a049" : "#A5273F",
              transform: "translateY(-1px)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            },
            "&:active": {
              transform: "translateY(1px)",
              boxShadow: "none",
            },
          })}
          onClick={() => {
            if (resultRef.current?.textContent) {
              navigator.clipboard
                .writeText(resultRef.current.textContent)
                .then(() => {
                  setCopyStatus("copied");
                  setTimeout(() => setCopyStatus("default"), 2000);
                });
            }
          }}
        >
          {copyStatus === "copied" ? "コピーしました！" : "コピー"}
        </button>
      </div>
    </div>
  );
};
