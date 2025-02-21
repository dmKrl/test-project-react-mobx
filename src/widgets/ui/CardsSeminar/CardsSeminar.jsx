import CardSeminar from '../../../shared/ui/CardSeminar/CardSeminar';
import cls from './CardsSeminar.module.css';

const CardsSeminar = ({ seminars }) => {
    console.log(seminars);
    return (
        <div className={cls.CardsSeminar}>
            <h2>Список семинаров</h2>
            <div className={cls.CardsContainer}>
                {seminars &&
                    seminars.map((seminar) => {
                        return <CardSeminar key={seminar.id} seminar={seminar} />;
                    })}
            </div>
        </div>
    );
};

export default CardsSeminar;
