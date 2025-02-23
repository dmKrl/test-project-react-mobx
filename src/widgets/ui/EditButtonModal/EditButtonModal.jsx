import { observer } from 'mobx-react-lite';
import modalStore from '../../../features/store/modalStore';
import Button from '../../../shared/ui/Button/Button';
import seminarsStore from '../../../features/store/seminarsStore';

//Кнопка для открытия модального окна подтверждения редактирования карточки и сохранения в сторе выбранной карточки
export const EditButtonModal = observer((seminar) => {
    const setChosenSeminar = () => {
        modalStore.setIsOpenEditModal();
        seminarsStore.setChosenSeminar(seminar);
    };
    return <Button onClick={setChosenSeminar}>Редактировать</Button>;
});
