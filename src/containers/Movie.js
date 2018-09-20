import React, { Component }from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { upVote, addData,fetchNewTime, initialState } from '../reducers/movie';
export default class Movie extends Component {

    constructor (props){
        super(props);
     
        this.createMovie= this.createMovie.bind(this);
        this.counterUp = this.counterUp.bind(this);
        const data  ={
            name:"zahid",
            age:33
        };
    }
    componentDidMount(){
        console.debug(this)
        console.dir(this);
        console.log ('this dispatch :'+{...this.props.counter},'\nthisdata: '+ this.props.initialState);
    }


    render(){   
      

        return (
            <div> 
                <h1>Movie Page</h1>

                <p> here test the Dux</p>
                    <Button variant="contained" 
                    color="primary"
                    onClick= {this.props.updateTime}>
                        Update Time
                    </Button>
                    <Button variant="contained" 
                    color="primary"
                    onClick= {this.createMovie}>
                        Counter-Up>
                    </Button>
                    Time : {this.state.counter}
            </div>        
        );
    }
    createMovie(){
    console.log ('State provided',this.state);
    }
    

    counterUp(){
        let x =1;
         console.log ( x+=1);
    }   
}

const mapDispatchToProps = dispatch => ({
    updateTime :()=> dispatch(fetchNewTime())
    

})
 
connect (state=>state,mapDispatchToProps )(Movie);