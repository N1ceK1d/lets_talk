function UserMessages(props) {
    return (
        <div className='UserMessages'>
            <div className='user-message message'>
                <img alt='' src={props.userImage} className="user-image" />
                <p>{props.userMessage}</p>
            </div>
        </div>
    )
}

export default UserMessages;