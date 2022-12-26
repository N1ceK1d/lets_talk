import './Profile.css'
import Posts from './ProfileComponents/Posts/Posts';

function Profile() {
    return (
        <div className="Profile">
            <div className='avatar'>
                <img className='avatar-image' alt='avatar image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Etyn3_8GVrH8CFu3czOztEq_g2GOZ7fWiQ&usqp=CAU"/>
                <div className='user-info'>
                    <h1 className='user-name'>John Smith</h1>
                    <p className='user-info user-slogan'>"Ягу пей - спортсменов бей"</p>
                    <p className='user-info user-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <Posts/>
        </div>
    )
}

export default Profile;