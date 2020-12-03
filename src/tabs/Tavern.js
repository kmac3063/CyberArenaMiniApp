import React from 'react'
import {Group} from "@vkontakte/vkui";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Coliseum from "../img/coliseum.png"

const Tavern = () => {
    return <Placeholder
        icon={<img src={Coliseum} height={"50%"} width={"50%"}/>}
        header="Таверна недоступна"
    >
        Совсем скоро вы сможете посетить таверну, а пока соревнуйтесь с другими участниками
    </Placeholder>
}

export default Tavern