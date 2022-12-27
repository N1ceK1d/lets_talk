import './Dialog.css';
import ContactMessages from './DialogComponents/ContactMessages';
import UserMessages from './DialogComponents/UserMessages';

function Dialog(props) {
    return(
        <div className='Dialog'>
           <ContactMessages
                contactImage={''}
                contactMessage={'Привет!!!'}
           />
           <UserMessages
                userImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Etyn3_8GVrH8CFu3czOztEq_g2GOZ7fWiQ&usqp=CAU'}
                userMessage={'Привет'}
           />
           <ContactMessages
                contactImage={''}
                contactMessage={'Ты видел вышла новая игра???'}
           />
           <ContactMessages
                contactImage={''}
                contactMessage={'Это просто шедевральная игра, ты обязан её попробовать!'}
           />
           <UserMessages
                userImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Etyn3_8GVrH8CFu3czOztEq_g2GOZ7fWiQ&usqp=CAU'}
                userMessage={'Да, хорошо, я обязательно её опробую Только сперва закончу с делами'}
           />
        </div>
    )
}

export default Dialog;