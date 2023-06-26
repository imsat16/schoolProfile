import { AUTH } from '@/pages/api';
import Image from 'next/image'
import { setCookie } from 'nookies';
import React from 'react'

const Login = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const handleLogin = async (e: any) => {
        e.preventDefault();
        AUTH.login({
            email: email,
            password: password
        }).then(
            res => {
                console.log(res.data)
                // setMsg(res.data.name)
                console.log(res.data)
                // setErrMsg("")
                setCookie(null, 'token', res.data.token,{
                    maxAge: 24 * 60 * 60,
                    path: '/',
                })
                // router.reload()
            }
        ).catch(
            err=>{
                // setErrMsg(err.message)
                console.log(err.message)
            }
        )
    }
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center w-full px-4 md:w-1/2">
                <div className="w-full lg:w-1/2">
                    <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
                    <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
                </div>
                <form 
                    onSubmit={handleLogin} 
                    className="flex flex-col justify-center w-full gap-4 lg:w-1/2"
                >
                    <input className="p-2 mt-8 border rounded-xl" type="email" name="email" placeholder="Email" />
                    <div className="relative">
                        <input className="w-full p-2 border rounded-xl" type="password" name="password" placeholder="Password" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="absolute -translate-y-1/2 bi bi-eye top-1/2 right-3" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </div>
                    <button type='submit' className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                </form>
            </div>
            <div className="relative hidden w-1/2 min-h-screen lg:block">
                <Image fill className="object-cover h-auto max-w-full" src="/login.jpg" alt="Login Image" />
            </div>
        </main>
    )
}

export default Login