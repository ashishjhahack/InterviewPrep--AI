import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'
import { assets } from '../assests/assets'
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";
import { UserContext } from "../context/userContext";
import uploadImage from '../utils/uploadImage'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const { user, updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    let profileImage = '';

    if (currentState === 'Sign Up' && !name) {
      toast.error('Please enter your name');
      return
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email');
      return
    }
    if (!password) {
      toast.error('Please enter your password');
      return
    }

    // setError('');

    try {      // now calling the api

      // const formData = new FormData();
      // formData.append('name', name);
      // formData.append('email', email);
      // formData.append('password', password);
      // if (image) {
      //   formData.append('image', image);
      // }
      if (currentState === 'Sign Up') {

        // Prepare form data for image upload
        if (image) {
          const imageUploadRes = await uploadImage(image);
          profileImage = imageUploadRes.imageUrl || "";
        }

        const signupres = await axiosInstance.post(API_PATHS.auth.register, {
          name,
          email,
          password,
          profileImage
        })
        const { token } = signupres.data;

        if (token) {

          localStorage.setItem("token", token);
          updateUser(signupres.data);
          navigate("/");
          toast.success('Signup successfully, Welcome!')
        }
      }
      else {    // if currState === login
        const loginRes = await axiosInstance.post(API_PATHS.auth.login, {
          email,
          password
        })

        const {token} = loginRes.data;

        if (token) {
          // Step 2: Store token
          localStorage.setItem("token", token);

          // Step 3: Update context with user data from login response
          updateUser(loginRes.data);

          // Step 4: Navigate to dashboard
          navigate("/");
          toast.success('Login successfull, Welcome back')
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || error.message || "An unexpected error occurred.");
    }
  }


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