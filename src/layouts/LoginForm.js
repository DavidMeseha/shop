import style from '@/styles/Login.module.scss'
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Message from "@/components/Message";

const LoginForm = ({ setForm }) => {
    const [data, setData] = useState({ email: '', password: '' })
    const [loginError, setLoginError] = useState({ email: false, password: false })

    const [messageState, setMessageState] = useState(false)
    const [message, setMessage] = useState({ message: '', type: 'error' })

    const router = useRouter()
    const authError = 'Wrong user name or password!'
    const apiResponseError = 'No response from server, Try Again Later'

    const login = async () => {
        if (data.email === '' || data.password === '') {
            setLoginError({
                email: data.email === '' ? true : false,
                password: data.password === '' ? true : false
            })

            return messageHandle('Empty Fields', 'error')
        }

        let response = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
            callbackUrl: '/'
        })

        if (response.status === 500) messageHandle(apiResponseError, 'error')
        if (response.status === 401) messageHandle(authError, 'error')
        if (response.ok) router.push('/')
    }

    const messageHandle = (
        text, //message Text
        type //error of message
    ) => {
        setMessage({ message: text, type: type })
        setMessageState(true)
    }

    const notRegestered = () => {
        setForm('regester')
        setLoginError({ email: false, password: false })
        setData({ email: '', password: '' })
    }

    return (
        <>
            {<Message state={messageState} setState={setMessageState} message={message.message} type={message.type} />}

            <div className={style.signin}>
                <div className={style.header}>
                    <h1>Sign in</h1>
                    <div className={style.navigate} onClick={() => notRegestered()}>Don't have An Acount?</div>
                </div>
                <input
                    type='text'
                    placeholder="Email"
                    onChange={(event) => { setData({ ...data, email: event.target.value }); setLoginError({ email: false, password: false }) }}
                    value={data.email}
                    style={{ outline: loginError.email ? '2px solid red' : 'none' }}
                />
                <input
                    type='password'
                    placeholder="Password"
                    onChange={(event) => { setData({ ...data, password: event.target.value }); setLoginError({ email: false, password: false }) }}
                    value={data.password}
                    style={{ outline: loginError.password ? '2px solid red' : 'none' }}
                />
                <button onClick={login}>Signin</button>
            </div>
        </>
    )
};
export default LoginForm;