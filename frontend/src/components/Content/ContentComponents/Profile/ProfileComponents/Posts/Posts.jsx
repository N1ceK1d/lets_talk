import Post from './Post';
import './Posts.css'

function Posts() {
    return (
        <div className='Posts'>
            <form>
                <input className='post-title' type="text" placeholder='Заголовок'/>
                <textarea className='post-text' rows="6" cols="70" name="text" placeholder='Введите текст...'/>
                <input type='submit' value='Отправить' />
            </form>
            <Post
            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Etyn3_8GVrH8CFu3czOztEq_g2GOZ7fWiQ&usqp=CAU"}
            title={"С новым годоммм!!!"}
            text={`В этот чудесный день хочу поздравить всю планету с НОВЫМ ГОДОООООМ
                УРААААА!!!!!! ЖеЛАю всем счаться Здоровььья и ВСего самого наилучшего`}
            date={"26.12.2022"}
            likes={12}
            />
            <Post
            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Etyn3_8GVrH8CFu3czOztEq_g2GOZ7fWiQ&usqp=CAU"}
            title={"Мир чудес:)"}
            text={`Здравствуй мир чУдес, сколько таин и волшебстваа`}
            date={"19.11.2022"}
            likes={32}
            />
            <Post
            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Etyn3_8GVrH8CFu3czOztEq_g2GOZ7fWiQ&usqp=CAU"}
            title={"Жизень в общаге"}
            text={`Жизень в общаге неинтересная, тут скучно, нет денег и есть такараны`}
            date={"6.11.2022"}
            likes={1}
            />
        </div>
    )
}

export default Posts;