import { observer } from 'mobx-react-lite';
import modalStore from '../../../features/store/modalStore';
import Button from '../../../shared/ui/Button/Button';
import seminarsStore from '../../../features/store/seminarsStore';

//Кнопка для открытия модального окна подтверждения удаления карточки и сохранения в сторе выбранной карточки

export const DeleteButtonModal = observer((seminar) => {
    const setChosenSeminar = () => {
        modalStore.setIsOpenDeleteModal();
        seminarsStore.setChosenSeminar(seminar);
    };

    return <Button onClick={setChosenSeminar}>Удалить семинар</Button>;
});
