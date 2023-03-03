import { createHashRouter, RouterProvider }from "react-router-dom";
import Details from "./detailsPresenter";
import Search from "./searchPresenter";
import Sidebar from "./sidebarPresenter";
import Summary from "./summaryPresenter";
import DinnerModel from "../DinnerModel";
import "../firebaseModel";

const myModel = new DinnerModel();

function ReactRoot() {

    const router = [
        {
            path: "/",
            element: <div className="search"><Search model={myModel} /></div>
        },
        {
            path: "/search",
            element: <div className="search"><Search model={myModel} /></div>
        },
        {
            path: "/details",
            element: <div className="details"><Details model={myModel} /></div>
        },
        {
            path: "/summary",
            element: <div className="summary"><Summary model={myModel} /></div>
        }
    ]

    return  <div className="flexParent">
                <div className="sidebar"><Sidebar model={myModel} /></div>
                <div><RouterProvider router={createHashRouter(router)} /></div>
            </div>       
}

export default ReactRoot;