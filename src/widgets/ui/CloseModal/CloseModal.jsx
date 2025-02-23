import { observer } from 'mobx-react-lite';
import modalStore from '../../../features/store/modalStore';
import Button from '../../../shared/ui/Button/Button';

export const CloseModal = observer(() => {
    const setChosenSeminar = () => {
        modalStore.closeAllModal();
    };

    return <Button onClick={setChosenSeminar}>Вернуться к списку</Button>;
});
