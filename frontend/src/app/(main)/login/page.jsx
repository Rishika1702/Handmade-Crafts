'use client';
import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const Login = () => {

  const router = useRouter();
 
  const loginForm = useFormik({
    initialValues: {
      
      email: '',
      password: ''
     
    },
    onSubmit: (values) => {
      console.log(values);
      // send data to backend



      //sending request to client
      fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('user loggIn successfully')
            router.push("/addProduct")
          }
          else {
            toast.error('user registration failed')
          }
        }).catch((err) => {
          console.log(err);
          toast.error('user registration failed')
        })
    },


    
  });


  

  return (
    <div className='vh-100 bg-primary-subtle d-flex align-items-center'>
      <section className="container">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className=" text-primary display-3 fw-bold ls-tight">
                  Welcome Back to
                </h1>
                <h2 className="fw-bold ls-tight text-black">
                  Mishrit : The Knitting Haven
                </h2>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Log in to your account to continue exploring our curated collection of handmade knitted treasures and to stay connected with our vibrant community of artisans and enthusiasts.
                </p>
              </div>
              <div className="col-lg-5 col-md-6 mb-5 mb-lg-0 mx-auto">
                <div className="card shadow">
                  <div className="card-body py-5 px-md-5">
                    <h4 className='text-center fw-bold text-primary my-4'>Login To Continue</h4>
                    <form onSubmit={loginForm.handleSubmit} >
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="mb-3">
                        <label for="" className="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.email}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          loginForm.touched.email &&
                          <small className="text-danger">{loginForm.errors.email}</small>
                        }
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.password}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          loginForm.touched.password &&
                          <small className="text-danger">{loginForm.errors.password}</small>
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
                        Login Now
                      </button>
                      <div className="text-center">
                        <p>Not Registered Yet</p>
                        <Link href='/signup'>Register Here</Link>
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

export default Login;