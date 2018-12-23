import React, {Component} from 'react';
import { connect } from 'react-redux';
import MoviesItems from './MoviesItem';
import {Link} from 'react-router-dom'
class MoviesFavouriteList extends Component{

    render(){

        return (
           <div>
               <h4>Favourite movies</h4>
               <Link to="/">Home</Link>
               {this.props.favourites.map((item)=>{

                  return <MoviesItems item={item} key={item.id} showButton={false}></MoviesItems>
               })}
            </div>
        )



    }



}

function mapStateToProps(state) {

    console.log(state);
    return {
        favourites: state.favourites
    }
};
export default connect(mapStateToProps,null)(MoviesFavouriteList)
