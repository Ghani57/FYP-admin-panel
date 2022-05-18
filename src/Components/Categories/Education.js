import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Formik } from 'formik';

const Education = () => {

  const [subject, setSubject] = React.useState('ABC');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const funct = () => {
    return (
      <div>
      {
        subject === 'ABC' ? (<div>
          ABC
        </div>) : (<div>
          <div className='123__document'>
            <input type='file' />
            <input type='text' />
          </div>

          <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
        </div>)
      }
      </div>
    )
  }


  return (
    <div className='education'>
      <h2>Select a Subject </h2>
      
      <FormControl style={{width: '40%', marginTop: 10}} >
        <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
        >
          <MenuItem value='ABC'>ABC</MenuItem>
          <MenuItem value='123'>123</MenuItem>
        </Select>
      </FormControl>

      {funct()}
    </div>
  )
}

export default Education