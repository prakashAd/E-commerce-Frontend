
import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import { getAllProducts, getFilteredProducts } from "../../api/productapi";
import { Container } from "@mui/system";
import Cards from "../Cards";
import CategoryCheckBox from "./CategoryCheckBox";
import PricesRadio from "./PricesRadio";
import { getListItemUtilityClass, Grid } from "@mui/material";

const Products = () => {

  let [sortBy, setsortBy] = useState('product_price')
  let [order, setorder] = useState('desc')
  let [limit, setlimit] = useState('20')
  let [products, setProducts] = useState([])
  let [myFilter, setMyFilter] = useState({
    filter: { product_price: [], category: [] },
  });

  const handleFilter = (filters, filterBy) => {
    let new_filter = { ...myFilter };
    new_filter.filter[filterBy] = filters;
    setMyFilter(new_filter);
    console.log(myFilter);
  };

  useEffect(() => {
    getFilteredProducts(myFilter,sortBy,order,limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  }, [myFilter]);
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={3}>
            <CategoryCheckBox handleCategory={handleFilter} />
            <PricesRadio handlePrice={handleFilter} />
          </Grid>
          <Grid item xs={9}>
            Products
            <Grid container spacing={3}>
              {products &&
                products.map((product, i) => {
                  return (
                    <Grid item xs={2}>
                      <Cards item={product} key={i}></Cards>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;
