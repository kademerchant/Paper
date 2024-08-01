import { KeyboardEvent } from "react";

export const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
  if (e.key === " " || e.key === "  ") {
    e.preventDefault();
  }
};
