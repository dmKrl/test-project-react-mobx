import Button from '../../../shared/ui/Button/Button';

export const DeleteButton = () => {

    function deleteSeminar() {
        console.log(1);
    }

    return <Button onClick={deleteSeminar}>DeleteButton</Button>;
};
