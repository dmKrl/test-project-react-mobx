import { DeleteButtonModal, EditButtonModal } from '../../../widgets';
import cls from './CardSeminar.module.css';

const CardSeminar = ({ seminar }) => {
    const { title, description, date, time, photo, id } = seminar;
    console.log(seminar);

    return (
        <div className={cls.CardSeminar}>
            <div className={cls.CardContent}>
                <h3>Тема: {title}</h3>
                <p>Описание: {description}</p>
                <p>Дата: {date}</p>
                <p>Время: {time}</p>
                <img src={photo} alt="card-photo" />
            </div>
            <div className={cls.CardButtons}>
                <DeleteButtonModal seminar={seminar}>Удалить семинар</DeleteButtonModal>
                <EditButtonModal id={id} title={title} description={description} />
            </div>
        </div>
    );
};

export default CardSeminar;
