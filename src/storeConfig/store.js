import { combineReducers, createStore } from "redux";

const reducers = combineReducers ({
    prop3: function( state, action ) {
        return {
            url: "https://desafio.eadplataforma.com/api/1"
        }
    },
})

function store () {
    return createStore( reducers )
}

export default store