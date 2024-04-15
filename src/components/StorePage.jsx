import Category from "./Category";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useLoaderData } from "react-router-dom";

function StorePage() {
  const data = useLoaderData();
  const location = useLocation();
  const category = data[0];
  const productData = data[1];

  const [filterOption, setFilterOptions] = useState("All");
  const [filteredData, setFilteredData] = useState(productData);
  const [content, setContent] = useState(
    productData.slice(12 * (1 - 1), 12 * 1)
  );

  const contentLimitPerPage = 12;
  const totalPage = Math.ceil(filteredData.length / contentLimitPerPage);
  const pageNumbers = useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalPage; i++) arr.push(i + 1);
    return arr;
  }, [totalPage]);

  const pathName = location.pathname;
  let currentParam = parseInt(new URLSearchParams(location.search).get("page"));

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  function shuffle() {}

  useEffect(() => {
    pageNumbers.map(
      (num) =>
        currentParam === num &&
        setContent(filteredData.slice(12 * (num - 1), 12 * num))
    );
  }, [currentParam, pageNumbers, productData, filteredData]);

  useEffect(() => {
    if (filterOption === "All") setFilteredData(productData);
    else if (filterOption === "Merch")
      setFilteredData(
        productData.filter((data) => {
          return (
            !data.title.includes(category[1]) &&
            !data.title.includes(category[2]) &&
            !data.title.includes(category[3])
          );
        })
      );
    else if (filterOption === "CD")
      setFilteredData(
        productData.filter((data) => {
          return data.title.includes("CD") || data.title.includes("Box");
        })
      );
    else if (filterOption === "LP")
      setFilteredData(
        productData.filter((data) => {
          return data.title.includes("LP");
        })
      );
    else if (filterOption === "Cassette")
      setFilteredData(
        productData.filter((data) => {
          return data.title.includes("Cassette");
        })
      );
  }, [filterOption, productData, category]);

  return (
    <>
      <div className="store-page pt-35 pb-50">
        <Category
          options={category}
          setFilterOptions={setFilterOptions}
          pathName={pathName}
        />
        <ProductList content={content} />
        <Pagination
          totalPage={totalPage}
          pageNumbers={pageNumbers}
          pathName={pathName}
          currentParam={currentParam}
          scrollToTop={handleScrollToTop}
        />
      </div>
      <Footer />
    </>
  );
}

export default StorePage;
