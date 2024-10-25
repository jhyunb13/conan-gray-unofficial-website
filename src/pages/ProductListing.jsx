import FilterList from "../features/product-listing/FilterList";
import ProductList from "../features/product-listing/ProductList";
import Pagination from "../features/product-listing/Pagination";
import AlertNoResult from "../ui/AlertNoResult";
import styles from "./ProductListing.module.css";

import { useFilters } from "../hooks/useFilters";
import { usePageData } from "../hooks/usePageData";
import { useData } from "../contexts/DataContext";
import { useLocation } from "react-router-dom";

function ProductListing() {
  let data = [];

  const { pathname } = useLocation();
  const { allItemData, foundHeavenItemData, superacheItemData } = useData();

  if (pathname === "/store") data = allItemData;
  if (pathname.includes("found-heaven")) data = foundHeavenItemData;
  if (pathname.includes("superache")) data = superacheItemData;

  const { categorizedItems } = useFilters(data);
  const { pageContent, totalPage, currentPage } = usePageData(categorizedItems);

  if (!categorizedItems.length)
    return (
      <main className="product-listing">
        <FilterList />
        <AlertNoResult type="no-results">No results found</AlertNoResult>
      </main>
    );

  if (data.length)
    return (
      <main className={styles.storePage}>
        <FilterList />
        <ProductList
          pageContent={pageContent}
          dataAvail={categorizedItems.length}
        />
        <Pagination totalPage={totalPage} currentPage={currentPage} />
      </main>
    );
}

export default ProductListing;
