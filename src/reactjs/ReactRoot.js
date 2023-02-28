import { createHashRouter, RouterProvider }from "react-router-dom";
import Details from "./detailsPresenter";
import Search from "./searchPresenter";
import Sidebar from "./sidebarPresenter";
import Summary from "./summaryPresenter";
import DinnerModel from "../DinnerModel";

function ReactRoot() {

    const myModel = new DinnerModel();
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

    return(
        <div>
            <div className="sidebar"><Sidebar model={myModel} /></div>
            <div className="flexParent"><RouterProvider router={createHashRouter(router)} /></div>
        </div>
    );       
}

export default ReactRoot;