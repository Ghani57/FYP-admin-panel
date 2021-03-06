import React, {useState} from 'react'
import loginAsset from '../Images/login.png'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './pageStyles.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [load, setLoad] = useState(false)
  const navigate = useNavigate()

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Please provide your password for login!')
  });

  return (
    <div className='my__form__container'>
    <div className='form__main'>
      <div className='form__left'>
        <img src={loginAsset} alt="LOGIN ASSET" className='form__asset' />
      </div>

      <div className='form__right'>
      <div className='my__form'>
        <div className='form__header'> Login to your account</div>
      <Formik
       initialValues={{
         username: '',
         password: ''

       }}
       validationSchema={DisplayingErrorMessagesSchema}
       onSubmit={values => {
        setLoad(true)
         axios.post('https://ghani-adminpanel.herokuapp.com/login', {
          username: values.username,
          password: values.password
        })
        .then(function (response) {
          console.log(response);
          navigate('/home')
          toast.success('Logged In SuccessFully!')
          setLoad(false)
        })
        .catch(function (error) {
          console.log(error);
          toast.error("Error in Login!")
          setLoad(false)
        });
       }}
      >
       {({ errors, touched }) => (
         <Form className='form'>
          <div className='login__fields__wrapper'>
            <div className='login__row__wrapper'>
            <label className='label'>UserName</label>
            <Field name="username" className='input__field' placeholder='Please Enter Your Username' />
            {touched.username && errors.username && <div className='error__msg'>{errors.username}</div>}
            </div>
          </div>
           
          <div className='login__fields__wrapper'>
            
            <div className='login__row__wrapper'>
            <label className='label'>Password</label>
            <Field name="password" className='input__field' placeholder='Your Password' type='password' />
            {touched.password && errors.password && <div className='error__msg'>{errors.password}</div>}
            </div>
          </div>

          <div className='login__fields__wrapper'>
            <Button
            type='submit'
            style={{
              backgroundColor: '#0000FF',
              color: '#fff',
              width: '100%',
              marginTop: 15,
              height: 40
            }}
            >
              {
                load ? <CircularProgress color='inherit' /> : 'Login'
              }
            </Button>
          </div>

          <div className='fields__wrapper'>
            <Link to='/register'> Don't have an account? Register</Link>
          </div>
         </Form>
       )}
     </Formik>
   </div>
      </div>
    </div>
    </div>
  )
}

export default Login