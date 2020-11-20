
import React, { useEffect, useState } from "react";
import Table from './Components/Table.js';

// http://starlord.hackerearth.com/beercraft

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          beers: [],
    
        };
    }
  
    componentDidMount() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json'
      fetch(proxyUrl + targetUrl)
        .then((res) => res.json())
        .then(
          (result) => {
        console.log(result);
            this.setState({
              isLoaded: true,
              beers: result,
              
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { beers, error, isLoaded} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
        } 
      if (!isLoaded) {
        return <div>Loading...</div>;
        } 
      return(
        <div>
          <Table beers = { beers }/>
        </div>
      );  
    }y
  }
  
  export default (App);