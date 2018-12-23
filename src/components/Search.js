import React, {Component} from 'react';
import {Button,Form,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';
import {API_KEY} from "../secrets";
import {movies} from "../actions";
import { connect } from 'react-redux';

class Search extends Component{

    constructor(props){

        super(props);

        this.state={
            query:''
        }

    }
    search(){

        console.log('asdasd', this.state.query);
        let url= `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=1&query=${this.state.query}`
        console.log(url);
        fetch(url, {method: "GET"})
            .then((response)=>  response.json())
            .then( jsonObj=> {this.props.movies(jsonObj.results)})
    }


    render(){
        return(

            <Form inline className="col-md-offset-3">
                <FormGroup>
                    <ControlLabel>Search:</ControlLabel>
                    <FormControl type="text" placeholder="Normal text" onChange={(event) =>  this.setState({query: event.target.value})}/>
                </FormGroup>
                <Button bsStyle="primary" onClick={()=> this.search()}>Serach</Button>
            </Form>
        );
    }

}

export default connect(null, { movies })(Search)