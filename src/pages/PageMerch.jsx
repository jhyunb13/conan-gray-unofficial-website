import FilterList from "../components/FilterList";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AlertNoResult from "../components/AlertNoResult";
import { useAvailProduct } from "../hooks/useAvailProduct";
import { usePageData } from "../hooks/usePageData";

function PageMerch() {
  const {
    merchData: [merchData, setMerchData],
  } = useOutletContext();
  const category = merchData[0];

  const { setFilterOption, availProducts } = useAvailProduct(merchData);

  const [categoryOption, setCategoryOption] = useState("All");
  const [categorizedData, setCategorizedData] = useState(availProducts);

  const { pageContent, totalPage, currentPage } = usePageData(
    availProducts,
    categorizedData
  );

  useEffect(() => {
    function filterByCategory() {
      if (categoryOption === "All") setCategorizedData(availProducts);
      if (categoryOption === "Tops")
        setCategorizedData(
          availProducts.filter(
            (data) =>
              data.title.includes("TEE") || data.title.includes("SWEATER")
          )
        );
      if (categoryOption === "Outerwear")
        setCategorizedData(
          availProducts.filter((data) => data.title.includes("HOODIE"))
        );
      if (categoryOption === "Accessories")
        setCategorizedData(
          availProducts.filter((data) => {
            return (
              !data.title.includes("TEE") &&
              !data.title.includes("HOODIE") &&
              !data.title.includes("SWEATER")
            );
          })
        );
    }
    filterByCategory();
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

export default PageMerch;
