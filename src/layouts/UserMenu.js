import style from '@/styles/Menu.module.scss'

const UserMenu = () => {
    return (
        <div className={style.container}>
            <div className={style.signout}><h3>Sign Out</h3></div>
            <div className={style.split}></div>
            <ul className={style.menu}>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div>Cart</div><div style={{ width: 15, height: 15, background: 'red', borderRadius: 99 }}>2</div></li>
            </ul>
        </div>
    )
};
export default UserMenu;