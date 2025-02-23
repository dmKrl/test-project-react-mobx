import { useEffect } from 'react';
import './styles/App.css';
import CardsSeminar from '../widgets/ui/CardsSeminar/CardsSeminar';
import seminarsStore from '../features/store/seminarsStore';
import { observer } from 'mobx-react-lite';
import { ModalEdit } from '../features/ui/modalEdit/modalEdit';
import { ModalDelete } from '../features/ui/modalDelete/modalDelete';
import { ModalInfo } from '../widgets/ui/ModalInfo/ModalInfo';

const App = observer(() => {
    useEffect(() => {
        seminarsStore.getSeminars();
    }, []);

    return (
        <div className="app">
            <CardsSeminar seminars={seminarsStore.seminars} />
            <ModalDelete />
            <ModalEdit />
            <ModalInfo />
        </div>
    );
});

export default App;
