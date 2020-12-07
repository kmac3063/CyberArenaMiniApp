import Headline from "@vkontakte/vkui/dist/components/Typography/Headline/Headline";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import {Input} from "@vkontakte/vkui";
import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import React, {useEffect, useState} from "react";

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
            title: 'Отмена',
            mode: 'cancel',
            autoclose: true
        }, {
            title: 'Сохранить',
            action: () => {
                setNeedClose(true)
            },
        }]}
        onClose={() => {
            setPopout(null)
        }}
        style={{padding : 0}}>
        <Headline weight="semibold" style={{ marginBottom: 16 }}>Введите новый никнейм</Headline>
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