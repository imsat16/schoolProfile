import Image from 'next/image'
import React from 'react'
const Login = () => {
return (
<>
<section className="bg-gray-50 min-h-screen flex items-center justify-center">
   <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
      <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
      <form className="flex flex-col gap-4">
         <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
         <div className="relative">
            <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
               <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
               <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
         </div>
         <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>
      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
         <hr className="border-gray-400" />
         <p className="text-center text-sm">OR</p>
         <hr className="border-gray-400" />
      </div>
      <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
         <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
         </svg>
         Login with Google
      </button>
      <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
         <a href="#">Forgot your password?</a>
      </div>
      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
         <p>Dont have an account?</p>
         <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
      </div>
   </div>
   <div className="md:block hidden w-1/2">
      <img className="h-auto max-w-full" src="login.jpg" alt="Login Image" />
   </div>
</section>
</>
);
};
export default Login;