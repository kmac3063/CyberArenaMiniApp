import React from 'react'
import {Group} from "@vkontakte/vkui";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Coliseum from "../img/coliseum.png"
import StrManager from "../Model/StrManager";

const Grid = ({gameUser, tournament}) => {

    return <Placeholder
        icon={<img src={Coliseum} height={"50%"} width={"50%"}/>}
        header={StrManager.get(StrManager.StrEnum.GRID_NOT_READY_YET)}
    >
        {StrManager.get(StrManager.StrEnum.GRID_NOT_READY_YET_DESCRIPTION)}
    </Placeholder>
}

export default Grid