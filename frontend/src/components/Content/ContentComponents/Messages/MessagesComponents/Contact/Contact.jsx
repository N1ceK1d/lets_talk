import { NavLink } from 'react-router-dom';
import './Contact.css';

function Contact(props) {
    const isOnline = props.isOnline ? 'online' : 'offline';
    return (
        <NavLink to={'/messages/' + props.contactName}>
            <div className='Contact'>
                <img alt="contact avatar" src={props.contactAvatar} className={isOnline}/>
                <p className='contact-name'>{props.contactName}</p>
            </div>
        </NavLink>
    )
}

export default Contact;