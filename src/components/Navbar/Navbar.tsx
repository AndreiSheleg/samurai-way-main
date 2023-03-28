import s from './Navbar.module.css'

// s импортируется их файла модуль css

function Navbar () {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='#s'>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href='#s'>Messages</a>
            </div>
            <div className={s.item}>
                <a href='#s'>News</a>
            </div>
            <div className={s.item}>
                <a href='#s'>Music</a>
            </div>
            <div className={s.item}>
                <a href='#s'>Settings</a>
            </div>

        </nav>
    )
}

export default Navbar