import React from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../store/reducers";

import Head from "../components/Head";
import Menu from "../components/MobileMenu/Menu";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import SortedProductList from "../components/ProductList/SortedProductList";

import "../stylesheets/styles.scss";

class Index extends React.Component<any, any> {
  static async getInitialProps({ reduxStore }) {
    await reduxStore.dispatch(fetchProducts());
    return {};
  }

  render() {
    return (
      <>
        <Head />
        <Menu />
        <Layout>
          <Hero />
          <SortedProductList />
        </Layout>
      </>
    );
  }
}

export default connect()(Index);
