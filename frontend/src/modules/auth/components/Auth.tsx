import { Button } from "@mui/material"
import axios from "axios"
import React, { useContext, useState } from "react"
import { Context } from "../../../App"
import { REACT_APP_API_URL } from "../../../constants"
import useInput from "../../../hooks/useInput"

export const Auth = () => {
    const username = useInput('')
    const password = useInput('')
    const email = useInput('')
    const [isRegister,setIsRegister] = useState(true)
    const context = useContext(Context)
    function handleRegister(e:React.SyntheticEvent){
        e.preventDefault()
        const newUser = {
            username:username.value,
            password: password.value,
            email:email.value
        }
        axios.post(`${REACT_APP_API_URL}User/register`,newUser)
        .then(res => console.log(res.data))

    }
    function handleSignin(e:React.SyntheticEvent){
        e.preventDefault()
        const user = {
            username:username.value,
            password:password.value
        }
        axios.post(`${REACT_APP_API_URL}User/signin`,user,{withCredentials:true})
        .then((res) => console.log(res)).then(() => context?.setIsAuth(true))
    }
    return (
        <div>
            <form>
                <input type='text' placeholder="username" {...username} />
                <input type='password' placeholder="password" {...password} />
                {isRegister && <input type='email' placeholder="text@expample.com" {...email}/>}
                {
                    isRegister ? <Button onClick={(e) => handleRegister(e)}>Register</Button>
                    :<Button onClick={(e) => handleSignin(e)}>Signin</Button>
                }
            </form>
            <p onClick={() => setIsRegister(prev => !prev)}>
                {isRegister ? 'Signin' : 'Register'}
            </p>
        </div>
    )
}