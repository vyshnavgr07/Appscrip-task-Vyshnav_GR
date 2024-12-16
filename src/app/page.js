"use client";
import styles from "./page.module.css";
import Title from "@/components/home/title/Title";
import FilterHeader from "@/components/filterHeader/FilterHeader";
import FilterSidebar from "@/components/filter/filterSidear/FilterSidebar";
import ProductList from "@/components/productlist/ProductList";
import { useState } from "react";
import Head from "next/head";
export default function Home() {
  const [isSidebar, setIsSidebar] = useState(true);

  const handleSidebar = () => {
    setIsSidebar((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Home - Your Site Name</title>
        <meta
          name="description"
          content="Explore the best products on our site with filters and a product list. Easily navigate through our categories and find exactly what you need."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://example.com/home" />
        <meta property="og:title" content="Home - Your Site Name" />
        <meta
          property="og:description"
          content="Explore the best products on our site with filters and a product list. Easily navigate through our categories and find exactly what you need."
        />
        <meta property="og:url" content="https://example.com/home" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Home - Your Site Name" />
        <meta
          name="twitter:description"
          content="Explore the best products on our site with filters and a product list. Easily navigate through our categories and find exactly what you need."
        />
      </Head>
      <div className={styles.home}>
        <div className={styles.titleContainer}>
          <Title />
        </div>
        <div className={styles.secondContainer}>
          <FilterHeader handleSidebar={handleSidebar} isSidebar={isSidebar} />
          <div className={styles.mainContainer}>
            {isSidebar && (
              <div className={styles.sidebar}>
                <FilterSidebar />
              </div>
            )}
            <div className={styles.productList}>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
