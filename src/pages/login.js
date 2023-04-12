import style from '@/styles/Login.module.scss'
import Head from "next/head";
import LoginForm from "@/layouts/LoginForm";
import RegesterForm from "@/layouts/RegesterForm";
import { useState } from "react";

const Login = () => {
    const [state, setState] = useState('login')

    return (
        <>
            <Head>
                <title>Shop Now | Login</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={style.page}>
                <div className={style.container}>
                    <div className={style.wrapper} style={{ left: state === 'login' ? '-100%' : '0%' }}>
                        <RegesterForm setForm={setState} />
                        <LoginForm setForm={setState} />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Login;