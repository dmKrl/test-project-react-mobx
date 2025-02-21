import { createRoot } from 'react-dom/client';
import './app/styles/index.css';
import App from './app/App.jsx';

//Для запуска БД используем команду json-server -w db.json

createRoot(document.getElementById('root')).render(<App />);
