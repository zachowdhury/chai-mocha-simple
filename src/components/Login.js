import React, {Component} from 'react';
import { 
    Button, 
    FormGroup, 
    FormControl, 
    ControlLabel 
    } 
from 'react-bootstrap';




export default class Login extends  Component{

    // constructor(props, context) {
    //     super(props, context);
    
    //     this.handleChange = this.handleChange.bind(this);
    
    //     this.state = {
    //       value: ''
    //     };
    //   }
    
    //   getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    //   }
    
    //   handleChange(e) {
    //     this.setState({ value: e.target.value });
    //   }
    
    render(){
        return(
            <div>
                    <form>
                        <FormGroup
                        controlId="loginEmail"
                        //validationState={this.getValidationState()}
                        >
                        <ControlLabel>Existing User login</ControlLabel>
                        <FormControl
                            type="text"
                            // value={this.state.value}
                            placeholder="Enter text"
                            // onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                       {/* // <HelpBlock>Validation is based on string length.</HelpBlock> */}
                        </FormGroup>
                        <Button> Login Here</Button>
                        <button onClick={this.handleClick}>Console Store</button>
                    </form>
                </div>
        );
    }
    // actionMovieList(){
        handleClick(e){
            e.preventDefault();
            console.log('buttonClicked and state:', this.store);
        }

    // }

}
