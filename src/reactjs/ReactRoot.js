import { createHashRouter, RouterProvider }from "react-router-dom";
import Details from "./detailsPresenter";
import Search from "./searchPresenter";
import Sidebar from "./sidebarPresenter";
import Summary from "./summaryPresenter";
import DinnerModel from "../DinnerModel";

function ReactRoot(props) {

    //const myModel = new DinnerModel();
    const router = [
        {
            path: "/",
            element: <Search model={props.model} /> 
        },
        {
            path: "/search",
            element: <Search model={props.model} />
        },
        {
            path: "/details",
            element: <Details model={props.model} />
        },
        {
            path: "/summary",
            element: <Summary model={props.model} />
        }
    ]

    return(
        <div>
            <div className="sidebar"><Sidebar model={props.model} /></div>
            <div className="flexParent"><RouterProvider router={createHashRouter(router)} /></div>
        </div>
    );       
}

export default ReactRoot;