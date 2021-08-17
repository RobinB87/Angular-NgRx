import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const loadProducts = createAction('[Product] Load');

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailed = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);
