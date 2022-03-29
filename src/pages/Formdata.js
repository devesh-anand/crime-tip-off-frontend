import React from 'react'
import Form from '../components/Form'

function Formdata() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-[url('https://media.istockphoto.com/photos/abstract-blue-backgrounds-picture-id1225495890?k=20&m=1225495890&s=612x612&w=0&h=ekWUMbGkuvn8vzJ_jjbIYtxC1lGx8YyPnTuK5us2Ucw=')] bg-no-repeat bg-cover bg-center">
        <div className='text-orange-500 font-semibold text-3xl text-center pt-5'>Crime Lens</div>
        <Form />
      </div>
    </>
  )
}

export default Formdata