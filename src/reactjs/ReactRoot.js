import { createHashRouter, RouterProvider }from "react-router-dom";
import Details from "./detailsPresenter";
import Search from "./searchPresenter";
import Sidebar from "./sidebarPresenter";
import Summary from "./summaryPresenter";
import DinnerModel from "../DinnerModel";
import "../firebaseModel";
import { useState,useEffect } from "react";
import resolvePromise from "../resolvePromise";
import { firebaseModelPromise, modelToPersistence, persistenceToModel } from "../firebaseModel";
import promiseNoData from "../views/promiseNoData";

const myModel = new DinnerModel();

function ReactRoot() {

    
    const [promiseState, ] = useState({});  //maybe an empty object for initialization??

    function useForceUpdate() {
        const [, forceUpdate] = useState();
        const reRenderACB = () => forceUpdate(new Object());
      
        return reRenderACB;
      }

      function updateOnPromise(promise, reRender) {
        if (promise) {
          promise.then(reRender).catch(reRender);
          reRender(); 
        }
      }

    //a function from custom hook to update state
    const reRenderACB = useForceUpdate();

    function lifeACB(){
        const cloudModel = firebaseModelPromise(myModel);
        if(cloudModel){
            resolvePromise(cloudModel, promiseState);
            updateOnPromise(promiseState.promise, reRenderACB);
        }
    
        return function ripACB(){console.log("")}
    }

    useEffect(lifeACB,[])
    console.log(promiseState)


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

    return  ( promiseNoData(promiseState) || 
        (<div className="flexParent">
                <div className="sidebar"><Sidebar model={myModel} /></div>
                <div><RouterProvider router={createHashRouter(router)} /></div>
            </div>)  );     
}

export default ReactRoot;