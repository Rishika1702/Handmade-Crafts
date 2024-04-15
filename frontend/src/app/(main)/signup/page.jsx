'use client';
import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';


const Signup = () => {
  const SignupValidationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').matches(/(?=.*[0-9])/, 'Password must contain a number.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required')
  });


  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // send data to backend



      //sending request to client
      fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('user registered successfully')
          }
          else {
            toast.error('user registration failed')
          }
        }).catch((err) => {
          console.log(err);
          toast.error('user registration failed')
        })
    },


    validationSchema: SignupValidationSchema
  });

  return (
    <div className='bg-info-subtle d-flex align-items-center'>
      <section className="container">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className=" text-primary display-3 fw-bold ls-tight">
                  Welcome to
                </h1>
                <h2 className="fw-bold ls-tight text-black">
                  Mishrit : The Knitting Haven
                </h2>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Join our vibrant community of handicraft enthusiasts and unlock a world of creativity, warmth, and handmade treasures. Sign up now to explore our curated collection of artisanal knitted goods and embark on your journey of discovering unique, handcrafted pieces!
                </p>
              </div>
              <div className="col-lg-5 col-md-6 mb-5 mb-lg-0 mx-auto">
                <div className="card shadow">
                  <div className="card-body py-5 px-md-5">
                    <h4 className='text-center fw-bold text-primary my-4'>Signup To Continue</h4>
                    <form onSubmit={signupForm.handleSubmit} >
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="mb-3">
                        <label for="" className="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.name}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.name &&
                          <small className="text-danger">{signupForm.errors.name}</small>
                        }
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.email}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.email &&
                          <small className="text-danger">{signupForm.errors.email}</small>
                        }
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.password &&
                          <small className="text-danger">{signupForm.errors.password}</small>
                        }
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.confirmPassword}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.confirmPassword &&
                          <small className="text-danger">{signupForm.errors.confirmPassword}</small>
                        }
                      </div>

                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          Remember Me
                        </label>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mb-4"
                      >
                        Signup Now
                      </button>
                      <div className="text-center">
                        <p>Already Registered</p>
                        <Link href='/login'>Login Here</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </div>

  )
}

export default Signup;