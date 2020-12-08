import React, {useEffect, useState} from 'react'
import {Group, Separator, Spinner} from "@vkontakte/vkui";
import Data from "../Model/Data";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Constants from "../Model/Constants";

const Participants = ({tournament, selectParticipant, go}) => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState()
    const [VKUsers, setVKUsers] = useState()

    useEffect(() => {
        //TODO получаем всех людей из турнира

        async function fetchData() {
            const tempUsers = await Data.getTestUsers() // TODO Получаем с сервера людей по турниру
            const vkUsers = await Data.getVKUsers(tempUsers)

            setUsers(tempUsers)
            setVKUsers(vkUsers);

            setLoading(false)
        }

        fetchData();


    }, [])

    const getFullName = (id) => {
        if (!VKUsers || !VKUsers.length) return "Иван Иванов"
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