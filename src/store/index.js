import { configureStore } from "@reduxjs/toolkit";

import modal from "./modals";
import login from "./login";
import phpCategory from "./category"
import phpProduct from "./product"

const store =configureStore({
    reducer:{
        modal,
        login,
        category:phpCategory,
        product:phpProduct

    }

})
export default store