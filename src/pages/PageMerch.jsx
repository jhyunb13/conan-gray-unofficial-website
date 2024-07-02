import { useState, useEffect } from "react";

import FilterList from "../components/FilterList";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import Footer from "../ui/Footer";
import AlertNoResult from "../ui/AlertNoResult";

import { useCurrentList } from "../hooks/useCurrentList";
import { usePageData } from "../hooks/usePageData";
import { useData } from "../contexts/DataContext";

function PageMerch() {
  const { merchData, category } = useData();
  const { setFilterOption, currentList } = useCurrentList(merchData);

  const [categoryOption, setCategoryOption] = useState("All");
  const [categorizedData, setCategorizedData] = useState(currentList);

  const { pageContent, totalPage, currentPage } = usePageData(categorizedData);

  useEffect(() => {
    function filterByCategory() {
      if (categoryOption === "All") setCategorizedData(currentList);
      if (categoryOption === "Tops")
        setCategorizedData(
          currentList.filter(
            (data) =>
              data.title.includes("TEE") || data.title.includes("SWEATER")
          )
        );
      if (categoryOption === "Outerwear")
        setCategorizedData(
          currentList.filter((data) => data.title.includes("HOODIE"))
        );
      if (categoryOption === "Accessories")
        setCategorizedData(
          currentList.filter((data) => {
            return (
              !data.title.includes("TEE") &&
              !data.title.includes("HOODIE") &&
              !data.title.includes("SWEATER")
            );
          })
        );
    }
    filterByCategory();
  }, [categoryOption, currentList]);

  return (
    <>
      <main id="store-page">
        <FilterList
          category={category.merch}
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
