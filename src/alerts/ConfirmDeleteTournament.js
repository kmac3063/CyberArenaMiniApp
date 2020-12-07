import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import React, {useState} from "react";

const ConfirmDeleteTournament = ({setPopout, deleteButtonClicked}) =>
    <Alert
        actionsLayout="vertical"
        actions={[{
            title: 'Удалить',
            autoclose: true,
            mode: 'destructive',
            action: deleteButtonClicked,
        }, {
            title: 'Отмена',
            autoclose: true,
            mode: 'cancel'
        }]}
        onClose={() => {setPopout(null)}}
    >
        <h2>Подтвердите действие</h2>
        <p>Вы уверены, что хотите удалить турнир? Отменить это действие будет невозможно.</p>
    </Alert>


export default ConfirmDeleteTournament