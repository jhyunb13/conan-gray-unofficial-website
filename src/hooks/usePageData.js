import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function usePageData(categorizedData) {
  const [pageContent, setPageContent] = useState(categorizedData.slice(0, 12));

  const location = useLocation();
  const currentPage = parseInt(
    new URLSearchParams(location.search).get("page")
  );

  const resultsPerPage = 12;
  const totalPage = Math.ceil(categorizedData.length / resultsPerPage);
  const resultsStart = resultsPerPage * (currentPage - 1);
  const resultsEnd = resultsPerPage * currentPage;

  useEffect(() => {
    setPageContent(categorizedData.slice(resultsStart, resultsEnd));
  }, [categorizedData, resultsEnd, resultsStart]);

  return { pageContent, totalPage, currentPage };
}
