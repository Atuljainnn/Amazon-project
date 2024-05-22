import { renderOrderSummary } from "./checout/orderSummary.js";
import { renderPaymentSummary } from "./checout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js'

loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
