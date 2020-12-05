import React, {useEffect, useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {FormLayout, Input, SimpleCell, Textarea} from "@vkontakte/vkui";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import defaultAvatar from "../img/120x120_default_аvatar.png"
import Data from "../Model/Data";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import ActionSheet from "@vkontakte/vkui/dist/components/ActionSheet/ActionSheet";
import ActionSheetItem from "@vkontakte/vkui/dist/components/ActionSheetItem/ActionSheetItem";
import Icon28CameraOutline from "@vkontakte/icons/dist/28/camera_outline";
import Icon28Profile from "@vkontakte/icons/dist/28/profile";
import View from "@vkontakte/vkui/dist/components/View/View";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import {Icon12Market} from "@vkontakte/icons";
import Icon28MessageOutline from "@vkontakte/icons/dist/28/message_outline";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Constants from "../Model/Constants";
import Alert from "@vkontakte/vkui/dist/components/Alert/Alert";
import Headline from "@vkontakte/vkui/dist/components/Typography/Headline/Headline";

const Profile = ({fetchedUser}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [popOut, setPopOut] = useState(null)

    const [tempNickname, setTempNickname] = useState()
    const [needNewNickname, setNeedNewNickname] = useState(false)

    const [gamesDescription, setGamesDescription] = useState()
    const [needNewGamesDescription, setNeedNewGamesDescription] = useState(false)

    useEffect(() => {
        if (!user) {
            const t = Data.getUser(fetchedUser);
            setUser(t)
            setLoading(false)
            setGamesDescription(t.games)
        }
        if (needNewNickname || needNewGamesDescription) {
            saveData()
        }
    }, [needNewNickname, needNewGamesDescription])

    const saveData = () => {
        if (needNewNickname) {
            if (user && tempNickname && tempNickname.length) {
                let t = tempNickname
                    .slice(0, Math.min(tempNickname.length, Constants.MAX_NICKNAME_LENGTH))
                    .trim();
                if (t && t.length) {
                    user.nickname = t
                    // отправляем на сервер
                    console.log("save nick " + t)
                }
            }
            setTempNickname(null)
            setNeedNewNickname(false)
        }
        if (needNewGamesDescription) {
            user.games = gamesDescription
            //отправляем на сервер
            setNeedNewGamesDescription(false)
            console.log("save games" + gamesDescription)
        }
    }

    const popout = () => <Alert
            actions={[{
                title: 'Отмена',
                mode: 'cancel',
                action: () => {
                    setTempNickname(null)
                    setPopOut(null)
                }
            }, {
                title: 'Сохранить',
                action: () => {
                    setNeedNewNickname(true)
                    setPopOut(null)
                },
            }]}
            onClose={() => {
                setTempNickname(null)
                setPopOut(null)
            }}
            style={{padding : 0}}>
            <Headline weight="semibold" style={{ marginBottom: 16 }}>Введите новый никнейм</Headline>
            <FormLayoutGroup>
                <Input type={"text"} defaultValue={user.nickname} value={tempNickname}
                       onChange={(e) => setTempNickname(e.target.value)}
                />
            </FormLayoutGroup>
        </Alert>

    return (<View popout={popOut}><Group >
        <Header mode="secondary">Информация о пользователе</Header>

        <Group>
            <SimpleCell>
                <InfoRow header="Аватар">
                    <Avatar size={84} src={loading ? defaultAvatar : user.avatarURL}
                            style={{marginTop:10}}
                            onClick={() => {}}/>
                </InfoRow>
            </SimpleCell>
        </Group>
        <Group>
            <SimpleCell multiline>
                <InfoRow header="Никнейм" onClick={() => setPopOut(popout)}>
                    {loading ? <Div className={'profile_place_holder'}/>
                        : user.nickname}
                </InfoRow>
            </SimpleCell>

            {loading || fetchedUser.city && fetchedUser.city.title ?
                <SimpleCell>
                    <InfoRow header="Город">
                        {loading ? <Div className={'profile_place_holder'}/> : fetchedUser.city.title}
                    </InfoRow>
                </SimpleCell> : null
            }

            {loading || fetchedUser.bdate && fetchedUser.bdate.length ?
                <SimpleCell>
                    <InfoRow header="Дата рождения">
                        {loading ? <Div className={'profile_place_holder'}/> : fetchedUser.bdate}
                    </InfoRow>
                </SimpleCell> : null
            }

            <SimpleCell>
                <InfoRow header="Игры">
                    <Textarea
                        value = {user ? user.games : ""}
                        onChange={(e) => {
                            user.games = e.target.value
                            setGamesDescription(e.target.value)
                        }}
                        onBlur={() => setNeedNewGamesDescription(true)}/>
                </InfoRow>
            </SimpleCell>
        </Group>

        <SimpleCell style={{marginBottom : 50}}>
            <InfoRow header="Ссылка ВКонтакте">
                {loading ? <Div className={'profile_place_holder'} /> :
                <Link href={"https://vk.com/id" + user.id}>{fetchedUser.first_name} {fetchedUser.last_name}</Link>}
            </InfoRow>
        </SimpleCell>
    </Group></View>)
}

export default Profile;