import {ADD_FAV} from '../actions'
import {REMOVE_FAV} from '../actions'
function addToFavourite(state= [], action) {

    switch (action.type){
        case ADD_FAV:
            console.log("Favourite move", action.movie);
            let favouriteMovie=[...state, action.movie];
            return favouriteMovie;
        case REMOVE_FAV:
            console.log("Favourite move", action.movie);

            favouriteMovie=state.filter(item=> item.id !== action.movie.id);
            return favouriteMovie;
        default:
            return state;
    }

}

export default addToFavourite;