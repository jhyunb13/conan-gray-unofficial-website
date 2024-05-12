import FilterList from "./FilterList";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import AlertNoResult from "./AlertNoResult";

function PageMerch() {
  const {
    merchData: [merchData, setMerchData],
  } = useOutletContext();
  const category = merchData[0];

  const [productData, setProductData] = useState(
    merchData[1].filter((data) => !data.soldOut)
  );
  const [categoryOption, setCategoryOption] = useState("All");
  const [filterOption, setFilterOption] = useState("In Stock");
  const [filteredData, setFilteredData] = useState(productData);
  const [pageContent, setPageContent] = useState(productData.slice(0, 12));

  const location = useLocation();
  const currentPage = parseInt(
    new URLSearchParams(location.search).get("page")
  );

  const resultsPerPage = 12;
  const totalPage = Math.ceil(filteredData.length / resultsPerPage);
  const resultsStart = resultsPerPage * (currentPage - 1);
  const resultsEnd = resultsPerPage * currentPage;

  useEffect(() => {
    setPageContent(filteredData.slice(resultsStart, resultsEnd));
  }, [filteredData, resultsEnd, resultsStart]);

  useEffect(() => {
    function filterAvailability() {
      if (filterOption === "All") setProductData(merchData[1]);
      if (filterOption === "Out of Stock")
        setProductData(merchData[1].filter((data) => data.soldOut));
      if (filterOption === "In Stock")
        setProductData(merchData[1].filter((data) => !data.soldOut));
    }
    filterAvailability();
  }, [filterOption, merchData]);

  useEffect(() => {
    function filterByCategory() {
      if (categoryOption === "All") setFilteredData(productData);
      if (categoryOption === "Tops")
        setFilteredData(
          productData.filter(
            (data) =>
              data.title.includes("TEE") || data.title.includes("SWEATER")
          )
        );
      if (categoryOption === "Outerwear")
        setFilteredData(
          productData.filter((data) => data.title.includes("HOODIE"))
        );
      if (categoryOption === "Accessories")
        setFilteredData(
          productData.filter((data) => {
            return (
              !data.title.includes("TEE") &&
              !data.title.includes("HOODIE") &&
              !data.title.includes("SWEATER")
            );
          })
        );
    }
    filterByCategory();
  }, [categoryOption, productData, category]);

  return (
    <>
      <main className="store-page">
        <FilterList
          category={category}
          setCategoryOption={setCategoryOption}
          setFilterOption={setFilterOption}
        />
        {filteredData.length ? (
          <ProductList pageContent={pageContent} />
        ) : (
          <AlertNoResult>no results found</AlertNoResult>
        )}{" "}
        <Pagination totalPage={totalPage} currentPage={currentPage} />
      </main>
      <Footer />
    </>
  );
}

export default PageMerch;
