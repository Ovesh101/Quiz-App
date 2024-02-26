import React from 'react'
import {Box, Button, Card, CardContent, TextField, Typography} from '@mui/material'
import Center from './Center'
import useForm from '../hooks/useForm'
import { createApiEndpoint } from '../api'



const getFreshModel = ()=>({
    Name :  '',
    Email : ''
})
const Login = () => {


 
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const login = e =>{
        e.preventDefault();
        if(validate())
       createApiEndpoint('Participant').post(values)
    .then(res => {
        console.log("Login Successful");

    })
    .catch(err => console.log(err))

    }

    const validate = ()=>{
        let temp = {}
        temp.Email = (/\S+@\S+\.\S+/).test(values.Email) ? "" : "Please enter a valid email address"
        console.log(temp.Email);
        temp.Name = values.Name != ""?"" : "This Field is required"
        setErrors(temp)
        console.log(temp);
        return Object.values(temp).every(x => x == "");
    }

    const handleBlur = e => {
        const { name, value } = e.target;
    
        // Create a temporary object to store the updated error state
        const tempErrors = { ...errors };
    
        // Validate the email field if the blur event occurs in the email field
        if (name === 'Email') {
            tempErrors.Email = value.trim() === '' ? 'Email is required' : (/\S+@\S+\.\S+/).test(value) ? '' : 'Please enter a valid email address';
        }
    
        // Validate the name field if the blur event occurs in the name field
        if (name === 'Name') {
            tempErrors.Name = value.trim() === '' ? 'Name is required' : '';
        }
    
        // Update the errors state with the updated error messages
        setErrors(tempErrors);
    };
    
  return (


    <Center>
          <Card sx={{width : '500px'}}>
        <CardContent  sx={{textAlign: 'center'}} >
            <Typography variant='h3' sx={{my : 3}}>Quiz App</Typography>
            <Box sx={{'& .MuiTextField-root' : {
        m: 1,
        width: '90%'
    }}}>
    <form noValidate  autoComplete="on" onSubmit={login}>
        <TextField
            label = "Email"
            name='Email'
            value={values.Email}
            onChange={handleInputChange}
            variant='outlined'
            onBlur={handleBlur}
            {...(errors.Email && {error : true , helperText : errors.Email})}

        />
          <TextField
            label = "Name"
            name='Name'
            value={values.Name}
            onChange={handleInputChange}
            variant='outlined'
            onBlur={handleBlur}
            {...(errors.Name && {error : true , helperText : errors.Name})}
        />

        <Button 
            type='submit'
            variant='contained'
            size='large'
            sx={{width : '90%'}}
         >Start</Button>
    </form>

            </Box>
        </CardContent>
    </Card>
    </Center>
  
   
  )
}

export default Login