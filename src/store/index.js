import { configureStore } from "@reduxjs/toolkit";

import modal from "./modals";
import login from "./login";

const store =configureStore({
    reducer:{
        modal,
        login
    }

})
export default store