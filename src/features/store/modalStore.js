import { makeAutoObservable } from 'mobx';
//Store для модальных окон (состояния отображения и описание для модального окна с информацией о корректности запросов)

class ModalStore {
    deleteModalIsOpen = false;
    editModalIsOpen = false;
    infoModalIsOpen = false;

    infoModalDescription = '';

    constructor() {
        makeAutoObservable(this);
    }

    setIsOpenDeleteModal() {
        this.deleteModalIsOpen = !this.deleteModalIsOpen;
    }

    setIsOpenEditModal() {
        this.editModalIsOpen = !this.editModalIsOpen;
    }

    setIsOpenInfoModal() {
        this.infoModalIsOpen = !this.infoModalIsOpen;
    }

    setInfoModalDescription(description) {
        this.infoModalDescription = description;
    }

    closeAllModal() {
        this.editModalIsOpen = false;
        this.deleteModalIsOpen = false;
        this.infoModalIsOpen = false;
    }
}

const modalStore = new ModalStore();
export default modalStore;
