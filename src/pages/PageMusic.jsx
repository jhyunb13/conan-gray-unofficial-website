import { useState, useEffect } from "react";

import FilterList from "../components/FilterList";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import Footer from "../ui/Footer";
import AlertNoResult from "../ui/AlertNoResult";

import { useCurrentList } from "../hooks/useCurrentList";
import { usePageData } from "../hooks/usePageData";
import { useData } from "../contexts/DataContext";

function PageMusic() {
  const { musicData, category } = useData();
  const { setFilterOption, currentList } = useCurrentList(musicData);

  const [categoryOption, setCategoryOption] = useState("All");
  const [categorizedData, setCategorizedData] = useState(currentList);

  const { pageContent, totalPage, currentPage } = usePageData(categorizedData);

  useEffect(() => {
    if (categoryOption === "All") setCategorizedData(currentList);
    if (categoryOption === "CD")
      setCategorizedData(
        currentList.filter(
          (data) => data.title.includes("CD") || data.title.includes("Box")
        )
      );
    if (categoryOption === "LP")
      setCategorizedData(
        currentList.filter(
          (data) => data.title.includes("LP") || data.title.includes("Vinyl")
        )
      );
    if (categoryOption === "Cassette")
      setCategorizedData(
        currentList.filter((data) => data.title.includes("Cassette"))
      );
  }, [categoryOption, currentList]);

  return (
    <>
      <main id="store-page">
        <FilterList
          category={category.music}
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

export default PageMusic;
