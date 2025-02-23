import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { observer } from 'mobx-react-lite';
import { CloseModal } from '../../../widgets';
import modalStore from '../../../features/store/modalStore';

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

export const ModalInfo = observer(() => {
    return (
        <div>
            <Modal
                open={modalStore.infoModalIsOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Изменения успешно выполнены!
                    </Typography>
                    <CloseModal />
                </Box>
            </Modal>
        </div>
    );
});
