import React from 'react'
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Coliseum from "../img/coliseum.png"
import StrManager from "../Model/StrManager";

const Tavern = () => {
    return <Placeholder
        icon={<img src={Coliseum} height={"50%"} width={"50%"}/>}
        header={StrManager.get(StrManager.StrEnum.TAVERN_NOT_READY)}
    >
        {StrManager.get(StrManager.StrEnum.TAVERN_NOT_READY_DESCRIPTION)}
    </Placeholder>
}

export default Tavern