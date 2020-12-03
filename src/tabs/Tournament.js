import React, {useEffect, useState} from 'react'
import {Avatar, CardScroll, Cell, Group, Header, Headline, Search, Separator, Spinner} from "@vkontakte/vkui";
import Icon24Add from '@vkontakte/icons/dist/24/add';
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Icon24VoiceOutline from '@vkontakte/icons/dist/24/voice_outline';
import Constants from "../Model/Constants";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import Data from "../Model/Data";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import CardImage from "../Componentns/CardImage";
import Gamepad from "../img/gamepad.png"

const Tournament = ({fetchedUser}) => {
    const [myTournaments, setMyTournaments] = useState([])
    const [myTournamentsLoad, setMyTournamentsLoading] = useState(true)


    useEffect(() => {
        Data.getTournaments(1)//fetchedUser.id)
            .then(tournaments => {
                //setMyTournaments(tournaments)
                setMyTournamentsLoading(false)
            })
    }, [])

    return <React.Fragment>
        <Search icon={<Icon24VoiceOutline/>}/>
        <Separator/>
        <Header aside={<Icon24Add style={{color : Constants.Colors.Dark.CONTEXT_BUTTON}}/>}>
            <Title level="3" weight="regular"> Мои турниры</Title>
        </Header>
        {myTournamentsLoad ? <Spinner size={"medium"}/> :
        myTournaments.length ?
        <CardScroll style={{height : "6rem"}}>
            {myTournaments.map((tournament) => {
                return <Card key={tournament.id} style={{height : "6rem", width : "10rem"}}>
                    <CardImage url={"https://sun5-3.userapi.com/impg/9rU0yZN00DBOszZFvCy22D5XzQ6QLThUO9w03w/W3lY-oqSmfo.jpg?size=1062x900&quality=96&proxy=1&sign=9eb0b16cb02eb98a7fa175103d4d17d5"}
                               height={"5.6rem"} />
                </Card>
            })}
        </CardScroll> :
            <Banner
                mode="image"
                header="Вы ещё не создали ни одного турнира"
                subheader="Разблокировано 9 из 36"
                background={
                    <div
                        style={{
                            backgroundImage:  'linear-gradient(135deg, #4AB34C 0%, #34F038 100%)',
                            backgroundPosition: 'right bottom',
                            backgroundSize: "100%",
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${Gamepad})`,
                                backgroundPosition: 'right bottom',
                                backgroundSize: "50%",
                                backgroundRepeat: 'no-repeat',
                                height: "100%",
                                opacity: 0.25,
                            }}
                        />
                    </div>
                }
                actions={<Button mode="overlay_primary">Подробнее</Button>}
            />
        }
        <Group>

            Ваши турниры
            123

        </Group>
    </React.Fragment>
}

export default Tournament