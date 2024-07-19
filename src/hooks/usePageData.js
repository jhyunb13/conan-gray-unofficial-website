import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQueryString } from "./useQueryString";

export function usePageData(categorizedData) {
  const [pageContent, setPageContent] = useState(categorizedData.slice(0, 12));
  const { defaultQueryString, getQueryString } = useQueryString();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentPage = parseInt(getQueryString("page"));

  const resultsPerPage = 12;
  const totalPage = Math.ceil(categorizedData.length / resultsPerPage);
  const resultsStart = resultsPerPage * (currentPage - 1);
  const resultsEnd = resultsPerPage * currentPage;

  useEffect(() => {
    if (!currentPage) navigate(`${pathname}?${defaultQueryString}`);
  }, [currentPage, pathname, navigate, defaultQueryString]);

  useEffect(() => {
    setPageContent(categorizedData.slice(resultsStart, resultsEnd));
  }, [categorizedData, resultsEnd, resultsStart]);

  return { pageContent, totalPage, currentPage };
}
