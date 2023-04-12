import style from '@/styles/Login.module.scss'
import { useState } from "react";
import { useRouter } from "next/router";
import Message from "@/components/Message";

const RegesterForm = ({ setForm }) => {
    const passwordError = 'Password must contain lower case, upper case, numper and special characters (- _ & % $ # @ !) and minimum length of 8!'
    const confirmPasswordError = 'Confirm Password is not matching your password!'
    const emailError = 'Your input is not an email!'
    const authError = 'Wrong user name or password!'
    const apiResponseError = 'No response from server, Try Again Later'

    const [regesterData, setRegesterData] = useState({ email: '', password: '', confirmPassword: '' })
    const [regesterError, setRegesterError] = useState({ email: false, password: false, confirmPassword: false })

    const [messageState, setMessageState] = useState(false)
    const [message, setMessage] = useState({ message: '', type: 'error' })

    const regester = async () => {
        let config = {
            method: 'POST',
            body: JSON.stringify(regesterData)
        }

        let response = await fetch('/api/regester', config)
        console.log(response)

        if (response.status !== 200) return

        setForm('login')
        setRegesterData({ email: '', password: '', confirmPassword: '' })
    }

    const messageHandle = (
        source, //could be a field or server
        type //error of message
    ) => {
        if (source === 'server') {
            setMessage({ message: apiResponseError, type: type })
        } else {
            setMessage({ message: authError, type: type })
        }

        setMessageState(true)
    }

    return (
        <>
            <Message state={messageState} setState={setMessageState} message={message.message} type={message.type} />

            <div className={style.regester}>
                <div className={style.header}>
                    <h1>Regester</h1>
                    <div className={style.navigate} onClick={() => setForm('login')}>Already Have An Acount?</div>
                </div>
                <input
                    type='text'
                    placeholder="Email"
                    autoComplete='new-email'
                    onChange={(event) => setRegesterData({ ...regesterData, email: event.target.value })}
                    value={regesterData.email}
                    style={{ outline: regesterError.email ? '2px solid red' : 'none' }}
                />
                <input
                    type='password'
                    placeholder="Password"
                    autoComplete='new-password'
                    onChange={(event) => setRegesterData({ ...regesterData, password: event.target.value })}
                    value={regesterData.password}
                    style={{ outline: regesterError.password ? '2px solid red' : 'none' }}
                />
                <input
                    type='password'
                    placeholder="Confirm Password"
                    autoComplete='new-password'
                    onChange={(event) => setRegesterData({ ...regesterData, confirmPassword: event.target.value })}
                    value={regesterData.confirmPassword}
                    style={{ outline: regesterError.confirmPassword ? '2px solid red' : 'none' }}
                />
                <button onClick={regester}>Regester</button>
            </div>
        </>
    )
};
export default RegesterForm;