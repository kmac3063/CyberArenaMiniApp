import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import React, {useState} from "react";

const DeclinePartition = ({setPopout, declineButtonClicked}) =>
    <Alert
        actionsLayout="vertical"
        actions={[{
            title: 'Отказаться',
            autoclose: true,
            mode: 'destructive',
            action: declineButtonClicked,
        }, {
            title: 'Отмена',
            autoclose: true,
            mode: 'cancel'
        }]}
        onClose={() => {setPopout(null)}}
    >
        <h2>Подтвердите действие</h2>
        <p>Вы уверены, что хотите отказаться от участия?</p>
    </Alert>


export default DeclinePartition