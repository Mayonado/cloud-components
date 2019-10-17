import React from 'react';
import InputComponents from '../Input/Input';

// props.children null by default
let children = null;
// variable for submit(boolean)
let submitted = false;
const FormComponents = props => {
    // default component
    children = props.children;
    
    // onsubmit function
    const onSubmitFunc = (e) => {
        // set to true when user hits submit button
        submitted = true;
        
        // assign valid value on event
        e.valid = InputComponents.valid;
        
        // execute submit
        props.onSubmit(e);
    }

    if(submitted) {
        // change component props when hitting submit button
        children = props.children.slice().map((child, index) => {
            return child.props.inputProps ? <InputComponents {...props.children[index].props} touched={true} key={index}/> : child;
        });
        submitted = false;
    }

    // return form component
    return <form onSubmit={(e) => onSubmitFunc(e)}>{children}</form>;
}

export default FormComponents;