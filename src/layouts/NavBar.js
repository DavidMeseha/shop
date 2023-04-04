import { Filter as FilterIcon } from "@/components/Icons";
import useFilterState from "@/hooks/useFilter";
import style from '../styles/Navbar.module.scss'
import UserMenu from "./UserMenu";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const NavBar = () => {
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
                        <div onClick={() => setMenuState(!menuState)} className={style.profile}></div>
                        <div onClick={() => setMenuState(!menuState)} className={style.user}><h3>User Name</h3></div>
                        <div onClick={() => setMenuState(!menuState)} className="arrow-down"></div>
                        <div className={style.menu} style={{ maxHeight: menuState ? 215 : 0 }}><UserMenu /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar