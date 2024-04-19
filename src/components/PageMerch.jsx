import Category from "./Category";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import AlertNoResult from "./AlertNoResult";

function PageMerch() {
  const {
    merchData: [merchData, setMerchData],
  } = useOutletContext();
  const location = useLocation();

  const category = merchData[0];

  const [productData, setProductData] = useState(
    merchData[1].filter((data) => !data.availability)
  );
  const [categoryOption, setCategoryOption] = useState("All");
  const [filterOption, setFilterOption] = useState("In Stock");
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

  useEffect(() => {
    pageNumbers.map(
      (num) =>
        currentParam === num &&
        setContent(filteredData.slice(12 * (num - 1), 12 * num))
    );
  }, [currentParam, pageNumbers, productData, filteredData]);

  useEffect(() => {
    if (filterOption === "All") setProductData(merchData[1]);
    else if (filterOption === "Out of Stock")
      setProductData(merchData[1].filter((data) => data.availability));
    else if (filterOption === "In Stock")
      setProductData(merchData[1].filter((data) => !data.availability));
  }, [filterOption, merchData]);

  useEffect(() => {
    if (categoryOption === "All") setFilteredData(productData);
    else if (categoryOption === "Tops")
      setFilteredData(
        productData.filter((data) => {
          return data.title.includes("TEE") || data.title.includes("SWEATER");
        })
      );
    else if (categoryOption === "Outerwear")
      setFilteredData(
        productData.filter((data) => {
          return data.title.includes("HOODIE");
        })
      );
    else if (categoryOption === "Accessories")
      setFilteredData(
        productData.filter((data) => {
          return (
            !data.title.includes("TEE") &&
            !data.title.includes("HOODIE") &&
            !data.title.includes("SWEATER")
          );
        })
      );
  }, [categoryOption, productData, category]);

  return (
    <>
      <div className="store-page pt-35 pb-50">
        <Category
          options={category}
          setCategoryOption={setCategoryOption}
          setFilterOption={setFilterOption}
          pathName={pathName}
        />
        {filteredData.length ? (
          <ProductList content={content} />
        ) : (
          <AlertNoResult>no results found</AlertNoResult>
        )}{" "}
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

export default PageMerch;
