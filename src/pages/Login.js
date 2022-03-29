import React from 'react'
import Navbar from '../components/Navbar'
import LoginComp from '../components/Login'

function Login() {
  return (
    <div className="w-screen h-screen bg-[url('https://media.istockphoto.com/photos/abstract-blue-backgrounds-picture-id1225495890?k=20&m=1225495890&s=612x612&w=0&h=ekWUMbGkuvn8vzJ_jjbIYtxC1lGx8YyPnTuK5us2Ucw=')] bg-no-repeat bg-cover bg-center">
        <Navbar />
        <LoginComp />
      </div>
  )
}

export default Login