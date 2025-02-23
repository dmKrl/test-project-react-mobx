import { observer } from 'mobx-react-lite';
import Button from '../../../shared/ui/Button/Button';
import seminarsStore from '../../store/seminarsStore';
import modalStore from '../../store/modalStore';

//Кнопка для редактирования карточки и закрытия модального окна
export const EditSeminar = observer(({ title, description }) => {
    
    const editSeminar = () => {
        seminarsStore.editSeminar({ title, description });
        modalStore.setIsOpenEditModal();
        modalStore.setIsOpenInfoModal();
    };

    return <Button onClick={editSeminar}>Редактировать семинар</Button>;
});
