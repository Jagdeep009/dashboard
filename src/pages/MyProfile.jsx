import React, { useEffect, useRef, useState } from 'react' 
import { MainHeading, Modal } from '../components'; 
import "./MyProfile.css"
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../store/authSlice'


function MyProfile() {

  const [user,setUser] = useState({name:"", email: "", phone:"",username:""});
  const [oldUser,setOldUser]= useState({name:"", email: "", phone:"",username:""})

  const succesBtn = useRef(null);

  const dispatch =useDispatch();
  const userData = useSelector((state)=>state.auth.userData);

  useEffect(()=>{
    setOldUser(userData)
    setUser(userData)
  },[])

  function handleFormSubmit(e) {
    e.preventDefault()
    const areEqual = JSON.stringify(user) === JSON.stringify(oldUser);
    if (!areEqual) {
      dispatch(login(user));
      setOldUser(user);
      succesBtn.current.click()
      console.log("hii")
    }
  }

  return (
    <div className='main-wrapper2 d-flex flex-column shadow'>
      <div className="banner"></div>
      <div className="inner-wrap">
        <div className="profile shadow position-absolute"></div>
          <MainHeading heading={oldUser.name} tagline={oldUser.email} />
          <hr />
          <div className="d-flex flex-wrap justify-content-center">
            <div className="col-lg-6 col-12 mb-lg-0 mb-5">
              <form onSubmit={(e)=>handleFormSubmit(e)}>
                <div className='d-flex py-2 justify-content-between'>
                  <div className="col-3">
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className='col-8 d-flex justify-content-between'>
                    <input type="text" id="name"  className='w-100' value={user.name} onChange={(e)=> setUser((prevuser)=> ({...prevuser , name: e.target.value }))}/>
                  </div>
                </div>
                <hr />
                <div className='d-flex py-2 justify-content-between'>
                  <div className="col-3">
                    <label htmlFor="username">User name</label>
                  </div>
                  <div className='col-8 d-flex gap-3'>
                    <input type="text" id="username" className='w-100' value={user.username} onChange={(e)=> setUser((prevuser)=> ({...prevuser , username: e.target.value }))}/>
                  </div>
                </div>
                <hr />
                <div className='d-flex py-2 justify-content-between'>
                  <div className="col-3">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className='col-8 d-flex gap-3'>
                    <input type="email" id="email" className='w-100' value={user.email} onChange={(e)=> setUser((prevuser)=> ({...prevuser , email: e.target.value }))}/>
                  </div>
                </div>
                <hr />
                <div className='d-flex py-2 justify-content-between'>
                  <div className="col-3">
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className='col-8 d-flex gap-3'>
                    <input type="number" id="phone" className='w-100' value={user.phone} onChange={(e)=> setUser((prevuser)=> ({...prevuser , phone: e.target.value }))}/>
                  </div>
                </div>
                <hr />       
                <div className="d-flex justify-content-end pt-3">
                <button className='btn btn-primary'>Save Changes</button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-10 ps-lg-5">
              <div className="shadow p-4 rounded">
                <div className='mb-5'>
                  <h2>Support</h2>
                  <a href="mailto:jagdeep.mahala27@gmail.com"><i className="fa-solid fa-envelope me-2"></i>jagdeep.mahala27@gmail.com</a>
                  <br />
                  <a href="tel:7737039709"><i className="fa-solid fa-phone me-2"></i>7737039709</a>
                </div>
                <div className='mb-5'>
                <h2>Connect</h2>
                  <a href="https://www.linkedin.com/in/jagdeep-mahala/"><i className="fa-brands fa-linkedin-in me-2"></i>linkedin</a>
                  <br />
                  <a href="https://github.com/Jagdeep009"><i className="fa-brands fa-github me-2"></i>Github</a>
                  <br />
                  <a href="https://www.instagram.com/jagdeep.9rk/"><i className="fa-brands fa-instagram me-2"></i>Instagram</a>
                </div>
                <div className="d-flex justify-content-between flex-wrap gap-4">
                  <a className='btn btn-outline-primary' href='https://github.com/Jagdeep009/dashboard/archive/refs/heads/main.zip'>Download Source Code</a>
                  <a className='btn btn-primary' href='https://github.com/Jagdeep009/Jagdeep009.github.io/archive/refs/heads/main.zip'>Github Repository</a>
                </div>
              </div>
            </div>
          </div>
          <button className='success' ref={succesBtn} hidden data-bs-toggle="modal" data-bs-target="#successModal"></button>
          <Modal id="successModal">
            <span className='text-center py-3 fw-bold bg-success text-white'>
              Your details have been successfully updated!
            </span>
          </Modal>
      </div>
    </div>
  )
}

export default MyProfile