import { makeAutoObservable } from 'mobx';

class ModalStore {
    deleteModalIsOpen = false;
    editModalIsOpen = false;
    infoModalIsOpen = false;

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

    closeAllModal() {
        this.editModalIsOpen = false;
        this.deleteModalIsOpen = false;
        this.infoModalIsOpen = false;
    }
}

const modalStore = new ModalStore();
export default modalStore;
