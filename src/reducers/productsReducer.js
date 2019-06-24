import { products,card } from '../api/products.json'


const initState = {
  products,
  card,
}
const productsReducer = (state = initState, action) => {
  return state;
};
export default productsReducer;