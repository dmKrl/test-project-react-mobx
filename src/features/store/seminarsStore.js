import axios from 'axios';
import { makeAutoObservable } from 'mobx';

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
        const response = await fetch('http://localhost:3000/seminars');
        const responseData = await response.json();

        this.seminars = responseData;
    }

    async deleteSeminar() {
        await axios
            .delete(`http://localhost:3000/seminars/${this.chosenSeminar.id}`)
            .catch((error) => console.log(error));

        this.getSeminars();
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
            console.error('Ошибка при редактировании семинара:', error);
        }
    }
}

const seminarsStore = new SeminarsStore();
export default seminarsStore;
