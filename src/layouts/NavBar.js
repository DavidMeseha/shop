import { Filter as FilterIcon } from "@/components/Icons";
import useFilterState from "@/hooks/useFilter";
import style from '../styles/Navbar.module.scss'
import SearchBar from "@/components/SearchBar";
import UserMenu from "./UserMenu";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const NavBar = () => {
    const router = useRouter()
    if (router.pathname === '/login') return
    if (router.pathname === '/map') return

    const { data: session, status } = useSession()

    const { setState } = useFilterState()
    const [menuState, setMenuState] = useState(false)

    return (
        <div className={style.container}>
            <div onClick={() => setState(prev => !prev)} className={style.filter}>
                <div className={style.icon}><FilterIcon /></div>
                <div className={style.title}><h3>Filters</h3></div>
            </div>
            <div className={style.mainNav}>
                <div className={style.logo}><h1>LOGO</h1></div>
                <div className={style.content}>
                    <div className={style.search}>
                        <SearchBar />
                    </div>
                    <div className={style['user-menu']}>
                        <div style={{ width: 10, height: 10, background: 'red', position: 'absolute', top: 0, left: 20, borderRadius: 99 }}></div>
                        <div onClick={() => session ? setMenuState(!menuState) : router.push('/login')} className={style.profile}></div>
                        <div onClick={() => session ? setMenuState(!menuState) : router.push('/login')} className={style.user}><h3>{session ? session.user.name.split(' ')[0] : 'Sign In'}</h3></div>
                        <div onClick={() => session ? setMenuState(!menuState) : router.push('/login')} className="arrow-down"></div>
                        {menuState && <div className={style.menu}><UserMenu /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar