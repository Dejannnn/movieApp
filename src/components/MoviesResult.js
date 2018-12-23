import React, {Component} from 'react';
import Search from './Search';
import MovieFavList from './MoviesFavouriteList';
import MoviesItems from './MoviesItem';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class MoviesResult extends Component{


    render(){
        return (
            <div>
                <Link to="/fav">LInk</Link>
                <Search/>
               <div className="row">
                {this.props.movies.map(item =>{
                    return <MoviesItems item={item} key={item.id} showButton={true}/>
                })}
                </div>
            </div>

        );
    }

}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
};
export default connect(mapStateToProps,null)(MoviesResult)


