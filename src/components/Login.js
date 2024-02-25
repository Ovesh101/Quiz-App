import React from 'react'
import {Box, Button, Card, CardContent, TextField, Typography} from '@mui/material'
import Center from './Center'
import useForm from '../hooks/useForm'

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
        console.log(values);

    }
  return (


    <Center>
          <Card sx={{width : '500px'}}>
        <CardContent  sx={{textAlign: 'center'}} >
            <Typography variant='h3' sx={{my : 3}}>Quiz App</Typography>
            <Box sx={{'& .MuiTextField-root' : {
        m: 1,
        width: '90%'
    }}}>
    <form noValidate  autoComplete="off" onSubmit={login}>
        <TextField
            label = "Email"
            name='Email'
            value={values.Email}
            onChange={handleInputChange}
            variant='outlined'
        />
          <TextField
            label = "Name"
            name='Name'
            value={values.Name}
            onChange={handleInputChange}
            variant='outlined'
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