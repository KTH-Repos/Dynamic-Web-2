import { createHashRouter, RouterProvider }from "react-router-dom";
import Details from "./detailsPresenter";
import Search from "./searchPresenter";
import Sidebar from "./sidebarPresenter";
import Summary from "./summaryPresenter";
import DinnerModel from "../DinnerModel";
import "../firebaseModel";
//import {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase} from "../firebaseModel";

const myModel = new DinnerModel();

function ReactRoot() {

    //console.log("This is props passed downt to ReactRoot");
    //console.log(myModel);
    const router = [
        {
            path: "/",
            element: <Search model={myModel} /> 
        },
        {
            path: "/search",
            element: <Search model={myModel} />
        },
        {
            path: "/details",
            element: <Details model={myModel} />
        },
        {
            path: "/summary",
            element: <Summary model={myModel} />
        }
    ]

    return  <div>
                <div><Sidebar model={myModel} /></div>
                <div><RouterProvider router={createHashRouter(router)} /></div>
            </div>       
}

export default ReactRoot;