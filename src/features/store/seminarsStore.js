import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import modalStore from './modalStore';

//Store для семинаров (запросы на получение/удаление/редактирование семинаров) и хранение данных в глобальном стейте
class SeminarsStore {
    seminars = [];
    chosenSeminar = {};

    constructor() {
        makeAutoObservable(this);
    }

    setChosenSeminar(seminar) {
        this.chosenSeminar = seminar.seminar;
    }

    async getSeminars() {
        try {
            const response = await fetch('http://localhost:3000/seminars');
            const responseData = await response.json();

            this.seminars = responseData;
        } catch (error) {
            console.error('Ошибка при получении семинаров:', error);
        }
    }

    async deleteSeminar() {
        try {
            await axios
                .delete(`http://localhost:3000/seminars/${this.chosenSeminar.id}`)
                .catch((error) => console.log(error));

            this.getSeminars();
            await this.getSeminars();
        } catch (error) {
            modalStore.infoModalDescription(
                'Ошибка при удалении семинара:',
                error.message
            );
            console.error('Ошибка при удалении семинара:', error);
        }
    }

    async editSeminar({ title, description }) {
        try {
            await axios.put(`http://localhost:3000/seminars/${this.chosenSeminar.id}`, {
                ...this.chosenSeminar,
                title: title,
                description: description,
            });

            await this.getSeminars();
        } catch (error) {
            modalStore.infoModalDescription(
                'Ошибка при редактировании семинара:',
                error.message
            );
            console.error('Ошибка при редактировании семинара:', error);
        }
    }
}

const seminarsStore = new SeminarsStore();
export default seminarsStore;
