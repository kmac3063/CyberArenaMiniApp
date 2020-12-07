import Headline from "@vkontakte/vkui/dist/components/Typography/Headline/Headline";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import {Input} from "@vkontakte/vkui";
import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import React, {useEffect, useState} from "react";
import StrManager from "../Model/StrManager";

const ChangeNickname = ({setPopout, saveNickname, gameUser}) => {
    const [inputValue, setInputValue] = useState(gameUser.nickname)
    const [needClose, setNeedClose] = useState(false)

    useEffect(() => {
        if (needClose) {
            saveNickname(inputValue)
            setPopout(null)
        }
    }, [inputValue, needClose]);

    return <Alert
        actions={[{
            title: StrManager.get(StrManager.StrEnum.ALERT_CANCEL),
            mode: 'cancel',
            autoclose: true
        }, {
            title: StrManager.get(StrManager.StrEnum.ALERT_SAVE),
            action: () => {
                setNeedClose(true)
            },
        }]}
        onClose={() => {
            setPopout(null)
        }}
        style={{padding : 0}}>
        <Headline weight="semibold" style={{ marginBottom: 16 }}>{StrManager.get(StrManager.StrEnum.ALERT_INPUT_NEW_NICKNAME)}</Headline>
        <FormLayoutGroup>
            <Input type={"text"} value={inputValue}
                   onChange={(e) => {
                       setInputValue(e.target.value)
                   }}
            />
        </FormLayoutGroup>
    </Alert>
}

export default ChangeNickname