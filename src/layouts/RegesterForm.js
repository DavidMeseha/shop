import style from '@/styles/Login.module.scss'
import { useState } from "react";
import Message from "@/components/Message";
import { emailValidation, nameValidation, passwordValidation } from '@/utilities/dataValidation';

const RegesterForm = ({ setForm }) => {
    const passwordError = 'Password must contain lower case, upper case, numper and special characters (- _ & % $ # @ !) and minimum length of 8!'
    const confirmPasswordError = 'Confirm Password is not matching your password!'
    const emailError = 'Your input is not an email!'
    const nameError = 'Name must be only english characters'
    const apiResponseError = 'No response from server, Try Again Later'
    const emailRegesteredError = 'This Email Already Regestered'

    const [data, setData] = useState({ email: '', password: '', confirmPassword: '', name: '' })
    const [error, setError] = useState({ email: false, password: false, confirmPassword: false, name: false })

    const [messageState, setMessageState] = useState(false)
    const [message, setMessage] = useState({ message: '', type: 'error', action: { name: '', fn: () => { } } })

    const regester = async () => {
        if (data.password === '' || data.confirmPassword === '' || data.email === '' || data.name === '') {
            setError({
                name: data.name === '' ? true : false,
                email: data.email === '' ? true : false,
                password: data.password === '' ? true : false,
                confirmPassword: data.confirmPassword === '' ? true : false
            })

            return messageHandle('Required Field is Empty', 'error')
        }
        if (!nameValidation(data.name)) {
            setError({ ...error, name: true })
            return messageHandle(nameError, 'error')
        }
        if (!emailValidation(data.email)) {
            setError({ ...error, email: true })
            return messageHandle(emailError, 'error')
        }
        if (!passwordValidation(data.password)) {
            setError({ ...error, password: true })
            return messageHandle(passwordError, 'error')
        }
        if (data.password !== data.confirmPassword) {
            setError({ ...error, confirmPassword: true })
            return messageHandle(confirmPasswordError, 'error')
        }

        let config = {
            method: 'POST',
            body: JSON.stringify(data)
        }

        let response = await fetch('/api/regester', config)

        if (response.status === 300) {
            setError({ ...error, email: true })
            return messageHandle(emailRegesteredError, 'error', 'Login ?', alreadyRegestered)
        }
        
        if (response.status !== 200) return messageHandle(apiResponseError, 'error')

        setForm('login')
        setData({ email: '', password: '', confirmPassword: '' })
        messageHandle('You Regestered Succesfuly, Login Now', 'message')
    }

    const messageHandle = (
        text, //message text
        type, //error or message
        actionName = '',
        actionFn = () => { }
    ) => {
        setMessage({ message: text, type: type, action: { name: actionName, fn: actionFn } })
        setMessageState(true)
    }

    const disablerrors = () => {
        setError({ email: false, name: false, password: false, confirmPassword: false })
    }

    const alreadyRegestered = () => {
        setForm('login')
        setError({ email: false, password: false, confirmPassword: false, name: false })
        setData({ ...data, password: '', confirmPassword: '' })
    }

    return (
        <>
            <Message state={messageState} setState={setMessageState} message={message.message} type={message.type} action={message.action} />

            <div className={style.regester}>
                <div className={style.header}>
                    <h1>Regester</h1>
                    <div className={style.navigate} onClick={() => alreadyRegestered()}>Already Have An Acount?</div>
                </div>
                <input
                    type='text'
                    placeholder="Your Name"
                    autoComplete='new-name'
                    onChange={(event) => { setData({ ...data, name: event.target.value }); disablerrors() }}
                    value={data.name}
                    style={{ outline: error.name ? '2px solid red' : 'none' }}
                />
                <input
                    type='text'
                    placeholder="Email"
                    autoComplete='new-email'
                    onChange={(event) => { setData({ ...data, email: event.target.value }); disablerrors() }}
                    value={data.email}
                    style={{ outline: error.email ? '2px solid red' : 'none' }}
                />
                <input
                    type='password'
                    placeholder="Password"
                    autoComplete='new-password'
                    onChange={(event) => { setData({ ...data, password: event.target.value }); disablerrors() }}
                    value={data.password}
                    style={{ outline: error.password ? '2px solid red' : 'none' }}
                />
                <input
                    type='password'
                    placeholder="Confirm Password"
                    autoComplete='new-password'
                    onChange={(event) => { setData({ ...data, confirmPassword: event.target.value }); disablerrors() }}
                    value={data.confirmPassword}
                    style={{ outline: error.confirmPassword ? '2px solid red' : 'none' }}
                />
                <button onClick={regester}>Regester</button>
            </div>
        </>
    )
};
export default RegesterForm;