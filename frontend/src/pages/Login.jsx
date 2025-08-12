import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { assets } from '../assests/assets'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');


  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {      // now calling the api

      // Prepare form data for image upload
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      if (image) {
        formData.append('image', image);
      }
      if (currentState === 'Sign Up') {
        const res = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        if (res.data.success) {
          setToken(res.data.token)      // we get the token and set it inot state variable
          localStorage.setItem('token', res.data.token);
          toast.success('Signup successfull, Welcome!')
        }
        else {
          toast.error(res.data.message);
        }
      }
      else {    // if currState === login
        const res = await axios.post(`${backendUrl}/api/user/login`, { email, password })
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token)
          toast.success('Login successfull, Welcome back!')
        }
        else {
          toast.error(res.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center m-auto w-[90%] sm:max-w-96 mt-14 gap-4 text-gray-700'>
      <div className=' inline-flex items-center gap-2 mb-2 mt-10'>
        <p className=' prata-regular text-5xl text-gray-800 font-bold'>{currentState}</p>
      </div>
      {currentState !== 'Login' && (
        <label className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer flex items-center justify-center">
          {/* Profile Image Preview */}
          <img
            src={image ? URL.createObjectURL(image) : assets.user} // replace path with your asset location
            alt="Profile"
            className="w-full h-full object-cover"
          />

          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="hidden"
          />
        </label>
      )}

      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='w-full px-3 py-2 border border-r-amber-800' placeholder='name' required />}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='w-full px-3 py-2 border border-r-amber-800' placeholder='email' required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='w-full px-3 py-2 border border-r-amber-800' placeholder='password' required />
      <div className=' w-full flex justify-between text-sm mt-[-8px]'>
        {
          currentState === 'Login' ? <div onClick={() => setCurrentState('Sign Up')}><span>Don't have an account?</span> <span className='cursor-pointer text-black hover:underline hover:text-violet-400'>Create Account</span></div> : <div onClick={() => setCurrentState('Login')} className=' cursor-pointer'><span>Already have an account?</span><span className='cursor-pointer text-black hover:underline hover:text-violet-400'>Login</span></div>
        }
      </div>
      <button className='btn-primary rounded-3xl w-40 text-1xl'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login