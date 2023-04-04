import style from '@/styles/Menu.module.scss'

const UserMenu = () => {
    return (
        <div className={style.container}>
            <div className={style.signout}><h3>Sign Out</h3></div>
            <div className={style.split}></div>
            <ul className={style.menu}>
                <li>Cart</li>
            </ul>
        </div>
    )
};
export default UserMenu;