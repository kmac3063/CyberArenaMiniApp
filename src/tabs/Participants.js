import React from 'react'
import {Group} from "@vkontakte/vkui";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Coliseum from "../img/coliseum.png"

const Participants = () => {
    return <Placeholder
        icon={<img src={Coliseum} height={"50%"} width={"50%"}/>}
        header="Участники недоступны"
    >
    </Placeholder>
}

export default Participants