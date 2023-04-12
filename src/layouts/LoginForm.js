import style from '@/styles/Login.module.scss'
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Message from "@/components/Message";

const LoginForm = ({ setForm }) => {
    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const [loginError, setLoginError] = useState({ email: false, password: false })

    const [messageState, setMessageState] = useState(false)
    const [message, setMessage] = useState({ message: '', type: 'error' })

    const router = useRouter()
    const authError = 'Wrong user name or password!'
    const apiResponseError = 'No response from server, Try Again Later'

    const login = async () => {
        let response = await signIn('credentials', {
            redirect: false,
            email: loginData.email,
            password: loginData.password,
            callbackUrl: '/'
        })

        if (response.status === 500) messageHandle('server', 'error')
        if (response.status === 401) messageHandle('field', 'error')
        if (response.ok) router.push('/')
    }

    const messageHandle = (
        source, //could be a field or server
        type //error of message
    ) => {
        if (source === 'server') {
            setMessage({ message: apiResponseError, type: type })
        } else {
            setLoginError({ email: true, password: true })
            setMessage({ message: authError, type: type })
        }

        setMessageState(true)
    }

    return (
        <>
            {<Message state={messageState} setState={setMessageState} message={message.message} type={message.type} />}

            <div className={style.signin}>
                <div className={style.header}>
                    <h1>Sign in</h1>
                    <div className={style.navigate} onClick={() => setForm('regester')}>Don't have An Acount?</div>
                </div>
                <input
                    type='text'
                    placeholder="Email"
                    onChange={(event) => { setLoginData({ ...loginData, email: event.target.value }); setLoginError({ email: false, password: false }) }}
                    value={loginData.email}
                    style={{ outline: loginError.email ? '2px solid red' : 'none' }}
                />
                <input
                    type='password'
                    placeholder="Password"
                    onChange={(event) => { setLoginData({ ...loginData, password: event.target.value }); setLoginError({ email: false, password: false }) }}
                    value={loginData.password}
                    style={{ outline: loginError.password ? '2px solid red' : 'none' }}
                />
                <button onClick={login}>Signin</button>
            </div>
        </>
    )
};
export default LoginForm;