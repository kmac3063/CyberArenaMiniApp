import React, {useEffect, useState} from 'react'
import {Group, Separator, Spinner} from "@vkontakte/vkui";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Coliseum from "../img/coliseum.png"
import Data from "../Model/Data";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Constants from "../Model/Constants";

const Participants = ({tournament, selectParticipant, go}) => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState()
    const [VKUsers, setVKUsers] = useState()

    useEffect(() => {
        //TO-DO получаем всех людей из турнира
        setUsers(Data.getTestUsers())
        setVKUsers(Data.getVKUsers(users))

        setLoading(false)
    }, [])

    const getFullName = (id) => {
        if (!VKUsers) return "Иван Иванов"
        let user = VKUsers.find((u) => u.id === id)
        return user ? `${user.first_name} ${user.last_name}` : "Иван Иванов"
    }

    return loading ? <Spinner size={"large"} style={{position:"relative", marginTop:"50%"}}/> :
    <Group>
        {users.map(user =>
        <React.Fragment key={user.id}>
            <SimpleCell before={<Avatar size={48}
               src={user.imgURL} style={{objectFit: "cover"}}/>}
               description={getFullName(user.id)}
                onClick={(e)=>{
                    selectParticipant(user)
                    go(e)
                }}
                data-to={Constants.Panels.PARTICIPANT_PROFILE}>
                {user.nickname}
            </SimpleCell>
            <Separator/>
        </React.Fragment>)}
    </Group>
}

export default Participants