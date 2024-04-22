import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";

export default configureStore({
    reducer: {
        cart: cartslice,
    },
});
