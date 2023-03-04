/* 
   This component uses Vue-specific and React-specific presenters: Sidebar, Summary, Search, Details, Show 
   Therefore it needs to import from alternative paths, depending on the framework. 
   To achieve that, we use require() with a prefix, instead of import.
*/

const PREFIX=window.location.toString().includes("react")?"reactjs":"vuejs";

const Summary=require("../"+PREFIX+"/summaryPresenter.js").default;

const Sidebar = require("../"+PREFIX+"/sidebarPresenter.js").default;

const Search = require("../"+PREFIX+"/searchPresenter.js").default;

const Details = require("../"+PREFIX+"/detailsPresenter.js").default;

const ReactRoot = require("../"+PREFIX+"../reactjs/ReactRoot").default

export default
function App(){
    return (<div className="flexParent">
                {/* <ReactRoot /> */}
                <div className="sidebar"><Sidebar model ={props.model}/></div>
                <div className="summary"><Summary model={props.model} /></div>
                <div className="search"  ><Search model={props.model} /></div>
                <div className="details" ><Details model={props.model} /></div>
            </div>
           );
}
