const { initializeApp }= require( "firebase/app");
const { getDatabase, ref, get, set, onValue}= require( "/src/teacherFirebase.js");

// Add relevant imports here 
// TODO
import firebaseConfig from "./firebaseConfig";

// Initialise firebase app, database, ref
// TODO
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const PATH = "DinnerMode34";

//ref(db, PATH+"/TEST").set("dummy");

const rfs = ref(db, PATH+"/test");

get(rfs).then(gotDataACB);
/* const rf = ref(db, PATH+"/test");
set(rf, "dummyssssss55");
 */

function gotDataACB(firebaseData) {
    console.log("This is fetched from FireBase");
    console.log(firebaseData.val());
}


function observerRecap(model) {
    function observerToAddACB(data) {
        //console.log(data);

    }
    model.addObserver(observerToAddACB);
}


function modelToPersistence(/* TODO */){

}

function persistenceToModel(/* TODO */){
    // TODO return a promise
}

function firebaseModelPromise(model) {
    // TODO return a promise chain that
    // 1) retrieves data from firebase using firebase get()
    // 2) saves the data into the model (received as parameter)
    // 3) adds a model observer that calls firebase set() and modelToPersistence()
    // 4) optional: calls firebase onValue() for live update
}


export {observerRecap, modelToPersistence, persistenceToModel, firebaseModelPromise};