// Add relevant imports here 
import React from "react";
import { createHashRouter, RouterProvider }from "react-router-dom";
import Details from "./detailsPresenter";
import Search from "./searchPresenter";
import Sidebar from "./sidebarPresenter";
import Summary from "./summaryPresenter";
// Define the ReactRoot component
export default
function ReactRoot() {

    const myModel = new DinnerModel();
    const router = [
        {
            path: "/",
            element: < Search model={myModel} /> 
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
            <div><Sidebar model={myModel} /></div>
            <div><RouterProvider router={createHashRouter(router)} /></div>
        </div>
    );
}

// Export the ReactRoot component
