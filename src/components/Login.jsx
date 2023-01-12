import React, { useState } from 'react'
import Home from './Home';
import ReactDOM from 'react-dom'
import { data } from '../data';
import woman from '../imgs/woman.png'
import man from '../imgs/man.png'

export default function Login({logp, post}) {
    const [log, setLog] = useState(logp);
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');

    function Submit(e){
        e.preventDefault();
        if(!post)
            if(log){
                localStorage.setItem("user", user)
                localStorage.setItem("email", email)
                localStorage.setItem("password", password)
                localStorage.setItem("gender", sex)
                alert("successfully registered")  
                ReactDOM.render(
                    <Home/>,
                    document.querySelector(".panel")
                )
                location.reload()
            }
            else{
                if(localStorage.getItem("email") == email && localStorage.getItem("password") == password){
                    alert("Ingresando")
                    setEmail("");
                    setPassword("");
                    ReactDOM.render(
                        <Home/>,
                        document.querySelector(".panel")
                    )
                }
                else{
                    alert("email or password is invalid")
                }
            }  
        data.push({
            name: user,
            email: email,
            photo: sex == "male" ? man : (sex == "female" ? woman : null)
        })
        localStorage.setItem("users", JSON.stringify(data))
        location.reload()
    }

  return (
    <form onSubmit={Submit} className={`absolute top-[20%] left-[35%] w-[30%] ${log == false ? 'h-[50vh]' : 'h-auto'} bg-gray-700 rounded-lg p-16`} action="">
        {
            log ?
            <div className='mb-8'>
                <input type="text" id="user" placeholder='Username' className='w-[100%] h-[35px] p-2 rounded-md' required onChange={(e)=>{setUser(e.target.value)}} />
            </div>: null
        }
        <div className='mb-8'>
            <input type="text" id='email' placeholder='Email' className='w-[100%] h-[35px] p-2 rounded-md' required onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        {
            !post ?
            <div className='mb-8'>
                <input type="password" id='password' placeholder='Password' className='w-[100%] h-[35px] p-2 rounded-md' required onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            : null
        }
        {
            log ? 
            <>
            <div className='mb-8'>
                <select name="gender" className='w-32 rounded-sm' id="gender" required onChange={(e)=>{setSex(e.target.value)}}>
                    <option value=""></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            </>: null
        }
        <div className='sticky flex content-center flex-wrap top-[80%] flex-col'>
            <button className='text-white rounded-md bg-blue-500 w-52 h-10'>{!post ? (log == false ? "Login" : "Sing up"): "Add"}</button>
            {
                !post ?
                <p onClick={()=>setLog(!log)} className='text-blue-700 text-right mt-3 hover:decoration-blue-700 cursor-pointer' style={{"textDecoration": "underline"}}>{log ? "Log in" : "Sing up"}</p>
                : null
            }
        </div>
    </form>
  )
}
