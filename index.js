console.log('hej från index.js');

const BUY_CHEESE = 'BUY_CHEESE'; // konstant sträng

function buyCheese() {
    return {
        type: BUY_CHEESE,
        info: 'One less cheese in the store please'
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
        default: return state  //back-up om vi inte får någon träff på action - så returnerar vi bara det initiala statet - AKA ingen förändring/skada skedd
    }
}