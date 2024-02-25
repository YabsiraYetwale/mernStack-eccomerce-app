import * as api from "../api";
import {
  CREATE,
  FETCH_ALL,
  FETCH,
  UPDATE,
  DELETE,
  START_LOADNG,
  END_LOADNG,
} from "../components/actionTypes";

export const createProduct = (product, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADNG });
    const { data } = await api.createProduct(product);
    dispatch({ type: CREATE, payload: data });
    history("/");
    dispatch({ type: END_LOADNG });
  } catch (error) {
    console.log(error);
  }
};
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADNG });
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADNG });
  } catch (error) {
    console.log(error);
  }
};
export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADNG });
    const { data } = await api.fetchProduct(id);
    dispatch({ type: FETCH, payload: data });
    dispatch({ type: END_LOADNG });
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = (id, product, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADNG });
    const { data } = await api.updateProduct(id, product);
    dispatch({ type: UPDATE, payload: data });
    history(`/product/${id}`);
    dispatch({ type: END_LOADNG });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = (id, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADNG });
    await api.deleteProduct(id);
    dispatch({ type: DELETE, payload: id });
    history("/");
    dispatch({ type: END_LOADNG });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADNG });
    await api.deleteProduct(id);
    dispatch({ type: DELETE, payload: id });
    dispatch({ type: END_LOADNG });
  } catch (error) {
    console.log(error);
  }
};
