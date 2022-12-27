import './Messages.css';
import Contact from './MessagesComponents/Contact/Contact';
import Dialog from './MessagesComponents/Dialog/Dialog';

function Messages() {
    return (
        <div className='Messages'>
            <div className='contacts-list'>
                <h1>Контакты</h1>
                <Contact isOnline={true} contactName={"Sakura Tyan"} contactAvatar={'https://cs12.pikabu.ru/post_img/big/2022/11/08/10/1667929102152124336.jpg'} />
                <Contact isOnline={false} contactName={"Aliza Rose"} contactAvatar={'https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg'} />
                <Contact isOnline={false} contactName={"Daniyal Coleman"} contactAvatar={'http://sun9-1.userapi.com/impg/C5Jj2Zqu-xzOmhvbc_-rVZqQGQMpqNsWbt3apg/ADWwTJxfpyQ.jpg?size=564x550&quality=96&sign=361ed471335b8509654658509df29c0d&type=album'} />
                <Contact isOnline={true} contactName={"Yaseen Kaufman"} contactAvatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeTycTVcTUb8lm-TzCnJ6Q3UUKciHUDd-zg&usqp=CAU'} />
                <Contact isOnline={true} contactName={"Ellie-Mae Summers"} contactAvatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxip991oVlIE0GHvVuYBJF32NXceKE-Rzmw&usqp=CAU'} />
                <Contact isOnline={false} contactName={"Finnian Singleton"} contactAvatar={'https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-anime-avatars-gif-discord-72.gif'} />
                <Contact isOnline={true} contactName={"Lillian Bolton"} contactAvatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfEz2I2twNXWR4S_WwA3VgPaeqYaLjTbpWw&usqp=CAU'} />
                <Contact isOnline={false} contactName={"Alma Thornton"} contactAvatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0cJV_ECcAAkoaGG2WGW8sQwMluLyJnNB1w&usqp=CAU'} />
                <Contact isOnline={false} contactName={"Katrina Juarez"} contactAvatar={'https://abrakadabra.fun/uploads/posts/2021-12/1639375653_6-abrakadabra-fun-p-avatarki-dlya-stima-furri-6.jpg'} />
                <Contact isOnline={true} contactName={"Christian Sampson"} contactAvatar={'https://50.img.avito.st/image/1/1.J2C8_7a6i4mKVkmM_r8yFmZcjY0I3INLDVyPgQBUiQ.wPm2QFHnb1Z5robrcU0s9b7IVIQE-nB991g0PCniTdI'} />
            </div>
            <div className='message-block'>
                <Dialog/>
                <form>
                    <textarea/>
                    <input type='submit' value='Отправить'/>
                </form>
            </div>
        </div>
    )
}

export default Messages;