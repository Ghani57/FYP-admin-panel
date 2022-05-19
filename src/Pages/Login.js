import React from 'react'
import { Button } from '@mui/material'
import './pageStyles.css'

const Login = () => {
  return (
    <div className='login__page'>
        <div className='login__form'>
            <div className='login__form__header'>
                DigiAccess
            </div>
            <div className='login'>login</div>

            <div className='form'>
                <input type='text' placeholder='Email/username' />
                <input type='password' placeholder='password' />

                <Button> Sign In</Button>
            </div>
        </div>
    </div>
  )
}

export default Login