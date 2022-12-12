import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./people";

const store = configureStore({
    reducer: {
      people: peopleReducer
    },
});

export default store;
