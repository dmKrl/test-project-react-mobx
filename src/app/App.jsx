import { useEffect, useState } from 'react';
import './styles/App.css';
import CardsSeminar from '../widgets/ui/CardsSeminar/CardsSeminar';

function App() {
    const [seminars, setSeminars] = useState();

    async function getFetchSeminars() {
        const response = await fetch('http://localhost:3000/seminars');
        const responseData = await response.json();

        return responseData;
    }

    useEffect(() => {
        getFetchSeminars().then((data) => setSeminars(data));
    }, []);
    console.log(seminars);
    return (
        <div className="app">
            <CardsSeminar seminars={seminars} />
        </div>
    );
}

export default App;
