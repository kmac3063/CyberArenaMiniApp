import React from 'react'
import {Group} from "@vkontakte/vkui";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Coliseum from "../img/coliseum.png"

const Grid = () => {
    return <Placeholder
        icon={<img src={Coliseum} height={"50%"} width={"50%"}/>}
        header="Сетка недоступна"
    >
    </Placeholder>
}

export default Grid