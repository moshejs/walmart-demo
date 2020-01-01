import React from 'react'
import { connect } from 'react-redux'


import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import SortedProductList from '../components/ProductList/SortedProductList';


import '../styles.scss'

import Menu from '../components/MobileMenu/Menu';
import { fetchProducts } from '../store';
import Head from '../components/Head';

class Index extends React.Component<any, any>  {
 
  static async getInitialProps({ reduxStore }) {
    await reduxStore.dispatch(fetchProducts())
    return {};
  }

  render() {
    return  <>
      <Head />
      <Menu />
      <Layout>
        <Hero />
        <SortedProductList />
      </Layout>
    </>
  }
}

export default connect()(Index)
