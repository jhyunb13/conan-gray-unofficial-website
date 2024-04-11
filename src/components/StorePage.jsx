import Category from "./Category";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useLoaderData } from "react-router-dom";

function StorePage() {
  const data = useLoaderData();
  const [filterOption, setFilterOptions] = useState("All");
  const [content, setContent] = useState(data[1]);
  const category = data[0];

  const contentLimitPerPage = 12;
  const totalPage = Math.ceil(data[1].length / contentLimitPerPage);
  const pageNumbers = useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalPage; i++) arr.push(i + 1);
    return arr;
  }, [totalPage]);

  const location = useLocation();
  const pathName = location.pathname;
  let currentParam = parseInt(new URLSearchParams(location.search).get("page"));

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    pageNumbers.map(
      (num) =>
        currentParam === num &&
        setContent(data[1].slice(12 * (num - 1), 12 * num))
    );
  }, [currentParam, pageNumbers, data]);

  useEffect(() => {
    if (filterOption === "All") setContent(data[1]);
    else if (filterOption === "Merch")
      setContent(
        data[1].filter((data) => {
          return (
            !data.title.includes(category[1]) &&
            !data.title.includes(category[2]) &&
            !data.title.includes(category[3])
          );
        })
      );
    else if (filterOption === "CD")
      setContent(
        data[1].filter((data) => {
          return data.title.includes("CD") || data.title.includes("Box");
        })
      );
    else if (filterOption === "LP")
      setContent(
        data[1].filter((data) => {
          return data.title.includes("LP");
        })
      );
    else if (filterOption === "Cassette")
      setContent(
        data[1].filter((data) => {
          return data.title.includes("Cassette");
        })
      );
  }, [filterOption, data, category]);

  return (
    <div className="store-page pt-35 pb-50">
      <Category options={category} setFilterOptions={setFilterOptions} />
      <ProductList content={content} />
      <Pagination
        pageNumbers={pageNumbers}
        pathName={pathName}
        currentParam={currentParam}
        scrollToTop={handleScrollToTop}
      />
    </div>
  );
}

export default StorePage;
