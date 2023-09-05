
import { createStore } from "redux";
import rootreducer from "./redux/main";

const store=createStore(
    rootreducer
)

export default store;