import { login } from "@/redux/features/authSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Auth = () => {
    const dispatch = useDispatch()

    const [credentials, setCredentials] = useState({ username: null, password: null })

    let dummyStyles = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const loginUser = (e) => {
        e.preventDefault()
        console.log({ credentials })
        dispatch(login(credentials))
    }
    return (
        <form onSubmit={loginUser} style={dummyStyles}>
            <input required value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} type='text' />
            <input required value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} type='password' />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Auth