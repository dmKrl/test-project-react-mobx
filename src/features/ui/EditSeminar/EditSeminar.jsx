import { observer } from 'mobx-react-lite';
import Button from '../../../shared/ui/Button/Button';
import seminarsStore from '../../store/seminarsStore';
import modalStore from '../../store/modalStore';

export const EditSeminar = observer(({ title, description }) => {
    console.log(seminarsStore.chosenSeminar);
    const editSeminar = () => {
        seminarsStore.editSeminar({ title, description });
        modalStore.setIsOpenEditModal();
        modalStore.setIsOpenInfoModal();
    };

    return <Button onClick={editSeminar}>Редактировать семинар</Button>;
});
