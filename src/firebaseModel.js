const { initializeApp }= require( "firebase/app");
const { getDatabase, ref, get, set, onValue}= require( "/src/teacherFirebase.js");

// Add relevant imports here 
// TODO
import firebaseConfig from "./firebaseConfig";
import { getMenuDetails } from "./dishSource";

// Initialise firebase app, database, ref
// TODO
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const PATH = "DinnerModel34";

const rf = ref(db, PATH+"/test");
set(rf, "dummy");


function observerRecap(model) {
    function observerToAddACB(data) {
        console.log(data);
    }
    model.addObserver(observerToAddACB);
}

function modelToPersistence(model){
    let persistedData = {};

    function extractIdCB(dish) {
        return dish.id;
    }
    function sortComparatorCB(x, y) {
        return x - y;
    }

    //extract numberOfGuests from model
    persistedData.numberOfGuests = model.numberOfGuests;  

    //extract ids and sort them
    persistedData.dishes = model.dishes.map(extractIdCB);    
    persistedData.dishes.sort(sortComparatorCB);
    
    //extract currentDish
    if(model.currentDish === undefined) {
        persistedData.currentDish = null;
    }
    persistedData.currentDish = model.currentDish;
    return persistedData;
}

function persistenceToModel(persistedData, model){
    // TODO return a promise
    function setDishesToModelACB(dishArray) {
        return model.dishes = dishArray;  
    }

    if(persistedData) {
        model.numberOfGuests = persistedData.numberOfGuests;
        model.currentDish = persistedData.currentDish;
        if(persistedData.dishes) {
            return getMenuDetails(persistedData.dishes).then(setDishesToModelACB);    
        }
    }
    else {model.numberOfGuests = 2;}
    
}

function firebaseModelPromise(model) {
    // TODO return a promise chain that
    // 1) retrieves data from firebase using firebase get()
    // 2) saves the data into the model (received as parameter)
    function putDataToModelACB(dataFromFirebase) {
        return persistenceToModel(dataFromFirebase.val(), model);
    }

    // 3) adds a model observer that calls firebase set() and modelToPersistence()
    function observerToPersistModelACB() {
        function observerToPersist() {
            let modelModified = modelToPersistence(model);
            set(ref(db, PATH+"/appState"), modelModified);
        }
        model.addObserver(observerToPersist);
        return model;
      }

    return get(ref(db, PATH+"/appState")).then(putDataToModelACB).then(observerToPersistModelACB);

    // 4) optional: calls firebase onValue() for live update
}

export {observerRecap, modelToPersistence, persistenceToModel, firebaseModelPromise};