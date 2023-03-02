import firebaseConfig from "./firebaseConfig";


const { initializeApp }= require( "firebase/app");
const { getDatabase, ref, get, set, onValue}= require( "/src/teacherFirebase.js");
// Add relevant imports here 
// TODO

// Initialise firebase
// TODO
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const PATH = "dinnerModel34";


function observerRecap(/*TODO*/) {
    //TODO
}

function firebaseModelPromise() {
    function makeBigPromiseACB(firebaseData) {
        //TODO
    }
    return;
}

function updateFirebaseFromModel(model) {
    //TODO
    return;
}

function updateModelFromFirebase(model) {
    //TODO
    return;
}

// Remember to uncomment the following line:
export {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase};