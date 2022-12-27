function ContactMessages(props) {
    return (
        <div className='ContactMessages message'>
            <img alt='' src={props.contactImage} className="contact-image" />
            <p>{props.contactMessage}</p>
        </div>
    )
}

export default ContactMessages;