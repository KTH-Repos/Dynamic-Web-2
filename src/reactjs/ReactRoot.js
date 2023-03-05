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
            element: <div ><Search model={myModel} /></div>
        },
        {
            path: "/search",
            element: <div ><Search model={myModel} /></div>
        },
        {
            path: "/details",
            element: <div ><Details model={myModel} /></div>
        },
        {
            path: "/summary",
            element: <div ><Summary model={myModel} /></div>
        }
    ]

    return  ( promiseNoData(promiseState) || 
        (<div className="flexParent">
                <div className="sidebar"><Sidebar model={myModel} /></div>
                <div className="main-content"><RouterProvider router={createHashRouter(router)} /></div>
            </div>)  );     
}

export default ReactRoot;