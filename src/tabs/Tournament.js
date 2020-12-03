import React, {useEffect, useState} from 'react'
import {CardScroll, Group, Header, ModalPage, Search, Separator, Spinner} from "@vkontakte/vkui";
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Icon24VoiceOutline from '@vkontakte/icons/dist/24/voice_outline';
import Constants from "../Model/Constants";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import Data from "../Model/Data";
import CardImage from "../Componentns/CardImage";
import TournamentBanner from "../banners/TournamentBanner";
import CreateTournament from "../modals/CreateTournament";
import ModalRoot from "@vkontakte/vkui/dist/components/ModalRoot/ModalRoot";

const Tournament = ({fetchedUser, go, tournamentSelect}) => {
    const [myTournaments, setMyTournaments] = useState(Data.getLoadTournaments(4))
    const [myTournamentsLoading, setMyTournamentsLoading] = useState(true)
    const [loading, setLoading] = useState(true)
    const [activeModal, setActiveModal] = useState(null)

    useEffect(() => {
        //setTimeout(() => setLoading(false), 3000)
        setLoading(false)
        Data.getTournaments(1)//fetchedUser.id)
            .then(tournaments => {
                tournaments = tournaments.map((t) => {
                    t.imgUrl = "https://sun9-11.userapi.com/impg/56aSuUx41cqW9S9VgbIG-dHVrNni1Xb9hdvfig/5eQATCO-X7U.jpg?size=1080x1080&quality=96&proxy=1&sign=58272f3f74d4d6af0b14a0046629b52f"
                    return t;
                })
                setTimeout(() => {setMyTournaments(tournaments)
                }, 1000)
                //setMyTournaments(tournaments)
                setMyTournamentsLoading(false)
            })
    }, [])

    const closeModal = () => {
        setActiveModal(null)
    }

    const outModal = (props) => {
        closeModal();
    }

    const createTournament = (props) => {

        closeModal()
    }

    return loading ? <Spinner size="medium" style={{marginTop : "50%"}}/> :
    <React.Fragment>
        <ModalRoot activeModal={activeModal}>
            <CreateTournament id={Constants.Modals.TOURNAMENT_CREATE_TOURNAMENT}
                out={outModal}
                onClose={closeModal}
                create={createTournament}
                />

        </ModalRoot>
        <Search icon={<Icon24VoiceOutline/>}/>
        <Separator/>

        <Group separator={"hide"} style={{height: "9rem"}}>
            <Header aside={<Icon24Add style={{color : Constants.Colors.Dark.CONTEXT_BUTTON}}
                                      onClick={() => {setMyTournaments([])}}/>}>
                <Title level="3" weight="regular"> Мои турниры</Title>
            </Header>
            {!myTournaments.length? <Group separator={"hide"} style={{position : "relative", zIndex : 0, top: "-12px"}}>
                    <TournamentBanner
                        style={{height : 200}}
                        buttonPressed={() => setActiveModal(Constants.Modals.TOURNAMENT_CREATE_TOURNAMENT)}/> </Group>:
                <CardScroll style={{height : "6rem", marginBottom : 12}}>
                    {myTournaments.map((tournament) => {
                        return <Card key={tournament.id}
                                     style={{height : "6.475rem", width : "10rem"}}
                                     onClick={(e)=>{
                                         if (!myTournamentsLoading) {
                                             tournamentSelect(tournament.id)
                                             go(e)}
                                     }}
                                     data-to = {Constants.Panels.TOURNAMENT_INFO}>
                            <CardImage url={tournament.imgUrl} height={"6.3rem"}/>
                        </Card>
                    })

                    }
                </CardScroll>
            }
        </Group>


        <Header>
            <Title level="3" weight="regular">Рекомендуемые турниры</Title>
        </Header>

        <Group>
        </Group>
    </React.Fragment>
}

export default Tournament