import React,{Component, PropertyTypes } from 'react';
import {Field, reduxForm } from 'redux-form'
import ContactForm from '../components/ContactForm'

export default class About extends Component  {
    render(){
        return(
            <div>

            <h1><b>About US</b></h1>
              <ContactForm />
            </div>


        );
    }
}