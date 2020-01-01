import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {
  configureStore,
  getDefaultMiddleware,
  createSlice,
  Action,
  combineReducers,
  PayloadAction
} from "@reduxjs/toolkit";

import { getProducts } from "./api/walmartAPI";

export const SortingTypes = {
  NONE: "NONE",
  POPULAR: "POPULAR",
  TOP_RATED: "TOP_RATED",
  PRICE_ASC: "PRICE_ASC",
  PRICE_DESC: "PRICE_DESC"
};

interface ProductsState {
  currentProducts: any[];
  isLoading: boolean;
  error: string | null;
  siteTitle: string;
  sectionTitle: string;
  cart: number;
}

const ProductsInitialState: ProductsState = {
  currentProducts: [],
  siteTitle: "",
  sectionTitle: "",
  cart: 0,
  isLoading: null,
  error: null
};

// REDUCERS
const productsSlice = createSlice({
  name: "products",
  initialState: ProductsInitialState,
  reducers: {
    getProductsStart(state: ProductsState) {
      state.isLoading = true;
    },
    getProductsSuccess(state: ProductsState, { payload }: PayloadAction<any>) {
      const { items, site_title, section_title, cart } = payload; // cart too
      state.currentProducts = items;
      state.siteTitle = site_title;
      state.sectionTitle = section_title;
      state.cart = cart.quantity;
      state.isLoading = false;

      // state.error = null
    },
    getProductsError(state, action) {
      state.isLoading = false;
      // state.error = action.payload;
    }
  }
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsError
} = productsSlice.actions;

export const fetchProducts = (): AppThunk => async dispatch => {
  try {
    dispatch(getProductsStart());
    const res = await getProducts();
    dispatch(getProductsSuccess(res));
  } catch (err) {
    dispatch(getProductsError(err));
  }
};

//   const { getProducts } = productsSlice.actions

const sortingSlice = createSlice({
  name: "Sorts",
  initialState: SortingTypes.NONE,
  reducers: {
    setSortingType(state, action) {
      return action.payload;
    }
  }
});

export const { setSortingType } = sortingSlice.actions;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: false,
  reducers: {
    toggleMobileMenu(state) {
      return !state;
    }
  }
});

export const { toggleMobileMenu } = mobileMenuSlice.actions;

// ROOT REDUCER
const rootReducer = combineReducers({
  products: productsSlice.reducer,
  sortType: sortingSlice.reducer,
  mobileMenuVisible: mobileMenuSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export function initializeStore(initialState: RootState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware, ...getDefaultMiddleware()],
    preloadedState: initialState
  });

  // if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  //     (module as any).hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  // }

  return store;
}
