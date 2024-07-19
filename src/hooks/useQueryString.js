import { useState } from "react";
import { useLocation } from "react-router-dom";

export function useQueryString() {
  const [currentCategory] = useState("All");
  const [currentInventoryStatus] = useState("In Stock");

  const { search } = useLocation();
  const updatedQueryString = new URLSearchParams(search);

  const defaultQueryString = new URLSearchParams([
    ["page", "1"],
    ["category", currentCategory],
    ["status", currentInventoryStatus],
  ]).toString();

  function setQueryString(key, value) {
    updatedQueryString.set(key, value);
  }

  function getQueryString(key) {
    return new URLSearchParams(search).get(key);
  }

  return {
    defaultQueryString,
    getQueryString,
    setQueryString,
    updatedQueryString,
  };
}
