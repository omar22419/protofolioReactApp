import React from 'react'

export default function Contact() {
  return (
    <>
        <section className='container vh-100'>
            <div className="header text-center text-uppercase my-4">
                <h1>contact section</h1>
                <div className="mb-3 d-flex justify-content-center align-items-center">
                    <div className="decore me-3"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="decore ms-3"></div>
                </div>
            </div>
            <form className='mx-auto p-3 w-50'>
                <input type="text" className='form-control py-3 my-3 border-0 border-bottom shadow-none' placeholder='userName'/>
                <input type="number" className='form-control py-3 my-3 border-0 border-bottom shadow-none' placeholder='userAge'/>
                <input type="email" className='form-control py-3 my-3 border-0 border-bottom shadow-none' placeholder='userEmail'/>
                <input type="password" className='form-control py-3 my-3 border-0 border-bottom shadow-none' placeholder='userPassword'/>
                <button className='btn text-white'>send Message</button>
            </form>
        </section>
    </>
  )
}
