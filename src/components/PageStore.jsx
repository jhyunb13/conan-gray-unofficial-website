import Category from "./Category";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import AlertNoResult from "./AlertNoResult";

function PageStore() {
  const {
    allData: [allProductData, setAllProdcutData],
  } = useOutletContext();
  const location = useLocation();
  const category = allProductData[0];

  const [productData, setProductData] = useState(
    allProductData[1].filter((data) => !data.availability)
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

  useEffect(() => {
    pageNumbers.map(
      (num) =>
        currentParam === num &&
        setContent(filteredData.slice(12 * (num - 1), 12 * num))
    );
  }, [currentParam, pageNumbers, filteredData]);

  useEffect(() => {
    if (filterOption === "All") setProductData(allProductData[1]);
    else if (filterOption === "Out of Stock")
      setProductData(allProductData[1].filter((data) => data.availability));
    else if (filterOption === "In Stock")
      setProductData(allProductData[1].filter((data) => !data.availability));
  }, [filterOption, allProductData]);

  useEffect(() => {
    if (categoryOption === "All") setFilteredData(productData);
    else if (categoryOption === "Merch")
      setFilteredData(
        productData.filter((data) => {
          return (
            !data.title.includes(category[1]) &&
            !data.title.includes(category[2]) &&
            !data.title.includes(category[3])
          );
        })
      );
    else if (categoryOption === "CD")
      setFilteredData(
        productData.filter((data) => {
          return data.title.includes("CD") || data.title.includes("Box");
        })
      );
    else if (categoryOption === "LP")
      setFilteredData(
        productData.filter((data) => {
          return data.title.includes("LP");
        })
      );
    else if (categoryOption === "Cassette")
      setFilteredData(
        productData.filter((data) => {
          return data.title.includes("Cassette");
        })
      );
  }, [categoryOption, productData, category]);

  return (
    <>
      <main className="store-page">
        <Category
          options={category}
          setCategoryOption={setCategoryOption}
          setFilterOption={setFilterOption}
        />
        {filteredData.length ? (
          <ProductList content={content} />
        ) : (
          <AlertNoResult>no results found</AlertNoResult>
        )}
        <Pagination
          totalPage={totalPage}
          pageNumbers={pageNumbers}
          pathName={pathName}
          currentParam={currentParam}
        />
      </main>
      <Footer />
    </>
  );
}

export default PageStore;
