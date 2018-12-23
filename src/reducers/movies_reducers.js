import {MOVIES} from "../actions/index";

export default function movies(state= [], action) {


    switch (action.type){
        case MOVIES:
            console.log("MOviess is switched", action.items);

            return action.items;

        default:
            return state;
    }

}