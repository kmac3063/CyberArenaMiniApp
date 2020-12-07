import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import React, {useState} from "react";
import StrManager from "../Model/StrManager";

const DeclinePartition = ({setPopout, declineButtonClicked}) =>
    <Alert
        actionsLayout="vertical"
        actions={[{
            title: StrManager.get(StrManager.StrEnum.ALERT_DECLINE),
            autoclose: true,
            mode: 'destructive',
            action: declineButtonClicked,
        }, {
            title: StrManager.get(StrManager.StrEnum.ALERT_CANCEL),
            autoclose: true,
            mode: 'cancel'
        }]}
        onClose={() => {setPopout(null)}}
    >
        <h2>{StrManager.get(StrManager.StrEnum.ALERT_CONFIRM)}</h2>
        <p>{StrManager.get(StrManager.StrEnum.ALERT_DELETE_QUESTION)}</p>
    </Alert>

export default DeclinePartition