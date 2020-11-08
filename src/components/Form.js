import React, { Component } from 'react';
import Input from './input/Input';

export class Form extends Component {
    state = {
        form : {
            name : {
                elementType: 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Your Name'
                },
                value: ''
            },
            email : {
                elementType: 'input',
                elementConfig : {
                    type: 'email',
                    placeholder : 'Your Email'
                },
                value: ''
            }, 
            comment : {
                elementType: 'textarea',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Your Comment'
                },
                value: ''
            },
            country : {
                elementType: 'select',
                elementConfig : {
                    options: [
                        { value : 'United States', displayValue : 'US'},
                        { value : 'Australia', displayValue : 'AUS'}
                    ]
                },
                value: ''
            },
        }
    }
    changedHandler = (e ,id) => {
        const updatedForm = {
            ...this.state.form
        }
        const updatedFormElement = { ...updatedForm[id] };
        updatedFormElement.value = e.target.value;
        updatedForm[id] = updatedFormElement;
        this.setState({
            form : updatedForm
        })
    }

    formHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for (let formIdentifier in this.state.form){
            formData[formIdentifier] = this.state.form[formIdentifier].value;
        }
        console.log(formData);
    }
    render() {
        const formElementArray = [];
        for ( let key in this.state.form) {
            formElementArray.push({
                id : key,
                config : this.state.form[key]
            })
        }
        return (
            <form className="form" onSubmit={this.formHandler}>
                <h3>Please fill out the form</h3>
              {formElementArray.map( formElement => (
                  <Input key={formElement.id} elementtype={formElement.config.elementType}
                  elementconfig = {formElement.config.elementConfig}
                  value={formElement.config.value} changed={(e) => this.changedHandler(e,formElement.id)}/>
              ) )}
              <button>Submit</button>
           </form>
        )
    }
}

export default Form
