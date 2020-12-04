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
import Gallery from "@vkontakte/vkui/dist/components/Gallery/Gallery";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Tournament = ({fetchedUser, go, tournamentSelect}) => {
    const [loading, setLoading] = useState(false)

    const [myTournaments, setMyTournaments] = useState(Data.getLoadTournaments(4))
    const [myTournamentsLoading, setMyTournamentsLoading] = useState(true)

    const [participateTournaments, setParticipateTournaments] = useState(Data.getLoadTournaments(4))
    const [participateTournamentsLoading, setParticipateTournamentsLoading] = useState(true)

    const [recommendedTournaments, setRecommendedTournaments] = useState(Data.getLoadTournaments(4))
    const [recommendedTournamentsLoading, setRecommendedTournamentsLoading] = useState(true)

    const [highlyRecommendedTournaments, setHighlyRecommendedTournaments] = useState(Data.getLoadTournaments(4))
    const [highlyRecommendedTournamentsLoading, setHighlyRecommendedTournamentsLoading] = useState(true)

    const [activeModal, setActiveModal] = useState(null)

    useEffect(() => {
        setLoading(false)
    }, [])

    const loadAll = () => {
        if (myTournamentsLoading) {
            Data.getMyTournaments(fetchedUser)
                .then(tournaments => {
                    setTimeout(() => {
                        setMyTournaments(tournaments)
                    }, 0)
                    setMyTournamentsLoading(false)
                })
        }

        if (participateTournamentsLoading) {
            Data.getParticipateTournaments(fetchedUser)
                .then(tournaments => {
                    setTimeout(() => {
                        setParticipateTournaments(tournaments)
                    }, 0)
                    setParticipateTournamentsLoading(false)
                })
        }

        if (recommendedTournamentsLoading) {
            Data.getRecommendedTournaments(fetchedUser)
                .then(tournaments => {
                    setTimeout(() => {
                        setRecommendedTournaments(tournaments)
                    }, 0)
                    setRecommendedTournamentsLoading(false)
                })
        }

        if (highlyRecommendedTournamentsLoading) {
            Data.getHighlyRecommendedTournaments(fetchedUser)
                .then(tournaments => {
                    setTimeout(() => {
                        setHighlyRecommendedTournaments(tournaments)
                    }, 0)
                    setHighlyRecommendedTournamentsLoading(false)
                })
        }
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    const outModal = (props) => {
        closeModal();
    }

    const createTournament = (props) => {

        closeModal()
    }

    return <React.Fragment>
        <ModalRoot activeModal={activeModal}>
            <CreateTournament id={Constants.Modals.TOURNAMENT_CREATE_TOURNAMENT}
                out={outModal}
                onClose={closeModal}
                create={createTournament}/>
        </ModalRoot>
        <Search icon={<Icon24VoiceOutline/>}/>
        <Separator/>

        {!loading && fetchedUser ? loadAll() : null}

        <Group separator={"hide"} style={{height: "11rem"}}
            header={<Header aside={<Icon24Add style={{color : Constants.Colors.Dark.CONTEXT_BUTTON}}
                                              onClick={() => {setMyTournaments([])}}/>}>
                <Title level="3" weight="regular"> Мои турниры</Title>
            </Header>}>

            {(myTournamentsLoading || myTournaments.length) ?
                <CardScroll style={{height : "6rem", marginBottom : 12}}>
                    {myTournaments.map((tournament) => {
                        return <Card key={tournament.id}
                                     style={{height : "7.475rem", width : "10rem"}}
                                     onClick={(e)=>{
                                         if (!myTournamentsLoading) {
                                             tournamentSelect(tournament.id)
                                             go(e)}
                                     }}
                                     data-to = {Constants.Panels.TOURNAMENT_INFO}>
                            <CardImage url={tournament.imgUrl} height={"7rem"}/>
                        </Card>
                    })
                    }
                </CardScroll> :
                <Group separator={"hide"} style={{position : "relative", zIndex : 0, top: "-12px"}}>
                    <TournamentBanner
                        buttonPressed={() => setActiveModal(Constants.Modals.TOURNAMENT_CREATE_TOURNAMENT)}/>
                </Group>
            }
        </Group>

        {participateTournamentsLoading || participateTournaments.length ?
        <Group separator={'hide'}
               style={{position : "relative", zIndex : 0}}
               header={<Header>
            <Title level="3" weight="regular">Турниры, в которых я участвую</Title>
        </Header>}>

            <CardScroll style={{height : "6rem", marginBottom : 12}}>
                {participateTournaments.map((tournament) => {
                    return <Card key={tournament.id}
                                 style={{height : "5.18rem", width : "7.2rem"}}
                                 onClick={(e)=>{
                                     if (!participateTournamentsLoading) {
                                         tournamentSelect(tournament.id)
                                         go(e)}
                                 }}
                                 data-to = {Constants.Panels.TOURNAMENT_INFO}>
                        <CardImage url={tournament.imgUrl} height={"4.8rem"}/>
                    </Card>
                })
                }
            </CardScroll>

        </Group> : null}

        <Group
            separator={'hide'}
            header={<Header>
                <Title level="3" weight="regular">Рекомендуемые турниры</Title>
                </Header>}
        style={{marginBottom: 50, position : "relative", zIndex : 0}}>
            <Gallery
                slideWidth="90%"
                align="center"
                style={{ height: 150 }}
                bullets={'dark'}
            >
                {highlyRecommendedTournaments.map((t) => {
                    return <Div style={{backgroundImage : `url(${t.imgUrl})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"}}>

                    </Div>})
                }
            </Gallery>
        </Group>
    </React.Fragment>
}

export default Tournament