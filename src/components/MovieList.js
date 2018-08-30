import React,{Component } from 'react';
import { Table } from 'react-bootstrap';



const dataset = require('../../data/movies.json');

export default class MovieList extends Component{
 
    render(){
        const ourVal = "This is link to movie database";
        const database = this.dataset;
        
        return(
            <div>
                <h2>Table of Movies </h2>
              <Table stripped bordered condensed hover >
                <thead>
                <th>Title</th><th>Year</th><th>Director</th>
                </thead>
                <tbody>
                    {this.printMovieList(dataset)}
                </tbody>
              </Table>
            </div>
        );
    }
 
    makeCharts(data){
        
    }
    
    printMovieList ( data ){        
        // this could be anotehr component data passed to by properties 
        // user here redux as we are moving towards update, and patch
      const myX = data.map((e,i,arr) => {
            
      return (
              <tr>
                 <td>{e.title} </td>
                  <td>{e.year} </td>
                 <td>{e.director} </td>
              </tr>
         
              );
            });
      return myX;
    }
}


