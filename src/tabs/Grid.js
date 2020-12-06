import React from 'react'
import {Group} from "@vkontakte/vkui";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Coliseum from "../img/coliseum.png"

const Grid = ({gameUser, tournament}) => {

    return <Placeholder
        icon={<img src={Coliseum} height={"50%"} width={"50%"}/>}
        header="Сетки пока нет"
    >
        Возвращайтесь позже, сетка ещё не сформирована
    </Placeholder>
}

export default Grid