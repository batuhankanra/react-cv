import { configureStore } from "@reduxjs/toolkit";

import modal from "./modals";
import login from "./login";
import phpCategory from "./category"
import phpProduct from "./product"
import getProdoctt from "./getProduct"

const store =configureStore({
    reducer:{
        modal,
        login,
        category:phpCategory,
        product:phpProduct,
        getProduct:getProdoctt

    }

})
export default store