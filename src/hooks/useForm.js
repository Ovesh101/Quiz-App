import React from 'react'
import { useState } from 'react'



const useForm = (getFreshModelObject) => {
    const [values, setValues] = useState(getFreshModelObject());
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        setErrors({
            ...errors,
            [name]: '' 
        });
      
        setValues({
            ...values,
            [name] : value
        });
    
    };
         
    // Return an object containing all values
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
};

export default useForm;
