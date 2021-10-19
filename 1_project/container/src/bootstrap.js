import { mount as productsMount } from "products/ProductIndex";
import { mount as cartMount } from"cart/CartShow";

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));


