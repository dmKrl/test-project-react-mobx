import { makeAutoObservable } from 'mobx';

class ModalStore {
    deleteModalIsOpen = false;
    editModalIsOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    setIsOpenDeleteModal() {
        this.deleteModalIsOpen = !this.deleteModalIsOpen;
    }
    setIsOpenEditModal() {
        this.editModalIsOpen = !this.editModalIsOpen;
    }
    closeAllModal() {
        this.editModalIsOpen = false;
        this.deleteModalIsOpen = false;
    }
}

const modalStore = new ModalStore();
export default modalStore;
