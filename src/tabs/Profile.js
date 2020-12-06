import React, {useEffect, useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {Input, ModalRoot, SimpleCell, Textarea} from "@vkontakte/vkui";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import defaultAvatar from "../img/120x120_default_аvatar.png"
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import View from "@vkontakte/vkui/dist/components/View/View";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Constants from "../Model/Constants";
import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import Headline from "@vkontakte/vkui/dist/components/Typography/Headline/Headline";
import ChangeAvatar from "../modals/ChangeAvatar";
import ChangeNicknameAlert from "../alerts/ChangeNicknameAlert";
import StrManager from "../Model/StrManager";

const Profile = ({VKUser, gameUser}) => {
    const [loading, setLoading] = useState(true)

    const [popout, setPopout] = useState(null)
    const [activeModal, setActiveModal] = useState(null)

    const [gamesDescription, setGamesDescription] = useState(gameUser.games)
    const [needNewGamesDescription, setNeedNewGamesDescription] = useState(false)

    // const [newAvatar, setNewAvatar] = useState(null)

    useEffect(() => {
        setLoading(false)
        if (needNewGamesDescription) {
            saveData()
        }
    }, [needNewGamesDescription])

    const saveData = () => {
        if (needNewGamesDescription) {
            gameUser.games = gamesDescription
            // TO-DO отправляем на сервер
            setNeedNewGamesDescription(false)
        }
    }


    const setNewAvatar = (newAvatarURL) => {
        gameUser.avatarURL = newAvatarURL
        // TO-DO отправить на сервер
    }

    const setNewNickname = (newNickname) => {
        if (!newNickname) return;
        let correctNickname = newNickname
                    .slice(0, Math.min(newNickname.length, Constants.MAX_NICKNAME_LENGTH))
                    .trim();
        if (correctNickname && correctNickname.length)
            gameUser.nickname = correctNickname
        // TO-DO отправить на сервер
    }

    return (<View
            popout={popout ? <ChangeNicknameAlert gameUser={gameUser}
                                  saveNickname={setNewNickname}
                                  setPopout={setPopout}/> : null}>
        <Group>
        <ModalRoot activeModal={activeModal}>
            <ChangeAvatar id={Constants.Modals.PROFILE_CHANGE_AVATAR}
                        changeAvatar={setNewAvatar}
                        onClose={() => setActiveModal(null)}/>
        </ModalRoot>
        <Header mode="secondary">Информация о пользователе</Header>

        <Group style={{position : "relative", zIndex : 0}}>
            <SimpleCell onClick={() => setActiveModal(Constants.Modals.PROFILE_CHANGE_AVATAR)}>
                <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_AVATAR)}>
                    <Avatar size={84} src={loading ? defaultAvatar : gameUser.avatarURL}
                            style={{marginTop:10, objectFit: "cover"}}/>
                </InfoRow>
            </SimpleCell>
        </Group>
        <Group style={{position : "relative", zIndex : 0}}>
            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_NICKNAME)} onClick={() => {
                    setPopout(true)
                }}>
                    {loading ? <Div className={'profile_place_holder'}/>
                        : gameUser.nickname}
                </InfoRow>
            </SimpleCell>

            {loading || VKUser.city && VKUser.city.title ?
                <SimpleCell>
                    <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_CITY)}>
                        {loading ? <Div className={'profile_place_holder'}/> : VKUser.city.title}
                    </InfoRow>
                </SimpleCell> : null
            }

            {loading || VKUser.bdate && VKUser.bdate.length ?
                <SimpleCell>
                    <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_DATE_OF_BIRTH)}>
                        {loading ? <Div className={'profile_place_holder'}/> : VKUser.bdate}
                    </InfoRow>
                </SimpleCell> : null
            }

            <SimpleCell>
                <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_GAMES)}>
                    <Textarea
                        value = {gameUser.games}
                        onChange={(e) => {
                            gameUser.games = e.target.value
                            setGamesDescription(e.target.value)
                        }}
                        onBlur={() => setNeedNewGamesDescription(true)}/>
                </InfoRow>
            </SimpleCell>
        </Group>

        <SimpleCell style={{position : "relative", zIndex : 0, marginBottom : 30}}>
            <InfoRow header={StrManager.get(StrManager.StrEnum.PROFILE_VK_LINK)}>
                {loading ? <Div className={'profile_place_holder'} /> :
                <Link href={"https://vk.com/id" + VKUser.id}>{VKUser.first_name} {VKUser.last_name}</Link>}
            </InfoRow>
        </SimpleCell>
    </Group>
    </View>)
}

export default Profile;