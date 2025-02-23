import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import modalStore from '../../store/modalStore';
import { observer } from 'mobx-react-lite';
import { CloseModal, EditButtonModal } from '../../../widgets';
import cls from './ModalEdit.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalEdit = observer(() => {
    return (
        <div>
            <Modal
                open={modalStore.editModalIsOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Вы уверены, что хотите удалить семинар из списка?
                    </Typography>
                    <div className={cls.form}>
                        <form className={cls.formContent} action="">
                            <label htmlFor="">Редкатировать заголовок: </label>
                            <input type="text" />
                            <label htmlFor="">Редактировать описание: </label>
                            <input type="text" />
                        </form>
                    </div>
                    <EditButtonModal />
                    <CloseModal />
                </Box>
            </Modal>
        </div>
    );
});
