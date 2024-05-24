import FilterList from "../components/FilterList";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AlertNoResult from "../components/AlertNoResult";
import { useAvailProduct } from "../hooks/useAvailProduct";
import { usePageData } from "../hooks/usePageData";

function PageStore() {
  const {
    allData: [allProductData, setAllProdcutData],
  } = useOutletContext();
  const category = allProductData[0];

  const { setFilterOption, availProducts } = useAvailProduct(allProductData);

  const [categoryOption, setCategoryOption] = useState("All");
  const [categorizedData, setCategorizedData] = useState(availProducts);

  const { pageContent, totalPage, currentPage } = usePageData(
    availProducts,
    categorizedData
  );

  useEffect(() => {
    if (categoryOption === "All") setCategorizedData(availProducts);
    if (categoryOption === "Merch")
      setCategorizedData(
        availProducts.filter((data) => {
          return (
            !data.title.includes(category[1]) &&
            !data.title.includes(category[2]) &&
            !data.title.includes(category[3])
          );
        })
      );
    if (categoryOption === "CD")
      setCategorizedData(
        availProducts.filter(
          (data) => data.title.includes("CD") || data.title.includes("Box")
        )
      );
    if (categoryOption === "LP")
      setCategorizedData(
        availProducts.filter(
          (data) => data.title.includes("LP") || data.title.includes("Vinyl")
        )
      );
    if (categoryOption === "Cassette")
      setCategorizedData(
        availProducts.filter((data) => data.title.includes("Cassette"))
      );
  }, [categoryOption, availProducts, category]);

  return (
    <>
      <main id="store-page">
        <FilterList
          category={category}
          setCategoryOption={setCategoryOption}
          setFilterOption={setFilterOption}
        />
        <ProductList
          pageContent={pageContent}
          dataAvail={categorizedData.length}
        />
        <AlertNoResult dataAvail={categorizedData.length}>
          no results found
        </AlertNoResult>
        <Pagination totalPage={totalPage} currentPage={currentPage} />
      </main>
      <Footer />
    </>
  );
}

export default PageStore;
