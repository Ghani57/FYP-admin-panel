import React, {useState} from 'react'
import regAsset from '../Images/join.png'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './pageStyles.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [load, setLoad] = useState(false)
  const navigate = useNavigate()

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please provide a username'),
    email: Yup.string().email('Please provide a valid email').required('Email is required'),
    password: Yup.string().min(8, ({ min }) => `Password must be at least ${min} characters`).required('Password is required')
  });

  return (
    <div className='my__form__container'>
    <div className='form__main'>
      <div className='form__left'>
        <img src={regAsset} alt="JOIN ASSET" className='form__asset' />
      </div>

      <div className='form__right'>
      <div className='my__form'>
        <div className='form__header'> Create New account</div>
      <Formik
       initialValues={{
         username: '',
         email: '',
         password: ''

       }}
       validationSchema={DisplayingErrorMessagesSchema}
       onSubmit={values => {
        setLoad(true)
         axios.post('https://ghani-adminpanel.herokuapp.com/register', {
          email: values.email,
          username: values.username,
          password: values.password
        })
        .then(function (response) {
          console.log(response);
          navigate('/')
          toast.success('Registered SuccessFully!!!')
          setLoad(false)
        })
        .catch(function (error) {
          console.log(error);
          toast.error("Sorry! An Error occured while registering")
          setLoad(false)
        });
         console.log(values);
       }}
      >
       {({ errors, touched }) => (
         <Form className='form'>
          <div className='login__fields__wrapper'>
            <div className='login__row__wrapper'>
            <label className='label'>Email</label>
            <Field name="email" className='input__field' placeholder='Please Enter Your Email' />
            {touched.email && errors.email && <div className='error__msg'>{errors.email}</div>}
            </div>
          </div>

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
              height: 40,
            }}
            >
              {
                load ? <CircularProgress color='inherit' /> : 'Register'
              }
            </Button>
          </div>

          <div className='fields__wrapper'>
            <Link to='/'> Already have an account? Login</Link>
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

export default Register