'use client';
import React from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

const addProduct = () => {

    const addProductForm = useFormik({
        initialValues: {
          name: '',
          category: '',
          material: '',
          price: '',
          image: '',
          description: '',
          createdAt: ''
       },
        onSubmit: (values) => {
            console.log(values);
    
            //sending request to client
            fetch('http://localhost:5000/product/add', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                  toast.success('Added successfully')
                }
                else {
                  toast.error('Addition failed')
                }
              }).catch((err) => {
                console.log(err);
              })
          },
        });

  return (
    <div className='bg-info-subtle d-flex align-items-center'>
    <section className="container">
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-5 col-md-6 mb-5 mb-lg-0 mx-auto">
              <div className="card shadow">
                <div className="card-body py-5 px-md-5">
                  <h4 className='text-center fw-bold text-primary my-4'>Add Product</h4>
                  <form onSubmit={addProductForm.handleSubmit} >
                    <div className="mb-3">
                      <label for="" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.name}
                        className="form-control"
                        placeholder=""
                      />
                      {
                        addProductForm.touched.name &&
                        <small className="text-danger">{addProductForm.errors.name}</small>
                      }
                    </div>
                    <div className="mb-3">
                      <label for="" className="form-label">Category</label>
                      <input
                        type="text"
                        id="category"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.category}
                        className="form-control"
                        placeholder=""
                      />
                      {
                        addProductForm.touched.category &&
                        <small className="text-danger">{addProductForm.errors.category}</small>
                      }
                    </div>
                    <div className="mb-3">
                      <label for="" className="form-label">Material</label>
                      <input
                        type="text"
                        id="material"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.material}
                        className="form-control"
                        placeholder=""
                      />
                      {
                        addProductForm.touched.material &&
                        <small className="text-danger">{addProductForm.errors.material}</small>
                      }
                    </div>
                    <div className="mb-3">
                      <label for="" className="form-label">Price</label>
                      <input
                        type="number"
                        id="price"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.price}
                        className="form-control"
                        placeholder=""
                      />
                      {
                        addProductForm.touched.price &&
                        <small className="text-danger">{addProductForm.errors.price}</small>
                      }
                    </div>
                    <div className="mb-3">
                      <label for="" className="form-label">Image</label>
                      <input
                        type="file"
                        id="image"
                        
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.image}
                        className="form-control"
                        placeholder=""
                      />
                      {
                        addProductForm.touched.image &&
                        <small className="text-danger">{addProductForm.errors.image}</small>
                      }
                    </div>
                    <div className="mb-3">
                      <label for="" className="form-label">Description</label>
                      <input
                        type="text"
                        id="description"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.description}
                        className="form-control"
                        placeholder=""
                      />
                      {
                        addProductForm.touched.description &&
                        <small className="text-danger">{addProductForm.errors.description}</small>
                      }
                    </div>
                    
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mb-4"
                    >
                      Add Now
                    </button>
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

export default addProduct