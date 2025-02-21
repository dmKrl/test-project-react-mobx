import Button from '../../../shared/ui/Button/Button';

export const EditButton = () => {
    function editSeminar() {
        console.log(1);
    }

    return <Button onClick={editSeminar}>EditButton</Button>;
};
