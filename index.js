const redux = require('redux');

const createStore = redux.createStore;

console.log('hej från index.js');

const BUY_CHEESE = 'BUY_CHEESE'; // konstant sträng
const ADD_CHEESE = 'ADD_CHEESE'; // konstant sträng

function buyCheese() {
    return {
        type: BUY_CHEESE,
        info: 'One less cheese in the store please'
    }
}

function addCheese() {
    return {
        type: ADD_CHEESE,
        info: 'One more cheese to the store please'
    }
}

//reducer = (previousState, action) => new State

const initialState = {
    numberOfCheeses: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CHEESE: return {
            ...state, //här ber vi funktionen att skapa en kopia av det tidigare statet (vi muterar inte statet - vi returnerar ett helt nytt objekt)
            numberOfCheeses: state.numberOfCheeses - 1  // och sen bara ändra på detta state
        }
        case ADD_CHEESE: return {
            ...state,
            numberOfCheeses: state.numberOfCheeses + 1
        }
        default: return state  //back-up om vi inte får någon träff på action - så returnerar vi bara det initiala statet - AKA ingen förändring/skada skedd
    }
}


const store = createStore(reducer); //skapa vår store å koppla vår reducer till denne

console.log('initial state ', store.getState()); //logga ut statet

//nästa steg är att meddela vår store att något händer
store.subscribe(() => {
    console.log('updated state ', store.getState());
})

//sedan gör vi en dispatch för att uppdatera statet
//vi ber biträdet gå med vår action (buyCheese) till store och uppdatera statet
store.dispatch(buyCheese());
store.dispatch(buyCheese());
store.dispatch(buyCheese());
store.dispatch(buyCheese());
store.dispatch(buyCheese());
store.dispatch(buyCheese());
store.dispatch(buyCheese());

//hantera avregistrering av lyssnare

const unsubscribe = store.subscribe(() => {
    console.log('updated state ', store.getState());
});

unsubscribe();

//Nu har vi implementerat alla våra responsibilities