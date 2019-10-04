import React from 'react';
import propTypes from 'prop-types';


// variable to check if the user was touch the input field.
let touched = false;

const InputComponents = props => {
    // error element - null as initial value
    let element = null;

    // check if validation props is set to true
    if(props.validate) {
        //  set variable that state the validity
        let isValid = true;
        // if props.validations is exists and touched state is set to true
        if(props.validations && touched) {
            // validations for required fields
            if(props.validations.required && isValid) {

                // check value if empty(white space is not included)
                isValid = props.inputProps.value.trim() !== '';

                // assign error element
                element = ( 
                    <p className="error-message">
                        {
                            props.validations.required ? 
                            props.validations.required.message : 'This field is required.'
                        }
                    </p>
                );
            }

            // validation for maximum length of characters
            if(props.validations.maxLength && isValid) {
                isValid = props.inputProps.value.length <= props.validations.maxLength.value;
                element = (
                    <p className="error-message">
                        {
                            props.validations.maxLength && props.validations.maxLength.message ? 
                            props.validations.maxLength.message : `The value must be less than ${props.validations.maxLength.value}.`
                        }
                    </p>
                );
            }

            // validations for minimum length of characters
            if(props.validations.minLength && isValid) {
                isValid = props.inputProps.value.length >= props.validations.minLength.value;
                element = (
                    <p className="error-message">
                        {
                            props.validations.minLength && props.validations.maxLength.message ? 
                            props.validations.minLength.message : `The value must be more than ${props.validations.minLength.value}.`
                        }
                    </p>
                );
            } 

            // validations for valid email address
            if(props.validations.isEmail && isValid) {
                // valid email address pattern(regular expression)
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                // testing pattern
                isValid = pattern.test( props.inputProps.value );
                element = (
                    <p className="error-message">
                        {
                            props.validations.isEmail && props.validations.isEmail.message ? 
                            props.validations.isEmail.message : `The value must be a valid email address.`
                        }
                    </p>
                );
            }

            // validations for numeric, checking of value if number
            if(props.validations.isNumeric && isValid) {
                const pattern = /^[0-9]\d*(\.\d+)?$/;
                isValid = pattern.test( props.inputProps.value );
                element = (
                    <p className="error-message">
                        {
                            props.validations.isNumeric && props.validations.isNumeric.message ? 
                            props.validations.isNumeric.message : `The value must be numeric.`
                        }
                    </p>
                );
            }

            // custom validations with rules using regular expression
            if(props.validations.custom && props.validations.custom.rules && isValid) {
                // check if other rules is valid
                isValid = props.validations.custom.rules.test( props.inputProps.value );
                // replacing error element
                element = (
                    <p className="error-message">
                        {
                            props.validations.custom && props.validations.custom.message ? 
                            props.validations.custom.message : `The value is invalid.`
                        }
                    </p>
                );
            }
        }
    }

    const onChangeFunc = (e) => {

        // return onChange function made by users
        props.onChange(e);

        // set touched to true if user typed on input
        touched = true;
    }

    // returns component to view
    return (
        // set form field container
        <div className={props.containerClass}>
            <label {...props.labelProps}>{props.label}</label>
            <input {...props.inputProps} className={props.inputClass.concat(element ? ' input-error' : '')} onChange={(e) => onChangeFunc(e)} />
            {element}
        </div>
    );
}

InputComponents.propTypes = {
    label: propTypes.string,        // label text
    containerClass: propTypes.string,   // custom class of input container
    inputProps: propTypes.object,   // input props e.g(type, placeholder, etc)
    labelProps: propTypes.object,   // label props e.g(className, for)
    validations: propTypes.object,  // all validations on input
    inputClass: propTypes.string,   // class for input type separate to make it dynamic
    onSubmitValidation: propTypes.bool,  // if set to true validations will on submitting event, if set to false the validation is on change of the input type, default is true,
    onChange: propTypes.func,        // input type on change function
    formValid: propTypes.bool       // true or false if onSubmitValidation set to true invalid must be pass on form submit, default is true.
}

InputComponents.defaultProps = {
    label: 'Empty Label',
    containerClass: 'form-group',
    inputProps: {
        placeholder: 'Form Input',
        type: 'text'
    },
    inputClass: 'form-control',
    validations: {},
    validate: true
}

export default InputComponents;