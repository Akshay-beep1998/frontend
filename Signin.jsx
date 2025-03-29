
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Signin = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [serverMessage, setMessage] = useState("");
    const navigate = useNavigate();
    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/users/signin", {
            method: "POST",
            body: JSON.stringify({
            
                email,
                password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const user = await response.json();
        const { msg, token } = user;
        localStorage.setItem("token", token);
        setMessage(msg);
        console.log("message is: ", msg)
        console.log(user);
        navigate("/");
    }
    return (
        <div className='flex items-center justify-center'>
            <form className='flex flex-col space-y-8 items-center justify-center text-2xl border-2 border-cyan-600 p-5 rounded-xl max-w-2xl'>
                <h2>SignIn</h2>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="">Email: </label>
                    <input type="text" placeholder='Type your Email ... ' onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="">Password: </label>
                    <input type="password" placeholder='Type your password ... ' onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>
                <button className='border-2 border-green p-4 rounded-lg disabled' onClick={handleSignIn}>Signin</button>
            </form>

            <br />

            <div>
                { serverMessage !== "" ? (<p className='text-xl text-black'>{serverMessage}</p>) : (<p>No message yet ... </p>)}
            </div>
        </div>
    )
}

export default Signin
