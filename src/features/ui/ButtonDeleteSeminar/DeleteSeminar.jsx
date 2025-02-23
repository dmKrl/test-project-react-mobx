import { observer } from 'mobx-react-lite';
import Button from '../../../shared/ui/Button/Button';
import seminarsStore from '../../store/seminarsStore';
import modalStore from '../../store/modalStore';

export const DeleteSeminar = observer(() => {
    console.log(seminarsStore.chosenSeminar);
    const deleteSeminar = () => {
        seminarsStore.deleteSeminar();
        modalStore.setIsOpenDeleteModal();
    };

    return <Button onClick={deleteSeminar}>Удалить семинар</Button>;
});
