import React, {useEffect, useState} from 'react'
import {Button, Group} from "@vkontakte/vkui";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Coliseum from "../img/coliseum.png"
import StrManager from "../Model/StrManager";
import Constants from "../Model/Constants";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Grid = ({gameUser, tournament, go}) => {
    const [gridIsReady, setGridIsReady] = useState(false)

    // const status = tournament.creatorId === gameUser.id ?
    //     Constants.UserStatus.CREATOR : Constants.UserStatus.ANYONE

    const status = Constants.UserStatus.CREATOR

    useEffect(() => {
        // TO-DO узнаем с сервера, готова ли сетка
        setGridIsReady(false)
    }, [])

    return <Group> {gridIsReady ? {} :
        status === Constants.UserStatus.CREATOR ?
            <Div>
                <Button size="xl" mode="commerce"
                        onClick={go}
                        data-to={Constants.Panels.GRID_CREATOR}>
                    {StrManager.get(StrManager.StrEnum.CREATE_GRID_BUTTON_TITLE)}
                </Button>
            </Div>
            : <Placeholder
                icon={<img src={Coliseum} height={"50%"} width={"50%"}/>}
                header={StrManager.get(StrManager.StrEnum.GRID_NOT_READY_YET)}
            >
                {StrManager.get(StrManager.StrEnum.GRID_NOT_READY_YET_DESCRIPTION)}
            </Placeholder>}
    </Group>
}

export default Grid