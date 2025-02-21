import { DeleteButton, EditButton } from '../../../widgets';
import cls from './CardSeminar.module.css';

const CardSeminar = ({ seminar }) => {
    const { title, description, date, time, photo } = seminar;

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
                <DeleteButton />
                <EditButton />
            </div>
        </div>
    );
};

export default CardSeminar;
