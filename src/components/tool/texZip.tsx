import { css } from "../../../styled-system/css";
import { useRef, useEffect, useCallback } from "react";

export const TexZip = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handlePaste = useCallback(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      const clipboardData = textArea.value;
      console.log(clipboardData);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("paste", handlePaste);
    buttonRef.current?.addEventListener("click", () => {
      handlePaste();
    });
    return () => {
      document.removeEventListener("paste", handlePaste);
      buttonRef.current?.removeEventListener("click", () => {
        handlePaste();
      });
    };
  }, [handlePaste, buttonRef]);

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
          resize: "none",
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
    </div>
  );
};
