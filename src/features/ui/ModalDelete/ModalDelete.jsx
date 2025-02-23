import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import modalStore from '../../store/modalStore';
import { observer } from 'mobx-react-lite';
import { DeleteSeminar } from '../ButtonDeleteSeminar/DeleteSeminar';
import { CloseModal } from '../../../widgets';

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

export const ModalDelete = observer(() => {
    return (
        <div>
            <Modal
                open={modalStore.deleteModalIsOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Вы уверены, что хотите удалить семинар из списка?
                    </Typography>
                    <DeleteSeminar />
                    <CloseModal />
                </Box>
            </Modal>
        </div>
    );
});
