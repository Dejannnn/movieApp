import React, { Component } from 'react';
import { addToFavourite, removeFavourite } from '../actions';
import { connect } from 'react-redux'
class MoviesItem extends Component {

    constructor(props){

        super(props);

        this.state={
            favourite:false
        }
    }

    addToFavourite(){

        this.setState({favourite: !this.state.favourite});
        this.props.addToFavourite(this.props.item);
        console.log(this.props)

    }
    removeFavourite(){

        this.setState({favourite: !this.state.favourite});
        this.props.removeFavourite(this.props.item);
        console.log(this.props)

    }

    displayFav(){

        if(!this.state.favourite){

            return (<span className="glyphicon glyphicon-heart-empty" onClick={()=> this.addToFavourite()}></span>)
        }else{

            return <span className="glyphicon glyphicon-heart" onClick={()=> this.addToFavourite()}></span>
        }
    }

    render() {
        return (


                <div className="col-sm-12 col-md-3">
                    <div className="thumbnail">
                        <img src={"https://image.tmdb.org/t/p/w500/"+this.props.item.poster_path} alt="..." />
                        <div className="caption">
                            <h3>{this.props.item.title}</h3>
                            <p>{this.props.item.overview}</p>
                            <p>{this.props.item.release_date}</p>
                            <p>Reatings: <span className="badge badge-default">{this.props.item.vote_average}</span></p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                            <p>{this.props.showButton ? this.displayFav() : null} </p>
                        </div>
                    </div>
                </div>

        );
    }
}

export default connect(null,{addToFavourite, removeFavourite})(MoviesItem);
