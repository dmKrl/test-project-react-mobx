import { observer } from 'mobx-react-lite';
import modalStore from '../../../features/store/modalStore';
import Button from '../../../shared/ui/Button/Button';
import seminarsStore from '../../../features/store/seminarsStore';

export const EditButtonModal = observer((seminar) => {
    const setChosenSeminar = () => {
        modalStore.setIsOpenEditModal();
        seminarsStore.setChosenSeminar(seminar);
    };
    return <Button onClick={setChosenSeminar}>Редактировать</Button>;
});
