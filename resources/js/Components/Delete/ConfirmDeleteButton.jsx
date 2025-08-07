import DangerButton from "../Button/DangerButton";
import { useForm } from "@inertiajs/react";

function ConfirmDeleteButton({ id, routename}) {
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        if(window.confirm('Tem certeza que deseja deletar este usuario?')) {
            destroy(route(routename, id));
        }
    };

    return (
        <DangerButton onClick={handleDelete}>
            Deletar
        </DangerButton>
    );
}

export default ConfirmDeleteButton;
