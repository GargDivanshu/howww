import React, { useState, useContext } from 'react';
import { useForm, reset } from 'react-hook-form';
import { UserContext } from 'context/user';
import { useRouter } from 'next/router'

const RegisterForm = () => {
    const { doRegister } = useContext(UserContext);
    const router = useRouter();
//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//   
//   async function handleRegister() {
//     const registerInfo = {
//         username: username,
//         email: email,
//         password: password
//     }

//     const register = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(registerInfo)
//     })

//     const registerResponse = await register.json();
//     console.log(registerResponse)

    

    // Router.push('/payed-articles')

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = {};
  password.current = watch('password', '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(['', '']);

  
  const onSubmit = async (values) => {
    // e.preventDefault()
    setIsSubmitting(true);
    console.log(values);


    
        // const res = await fetch(`http://localhost:1337/api/auth/local/register`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(values)
        // })
        
        // const json = await res.json()
        // router.push('http://localhost:3000/user');
        // console.log(values);
    const ret = await doRegister(values);

    // if (ret[0] === 'alert') {
    //   setAlert(ret);
    // } else {
    //   setAlert(ret);
    //   reset();
    // }
    setIsSubmitting(false);
  };


  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            Username
            <input
              type="text"
              className="mt-1 block w-full px-0.5
          border-0 border-b-2 border-gray-200
          focus:ring-0 focus:border-slate-600"
              {...register('username', {
                required: 'Please choose a username',
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </label>
          <label className="block">
            Email address
            <input
              type="email"
              className="mt-1 block w-full px-0.5
          border-0 border-b-2 border-gray-200
          focus:ring-0 focus:border-slate-600"
              {...register('email', {
                required: 'Email is required',
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder="you@email.com"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label className="block ">
            Password
            <input
              type="password"
              {...register('password', {
                required: 'You must specify a password',
                minLength: { value: 8, message: 'At least 8 character' },
              })}
              className="mt-1 block w-full px-0.5
          border-0 border-b-2 border-gray-200
          focus:ring-0 focus:border-slate-600"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
          <label className="block">
            Password confirmation
            <input
              type="password"
              {...register('repeatpassword', {
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              })}
              className="mt-1 block w-full px-0.5
          border-0 border-b-2 border-gray-200
          focus:ring-0 focus:border-slate-600"
            />
            {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
          </label>
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-600 rounded-md p-4 text-white text-xl text-bold uppercase disabled:bg-slate-200"
            disabled={isSubmitting}
          >
            {isSubmitting && 'Registering...'}
            {!isSubmitting && 'Register'}
          </button>
        </div>
        {alert[1]}
      </form>
    </main>

    // {/* <form>
    //                     <input type="text" onChange={e => setUsername(e.target.value) } value={username} placeholder="Username"/><br />
    //                     <input type="email" onChange={e => setEmail(e.target.value) } value={email} placeholder="Email" /><br />
    //                     <input type="password" onChange={e => setPassword(e.target.value) } value={password} placeholder="Password"/><br />
    //                     <button type="button" onClick={() => handleRegister() }>Register</button>
    //                 </form> */}
  );
}

export default RegisterForm;



// import { useState, useContext } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// const RegisterForm = () => {
//   const router = useRouter();
//   const [userData, setUserData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   })

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/register', userData);
//       router.replace('/profile');
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({...userData, [name]: value });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" name="username" onChange={e => handleChange(e)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="text" name="email" onChange={e => handleChange(e)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" name="password" onChange={e => handleChange(e)} />
//       </label>
//       <br />
//       <button>Register</button>
//     </form>
//   )
// }

// export default RegisterForm;