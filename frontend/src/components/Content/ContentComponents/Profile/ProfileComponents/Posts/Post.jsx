import { useState } from 'react';
import './Post.css';



function Post(props) {
    const [isLike, setLike] = useState(false);

    function like(event) {
        let likesCount = event.target.parentElement.querySelector('.likes-count');
        
        if(isLike) {
            setLike(false);
            likesCount.textContent = +likesCount.textContent - 1;
            event.target.parentElement.querySelector('.like-icon').classList.remove('liked');
        } else {
            setLike(true);
            likesCount.textContent = +likesCount.textContent + 1;
            event.target.parentElement.querySelector('.like-icon').classList.add('liked');
        }
    }

    return (
        <div className='Post'>
            <img alt='post author image' src={props.image} className='author-post-image'/>
            <div>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <p>{props.date}</p>
                <div className='likes-block'>
                    <img alt='like icon' onClick={like} className='like-icon' src="./images/like_icon.png"/> 
                    <p className='likes-count'>{props.likes}</p>
                </div> 
            </div>
        </div>
    )
}

export default Post;