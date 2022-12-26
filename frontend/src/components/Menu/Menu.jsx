import { NavLink } from 'react-router-dom';
import './Menu.css';

const setActive = ({isActive}) => isActive ? 'active' : '';

function Menu() {
    
    return (
        <nav className='Menu'>
            <NavLink to='/profile' className={setActive}><p>Профиль</p></NavLink>
            <NavLink to='/messages' className={setActive}><p>Сообщения</p></NavLink>
            <NavLink to='/communities' className={setActive}><p>Сообщества</p></NavLink>
            <NavLink to='/images' className={setActive}><p>Картинки</p></NavLink>
            <NavLink to='/music' className={setActive}><p>Музыка</p></NavLink>
            <br/>
            <NavLink to='/settings' className={setActive}><p>Настройки</p></NavLink>
        </nav>
    )
}

export default Menu;