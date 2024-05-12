import FilterList from "./FilterList";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import AlertNoResult from "./AlertNoResult";

function PageStore() {
  const {
    allData: [allProductData, setAllProdcutData],
  } = useOutletContext();
  const category = allProductData[0];

  const [productData, setProductData] = useState(
    allProductData[1].filter((data) => !data.soldOut)
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
    if (filterOption === "All") setProductData(allProductData[1]);
    if (filterOption === "Out of Stock")
      setProductData(allProductData[1].filter((data) => data.soldOut));
    if (filterOption === "In Stock")
      setProductData(allProductData[1].filter((data) => !data.soldOut));
  }, [filterOption, allProductData]);

  useEffect(() => {
    if (categoryOption === "All") setFilteredData(productData);
    if (categoryOption === "Merch")
      setFilteredData(
        productData.filter((data) => {
          return (
            !data.title.includes(category[1]) &&
            !data.title.includes(category[2]) &&
            !data.title.includes(category[3])
          );
        })
      );
    if (categoryOption === "CD")
      setFilteredData(
        productData.filter(
          (data) => data.title.includes("CD") || data.title.includes("Box")
        )
      );
    if (categoryOption === "LP")
      setFilteredData(productData.filter((data) => data.title.includes("LP")));
    if (categoryOption === "Cassette")
      setFilteredData(
        productData.filter((data) => data.title.includes("Cassette"))
      );
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
        )}
        <Pagination totalPage={totalPage} currentPage={currentPage} />
      </main>
      <Footer />
    </>
  );
}

export default PageStore;
