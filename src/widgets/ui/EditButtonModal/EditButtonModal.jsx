import { observer } from 'mobx-react-lite';
import modalStore from '../../../features/store/modalStore';
// import seminarsStore from '../../../features/store/seminarsStore';
import Button from '../../../shared/ui/Button/Button';

export const EditButtonModal = observer(() => {
    return <Button onClick={() => modalStore.setIsOpenEditModal()}>Редактировать</Button>;
});
