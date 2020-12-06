import Headline from "@vkontakte/vkui/dist/components/Typography/Headline/Headline";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import {Input} from "@vkontakte/vkui";
import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import React, {useState} from "react";

const ChangeNicknameAlert = ({setPopout, saveNickname, gameUser}) => {
    const [inputValue, setInputValue] = useState(gameUser.nickname)

    return <Alert
        actions={[{
            title: 'Отмена',
            mode: 'cancel',
            action: () => {
                setPopout(null)
            }
        }, {
            title: 'Сохранить',
            action: () => {
                saveNickname(inputValue)
                setPopout(null)
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

export default ChangeNicknameAlert