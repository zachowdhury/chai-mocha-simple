import React, { Component }from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { upVote, addData,  } from '../reducers/movie';
import { fetchNewTime ,initialState} from '../reducers/time';
export default class Movie extends Component {

    constructor (props){
        super(props);
     
        this.createMovie= this.createMovie.bind(this);
        this.counterUp = this.counterUp.bind(this);
        
        this.state  ={
            name:"zahid",
            age:33,
            currentTime: new Date().toDateString(),
        };
    }
    componentDidMount(){
        console.debug(this)
        console.dir(this);
        console.log ('this dispatch :'+{...this.props.counter},'\nthisdata: '+ this.props.initialState);
    }
    
    render(){   
     const    nowTime = new Date().toString();

        return (
            <div> 
                <h1>Movie Page</h1>

                    <p> 
                       <b>Time : {this.props.currentTime} </b>
                    </p> 

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
                  
            </div>        
        );
    }
    /*** */
    createMovie(){
    console.log ('State provided',this.state.currentTime);
    }
    /** */
    counterUp(){
        let x =1;
         console.log ( x+=1);
    }   
}

const mapDispatchToProps = dispatch => ({
    updateTime :()=> dispatch(fetchNewTime())
    

})
 const mapStateToProps =(state)=>{
     return{
         currentTime: state.currentTime
        };

 }
connect ( 
    mapStateToProps, 
    mapDispatchToProps 
    )(Movie);