import React from "react";
import {ANDROID, Avatar, Group, IOS, ModalPage, platform} from "@vkontakte/vkui";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Data from "../Model/Data";
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon24Cancel from "@vkontakte/icons/dist/24/cancel";
import Icon24Done from "@vkontakte/icons/dist/24/done";

const osName = platform();

const ChangeAvatar = ({id, changeAvatar, onClose}) => {
    const getRow = (a) => {
        let c = []
        for (let i = 0; i < a.length / 3; i++) {
            c.push({id : a.length + i + 1, item : a.slice(3 * i, 3 * (i + 1))})
        }
        // TO-DO В каждом ряду должно быть одинаковое количество аватарок, иначе последний ряд
        // будет выровнен неверно
        if (a.length % 3) {
            c.push({id : a.length + a.length / 3 + 1, item : a.slice(a.length - a.length % 3, a.length)})
        }
        return c
    }

    const a = Data.getAvatars()
    const b = getRow(a)

    return <ModalPage id={id} header={
        <ModalPageHeader
            left={osName === ANDROID && <PanelHeaderButton onClick={onClose}><Icon24Cancel /></PanelHeaderButton>}
            right={<PanelHeaderButton onClick={onClose}>{osName === IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}
        >
            Выберите аватар
        </ModalPageHeader>}>
            <Div style={{minHeight : 400}}>
                {b.map(row => {
                    return <Div key={row.id}
                                style={{display : "flex", justifyContent : "space-around"}}>
                        {row.item.map(item => {
                            return <Avatar key={item.id}
                                        src={item.imgURL}
                                        size={56}
                                        onClick={()=>{
                                            changeAvatar(item.imgURL)
                                            onClose()
                                        }}
                            />
                        })}
                    </Div>
                })}
            </Div>
    </ModalPage>
}

export default ChangeAvatar