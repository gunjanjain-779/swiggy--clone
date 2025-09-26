import {configureStore} from "@reduxjs/toolkit"
import slice1Reducer from "./cartslice"

const Appstore= configureStore({
  reducer:{
    slice1: slice1Reducer
  },
});

export default Appstore; 