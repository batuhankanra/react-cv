import { configureStore } from "@reduxjs/toolkit";

import modal from "./modals";
import login from "./login";
import cSlice from "./categories"
import phpCategory from "./category"

const store =configureStore({
    reducer:{
        modal,
        login,
        categories:cSlice,
        category:phpCategory
    }

})
export default store