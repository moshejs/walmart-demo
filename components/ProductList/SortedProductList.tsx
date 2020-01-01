import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import ProductList from './ProductList'
import { SortingTypes } from '../../store'

const selectProducts = state => state.products.currentProducts
const selectSortType = state => state.sortType

interface Product {
    type: string;
    price: string;
}

function parsePrice(price: string) {
    return price.split('-')[0].split('$')[1]
}

const selectSortedProducts = createSelector(
  [selectProducts, selectSortType],
  (products: any[], filter) => {
    switch (filter) {
      case SortingTypes.NONE:
        return products
      case SortingTypes.PRICE_ASC:
        return products.slice().sort((a: Product, b: Product)  =>  Number(parsePrice(a.price)) -  Number(parsePrice(b.price)))
      case SortingTypes.PRICE_DESC:
        return products.slice().sort((a: Product, b: Product)  =>  Number(parsePrice(b.price)) -  Number(parsePrice(a.price)))
      case SortingTypes.TOP_RATED:
        return products.slice().sort((a: Product, b: Product)  =>  Number(b.type === 'TOP_RATED') - Number(a.type === 'TOP_RATED'))
      case SortingTypes.POPULAR:
        return products.slice().sort((a: Product, b: Product)  => Number(b.type === 'POPULAR') - Number(a.type === 'POPULAR'))
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
)


const mapStateToProps = state => ({
  products: selectSortedProducts(state)
})


export default connect(mapStateToProps)(ProductList)
