import { createHashRouter, RouterProvider }from "react-router-dom";
import Details from "./detailsPresenter";
import Search from "./searchPresenter";
import Sidebar from "./sidebarPresenter";
import Summary from "./summaryPresenter";
import DinnerModel from "../DinnerModel";
import {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase} from "../firebaseModel";

// const myModel= new DinnerModel();

// define the routes

// export default function ReactRoot() { TODO }
