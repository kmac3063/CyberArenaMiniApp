import ChangeNicknameAlert from "../alerts/ChangeNicknameAlert";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import {ModalRoot, Panel, SimpleCell, Textarea} from "@vkontakte/vkui";
import ChangeAvatar from "../modals/ChangeAvatar";
import Constants from "../Model/Constants";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import defaultAvatar from "../img/120x120_default_аvatar.png";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import View from "@vkontakte/vkui/dist/components/View/View";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import React, {useEffect, useState} from "react";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import "../styles.css"
import bridge from "@vkontakte/vk-bridge";
import Data from "../Model/Data";
import StrManager from "../Model/StrManager";

const ParticipantProfile = ({id, go, tournament, participant, fetchedUser}) => {
    const [loading, setLoading] = useState(true)
    const [VKParticipant, setVKParticipant] = useState(null)

    useEffect(() => {
        // fetch
        async function fetchData() {
            const tokenObj = await bridge.send("VKWebAppGetAuthToken",
                {app_id : parseInt(Data.getVkAppId()) , "scope": ""});
            const token = tokenObj.access_token

            console.log("access_token : " + token)

            const vkUser = await bridge.send("VKWebAppCallAPIMethod",
                {"method": "users.get", "request_id": "32test",
                    "params": {user_ids: fetchedUser.id, fields: "bdate,city", "v":"5.126", "access_token":token}})
            console.log("vkUser : " + vkUser)

            if (vkUser && vkUser.first_name)
                setVKParticipant(vkUser);
            else
                setVKParticipant(fetchedUser)
            setLoading(false)
        }

        fetchData();

        setVKParticipant(fetchedUser)
        setLoading(false)
    }, [])

    return <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to={Constants.Panels.TOURNAMENT_INFO_HOME}/>}
            separator={false}>
            {tournament.name}
        </PanelHeader>

        <Group>
            <Header mode="secondary">{StrManager.get(StrManager.StrEnum.PROFILE_INFO)}</Header>

            <Group>
                <SimpleCell>
                    <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_AVATAR)}>
                        <Avatar size={84} src={loading ? defaultAvatar : participant.imgURL}
                                style={{marginTop:10, objectFit: "cover"}}/>
                    </InfoRow>
                </SimpleCell>
            </Group>
            <Group>
                <SimpleCell multiline>
                    <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_NICKNAME)}>
                        {loading ? <Div className={'profile_place_holder'}/>
                            : participant.nickname}
                    </InfoRow>
                </SimpleCell>

                {loading || VKParticipant.city && VKParticipant.city.title ?
                    <SimpleCell>
                        <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_CITY)}>
                            {loading ? <Div className={'profile_place_holder'}/> : VKParticipant.city.title}
                        </InfoRow>
                    </SimpleCell> : null
                }

                {loading || VKParticipant.bdate && VKParticipant.bdate.length ?
                    <SimpleCell>
                        <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_DATE_OF_BIRTH)}>
                            {loading ? <Div className={'profile_place_holder'}/> : VKParticipant.bdate}
                        </InfoRow>
                    </SimpleCell> : null
                }

                <SimpleCell>
                    <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_GAMES)}>
                        <Textarea readOnly
                            value = {participant.games}/>
                    </InfoRow>
                </SimpleCell>
            </Group>

            <SimpleCell style={{position : "relative", zIndex : 0, marginBottom : 30}}>
                <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_VK_LINK)}>
                    {loading ? <Div className={'profile_place_holder'} /> :
                        <Link href={"https://vk.com/id" + VKParticipant.id}>
                            {VKParticipant.first_name} {VKParticipant.last_name}</Link>}
                </InfoRow>
            </SimpleCell>
        </Group>
    </Panel>
}

export default ParticipantProfile