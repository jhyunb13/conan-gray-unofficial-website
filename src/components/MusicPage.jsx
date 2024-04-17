import Category from "./Category";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

function MusicPage() {
  const {
    musicData: [musicData, setMusicData],
  } = useOutletContext();
  const location = useLocation();

  const category = musicData[0];

  const [productData, setProductData] = useState(
    musicData[1].filter((data) => !data.availability)
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
    if (filterOption === "All") setProductData(musicData[1]);
    else if (filterOption === "Out of Stock")
      setProductData(musicData[1].filter((data) => data.availability));
    else if (filterOption === "In Stock")
      setProductData(musicData[1].filter((data) => !data.availability));
  }, [filterOption, musicData]);

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
      <div className="store-page pt-35 pb-50">
        <Category
          options={category}
          setCategoryOption={setCategoryOption}
          setFilterOption={setFilterOption}
        />
        <ProductList content={content} />
        <Pagination
          totalPage={totalPage}
          pageNumbers={pageNumbers}
          currentParam={currentParam}
          scrollToTop={handleScrollToTop}
        />
      </div>
      <Footer />
    </>
  );
}

export default MusicPage;
