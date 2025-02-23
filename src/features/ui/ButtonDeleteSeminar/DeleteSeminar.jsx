import { observer } from 'mobx-react-lite';
import Button from '../../../shared/ui/Button/Button';
import seminarsStore from '../../store/seminarsStore';
import modalStore from '../../store/modalStore';

//Кнопка для удаления карточки и закрытия модального окна
export const DeleteSeminar = observer(() => {
    
    const deleteSeminar = () => {
        seminarsStore.deleteSeminar();
        modalStore.setIsOpenDeleteModal();
        modalStore.setIsOpenInfoModal();
    };

    return <Button onClick={deleteSeminar}>Удалить семинар</Button>;
});
