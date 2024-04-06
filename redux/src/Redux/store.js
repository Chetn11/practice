import {legacy_createStore} from "redux";
import { ProductReducer } from "./ProductReducer/ProductReducer";

export const store=legacy_createStore(ProductReducer);