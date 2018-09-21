import React,{Component } from 'react';
import Login from '../components/Login';
import { connect }from 'react-redux';
import axios from 'axios';
import { updateUser } from '../reducers/user'
import {upVote } from '../reducers/movie';
import TilesCard from '../components/TilesCard'
export default class Home extends Component {
    constructor(props){
        super ( props);
        this.fetchFlueData = this.fetchFlueData.bind(this);
        this.greetText = this.greetText.bind( this);
        this.clearRead =  this.clearRead.bind(this);
        this.login= false;
        this.state = {
            users:[],
        };
        this.myval = 'shti';
    }
    componentDidMount(){
        {console.log('props here',this.upVote)}
    }
    
  
    
    render(){

      
        if ( this.state.hasErrored) return <p>Some error has occured</p>;    
        if (this.state.isLoading) return <p>....Loadiing</p>;
        const { firstAction }  = this.props;
        const userData = this.state.users.data; 
        return ( 
            <div>
                {this.greetText()}
                <p>{this.props.text}</p>
                        <button className='button' 
                        onClick ={this.fetchFlueData}> Fetch Flue data>> 
                        </button>
                <Login/>
                <button className="button"
                onClick={firstAction}>jere 
                </button>
                {console.log('props',this.props)}
                clear read:{this.myval}
            <TilesCard />
            
            </div>
        );
    }

    // mapStateToProps(state){
    //     return{
    //         title: state.title
    //     };
    // }
    
    fetchFlueData(e){
        // const URL = 'http://localhost:3030/project-drivers-list/60';
        const URL= 'https://jsonplaceholder.typicode.com/users';
        e.preventDefault();
        axios.get (URL)
        .then( response=> this.setState ({    
                users : {
                    data : response.data,
                    status: response.status,
                    text: response.statusText
                    } 
            }));
    }
    clearRead(data){
        
     let _d = data.map ((e)=>{ return <p>{e}</p>; });
        return _d;
        }

    greetText (){
        return(
            this.login ? <p>you are loged in as USer.</p> : <p> you are logged in as Guest</p>
            );
        }
        
} 
function mapStateToProps(state) {
return {
    users:state.users.data
};
}
const mapDispatchToProps = dispatch => {
    return {
      updateUser: () =>
        dispatch({
          type: 'ADD_USER'
        })
    };
  }



function _mapDispatchToProps(dispatch){
    return{
        firstAction:()=>dispatch(updateUser())

    };
}
connect((state )=> state,mapDispatchToProps)(Home)