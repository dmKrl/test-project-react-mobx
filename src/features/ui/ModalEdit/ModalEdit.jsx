import { observer } from 'mobx-react-lite';
import { CloseModal } from '../../../widgets';
import { useState } from 'react';
import { EditSeminar } from '../EditSeminar/EditSeminar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import modalStore from '../../store/modalStore';
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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

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
                        <label htmlFor="">Редкатировать заголовок: </label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                        />
                        <label htmlFor="">Редактировать описание: </label>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                        />
                    </div>
                    <EditSeminar title={title} description={description} />
                    <CloseModal />
                </Box>
            </Modal>
        </div>
    );
});
