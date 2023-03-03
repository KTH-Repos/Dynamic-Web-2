import { createHashRouter, RouterProvider }from "react-router-dom";
import Details from "./detailsPresenter";
import Search from "./searchPresenter";
import Sidebar from "./sidebarPresenter";
import Summary from "./summaryPresenter";
import DinnerModel from "../DinnerModel";
//import {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase} from "../firebaseModel";
import "../firebaseModel";

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
                <div className="sidebar"><Sidebar model={myModel} /></div>
                <div><RouterProvider className="flexParent" router={createHashRouter(router)} /></div>
            </div>       
}

export default ReactRoot;