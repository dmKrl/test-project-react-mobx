import CardSeminar from '../../../shared/ui/CardSeminar/CardSeminar';
import cls from './CardsSeminar.module.css';

const CardsSeminar = ({ seminars }) => {
    return (
        <div className={cls.CardsSeminar}>
            <h2>Список семинаров</h2>
            <div className={cls.CardsContainer}>
                {seminars.lenght !== 0 ? (
                    seminars.map((seminar) => {
                        return <CardSeminar key={seminar.id} seminar={seminar} />;
                    })
                ) : (
                    <p>Список семинаров пуст</p>
                )}
            </div>
        </div>
    );
};

export default CardsSeminar;
