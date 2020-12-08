import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import React, {useState} from "react";
import StrManager from "../Model/StrManager";

const ConfirmDeleteTournament = ({setPopout, deleteButtonClicked, go}) =>
    <Alert
        actionsLayout="vertical"
        actions={[{
            title: StrManager.get(StrManager.StrEnum.ALERT_DELETE),
            autoclose: true,
            mode: 'destructive',
            action: () => {
                deleteButtonClicked()
                go()
            },
        }, {
            title: StrManager.get(StrManager.StrEnum.ALERT_CANCEL),
            autoclose: true,
            mode: 'cancel'
        }]}
        onClose={() => {setPopout(null)}}
    >
        <h2>{StrManager.get(StrManager.StrEnum.ALERT_CONFIRM_ACTION)}</h2>
        <p>{StrManager.get(StrManager.StrEnum.ALERT_DELETE_QUESTION)}</p>
    </Alert>

export default ConfirmDeleteTournament