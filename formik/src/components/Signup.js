import React from 'react'
import { useFormik } from 'formik';
import Validations from './validations';

function Signup() {
    const {handleSubmit, handleChange ,values} = useFormik({
        initialValues: {
          email: '',
          password:'',
          passwordConfirm: '',
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema : Validations,
      });
  return (
    <div>
        <h1>Sign Up</h1>
       <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input value={values.email} name="email" onChange={handleChange} />
        <br /><br />
        <label>Password: </label>
        <input value={values.password} name="password" onChange={handleChange}/> <br /> <br />
        <label>Confirm Password: </label>
        <input value={values.passwordConfirm} name="passwordConfirm" onChange={handleChange}/> <br /> <br />
        <button type="submit">Submit</button>
        <br /><br />
        {JSON.stringify(values)}
      </form>
    </div>
  )
}

export default Signup