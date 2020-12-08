import React, {useEffect, useState} from 'react'
import {Group, Header, Search, Separator} from "@vkontakte/vkui";
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Icon24VoiceOutline from '@vkontakte/icons/dist/24/voice_outline';
import Constants from "../Model/Constants";
import Data from "../Model/Data";
import ImageCard from "../Componentns/ImageCard";
import TournamentBanner from "../banners/TournamentBanner";
import CreateTournament from "../modals/CreateTournament";
import ModalRoot from "@vkontakte/vkui/dist/components/ModalRoot/ModalRoot";
import Gallery from "@vkontakte/vkui/dist/components/Gallery/Gallery";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Caption from "@vkontakte/vkui/dist/components/Typography/Caption/Caption";
import "../styles.css"
import Coliseum from "../img/coliseum.png";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import StrManager from "../Model/StrManager";
import Helper from "../Model/Helper";
import Debug from "../Debug/Debug";

const Tournament = ({VKUser, gameUser, go, selectTournament}) => {
    const [loading, setLoading] = useState(false)

    const [myTournaments, setMyTournaments]
        = useState(Data.getLoadTournaments(4, Constants.TournamentsPreviewSize.MEDIUM))
    const [myTournamentsLoading, setMyTournamentsLoading] = useState(true)

    const [participateTournaments, setParticipateTournaments]
        = useState(Data.getLoadTournaments(4, Constants.TournamentsPreviewSize.MEDIUM))
    const [participateTournamentsLoading, setParticipateTournamentsLoading] = useState(true)

    const [recommendedTournaments, setRecommendedTournaments]
        = useState(Data.getLoadTournaments(8, Constants.TournamentsPreviewSize.SMALL_QUAD))
    const [recommendedTournamentsLoading, setRecommendedTournamentsLoading] = useState(true)

    const [highlyRecommendedTournaments, setHighlyRecommendedTournaments]
        = useState(Data.getLoadTournaments(4, Constants.TournamentsPreviewSize.LARGE))
    const [highlyRecommendedTournamentsLoading, setHighlyRecommendedTournamentsLoading] = useState(true)

    const [activeModal, setActiveModal] = useState(null)

    const [searchValue, setSearchValue] = useState()
    const [searchOnFocus, setSearchOnFocus] = useState(false)
    const [searchValueLoading, setSearchValueLoading] = useState(false)
    const [searchFilterTournaments, setSearchFilterTournaments] = useState()

    useEffect(() => {
        loadAll()
        //setLoading(false)
    }, [])

    const loadAll = async () => {
        // делаем все турниры загрузкой
        // делаем запрос на серв, ждем
        // когда все туринры приходят, раскидываем
        // одним проходом

        setMyTournamentsLoading(true)
        setParticipateTournamentsLoading(true)
        setHighlyRecommendedTournamentsLoading(true)
        setRecommendedTournamentsLoading(true)
        await Data.getAllTournaments()
            .then((tournaments) => {
                if (Debug.DEBUG) {
                    // console.log("Tournaments:")
                    // console.log(tournaments)
                    // console.log(" ")
                }
                let my = []
                let rec = []
                let hRec = []
                let part = []

                for (let i = 0; i < tournaments.length; i++) {
                    if (tournaments[i].creatorId === gameUser.id) {
                        // console.log("Создатель в:")
                        // console.log(tournaments[i])
                        // console.log("")
                        my.push(tournaments[i])
                    }
                    if (tournaments[i].participants.find(p => p.id === gameUser.id)) {
                        // console.log("Участник в :")
                        // console.log(tournaments[i])
                        // console.log("")
                        part.push(tournaments[i])
                    }
                }
                rec = tournaments
                hRec = tournaments.slice(0, Math.min(Constants.NUMBER_OF_HIGHLY_REC_TOURNAMENT, tournaments.length))

                setMyTournaments(my)
                setRecommendedTournaments(rec)
                setHighlyRecommendedTournaments(hRec)
                setParticipateTournaments(part)
                setLoading(false)
                setMyTournamentsLoading(false)
                setParticipateTournamentsLoading(false)
                setHighlyRecommendedTournamentsLoading(false)
                setRecommendedTournamentsLoading(false)
            })

        //
        // if (myTournamentsLoading) {
        //     Data.getMyTournaments(gameUser)
        //         .then(tournaments => {
        //             setMyTournaments(tournaments)
        //             setMyTournamentsLoading(false)
        //         })
        // }
        //
        // if (participateTournamentsLoading) {
        //     Data.getParticipateTournaments(VKUser)
        //         .then(tournaments => {
        //             setParticipateTournaments(tournaments)
        //             setParticipateTournamentsLoading(false)
        //         })
        // }
        //
        // if (highlyRecommendedTournamentsLoading) {
        //     Data.getHighlyRecommendedTournaments(VKUser)
        //         .then(tournaments => {
        //             setHighlyRecommendedTournaments(tournaments
        //                 .slice(0,
        //                     Math.min(Constants.NUMBER_OF_HIGHLY_REC_TOURNAMENT, tournaments.length)))
        //             setHighlyRecommendedTournamentsLoading(false)
        //         })
        // }
        //
        // if (recommendedTournamentsLoading) {
        //     Data.getRecommendedTournaments(VKUser)
        //         .then(tournaments => {
        //             setRecommendedTournaments(tournaments)
        //             setRecommendedTournamentsLoading(false)
        //         })
        // }

    }

    const closeModal = () => {
        setActiveModal(null)
    }

    const outModal = (props) => {
        //TO-DO сделать сохранение в кеш, чтобы при открытии окна подгружались значения
        closeModal()
    }

    const createTournament = async (tournament) => {
        console.log("CreateTournament")
        await Data.createTournament(tournament)
        await loadAll()
    }

    // For test
    const hide = () => {
        if (myTournaments.length) {
            setMyTournaments([])
        } else {
            setMyTournamentsLoading(true)
        }

        if (participateTournaments.length) {
            setParticipateTournaments([])
        } else {
            setParticipateTournamentsLoading(true)
        }
    }

    const onSearchChange = (e) => {
        let text = e.target.value
        setSearchValue(text)

        if (!text || text.length === 0) return null
        setSearchValueLoading(true)
        text = text.trim().toLowerCase()
        Data.getAllTournaments()
            .then(tournaments => {
                tournaments = tournaments.filter((t) =>
                    t.name.toLowerCase().includes(text) || t.description.toLowerCase().includes(text))
                    setSearchFilterTournaments(tournaments)
                    setSearchValueLoading(false)
            })

    }

    return <React.Fragment>
        <ModalRoot activeModal={activeModal}>
            <CreateTournament id={Constants.Modals.CREATE_TOURNAMENT}
                out={outModal}
                create={createTournament}
                onClose={closeModal}
                gameUser={gameUser}/>
        </ModalRoot>

        <Search icon={!searchValue || !searchValue.length ? <Icon24VoiceOutline/> : null} value={searchValue}
                onChange={onSearchChange}
                onFocus={()=>{setSearchOnFocus(true)}}
                onBlur={()=>{setSearchOnFocus(false)}}/>
        <Separator/>

        {searchValue && searchValue.length > 0 ?
            <Group separator={'hide'}
                                style={{position : "relative", zIndex : 0}}>
                {searchValueLoading ?
                    Data.getLoadTournaments(3, Constants.TournamentsPreviewSize.SMALL_QUAD).map((tournament) =>{
                        return <SimpleCell key={tournament.id}
                            before={<Avatar mode="app" src={tournament.imgURL} size={72}
                                />}
                            description={
                                <React.Fragment>
                                    <Caption><Div className={'recommend_place_holder_descr'} style={{marginTop : 6}}/></Caption>
                                    <Caption><Div className={'recommend_place_holder_descr'}/></Caption>
                                    <Caption><Div className={'recommend_place_holder_descr'} style={{marginBottom: 0}}/></Caption>
                                </React.Fragment>
                            }><Div className={'recommend_place_holder_name'}/>
                        </SimpleCell>
                    }) :
                    searchFilterTournaments.length ?
                    searchFilterTournaments.map((tournament) =>{
                        return <SimpleCell key={tournament.id}
                                onClick={(e) => {
                                   selectTournament(tournament)
                                   go(e)
                                }}
                                data-to = {Constants.Panels.TOURNAMENT_INFO_HOME}
                                before={<Avatar mode="app" src={tournament.imgURL} size={72}
                                                style={{objectFit : "cover"}}/>}
                                description={
                                <React.Fragment>
                                    <Caption level="2" weight="regular" >
                                        {StrManager.get(StrManager.StrEnum.TOURNAMENTS_GAME_NAME)}
                                        {tournament.gameName}</Caption>
                                    <Caption level="2" weight="regular">
                                        {StrManager.get(StrManager.StrEnum.TOURNAMENTS_GRID_TYPE)}
                                        {tournament.type}</Caption>
                                    <Caption level="2" weight="regular">
                                        {StrManager.get(StrManager.StrEnum.TOURNAMENTS_START_TIME)}
                                        {tournament.dateBegin}</Caption>
                                </React.Fragment>
                            }>{tournament.name}
                        </SimpleCell>
                    }) : <Placeholder
                            icon={<img src={Coliseum} height={"50%"} width={"50%"}/>}
                            header={StrManager.get(StrManager.StrEnum.NOTHING_HAS_FOUND)}
                        />}
            </Group>
        : <React.Fragment>

            {/* Список турниров, созданных пользователем */}
            <Group separator={"hide"} style={{height: 160}}
                header={<Header aside={
                    // For test
                    // <Icon24Add style={{color : Constants.Colors.Dark.CONTEXT_BUTTON}}
                    //           onClick={() => {!participateTournaments.length ?
                    //               setParticipateTournaments(Data.getLoadTournaments(4)):
                    //               setParticipateTournaments([])}}
                    // />
                    // For test
                    // <Button  mode="tertiary" onClick={hide}>Hide</Button>
                    <Icon24Add style={{color : Constants.Colors.Dark.CONTEXT_BUTTON}}
                               onClick={() => setActiveModal(Constants.Modals.CREATE_TOURNAMENT)}
                    />
                }>
                    <Title level="3" weight="regular">{StrManager.get(StrManager.StrEnum.TOURNAMENTS_CREATED_HEADER)}</Title>
                </Header>}>

                {(myTournamentsLoading || myTournaments.length) ?
                    <Group>
                        <Div style={{
                            marginTop: 0,
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            padding: "0 16px"}}>
                            {myTournaments.map((tournament) => {
                                return <span key={tournament.id}
                                            onClick={(e)=>{
                                                if (!myTournamentsLoading) {
                                                    selectTournament(tournament)
                                                    go(e)}
                                            }}
                                            data-to = {Constants.Panels.TOURNAMENT_INFO_HOME}>
                                    <ImageCard url={tournament.imgURL}
                                               height={90}
                                               width={150}/>
                                </span>})}
                        </Div>
                    </Group>
                    :
                    <Group separator={"hide"} style={{position : "relative", zIndex : 0, top: "-12px"}}>
                        <TournamentBanner
                            buttonPressed={() => setActiveModal(Constants.Modals.CREATE_TOURNAMENT)}/>
                    </Group>
                }
            </Group>

            {/* Список турниров, в которых я участвую */}
            {participateTournamentsLoading || participateTournaments.length ?
            <Group separator={'hide'}
                   style={{position : "relative", zIndex : 0}}
                   header={<Header>
                <Title level="3" weight="regular">{StrManager.get(StrManager.StrEnum.TOURNAMENTS_TAKING_PART_HEADER)}</Title>
            </Header>}>
                <Div style={{
                    marginTop: 0,
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    padding: "0 16px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start"
                    }}>
                    {participateTournaments.map((tournament) => {
                        return <span key={tournament.id}
                                     onClick={(e)=>{
                                         if (!participateTournamentsLoading) {
                                             selectTournament(tournament)
                                             go(e)}
                                     }}
                                     data-to = {Constants.Panels.TOURNAMENT_INFO_HOME}>
                                    <ImageCard url={tournament.imgURL}
                                               height={60}
                                               width={90}/>
                                </span>})}

                </Div>

            </Group> : null}

            {/* Список особо рекомендуемых турниров */}
            <Group
                separator={'hide'}
                header={<Header>
                    <Title level="3" weight="regular">{StrManager.get(StrManager.StrEnum.TOURNAMENTS_RECOMMENDED_HEADER)}</Title>
                    </Header>}
            style={{marginBottom: 30, position : "relative", zIndex : 0}}>
                <Gallery
                    slideWidth="90%"
                    align="center"
                    style={{ height: 180 }}
                    bullets={'light'}
                >
                    {highlyRecommendedTournaments.map((tournament) => {
                        return <Div key={tournament.id}
                            onClick={(e)=>{
                                if (!highlyRecommendedTournamentsLoading) {
                                    selectTournament(tournament)
                                    go(e)
                                }
                            }}
                            data-to = {Constants.Panels.TOURNAMENT_INFO_HOME}
                            style={{backgroundImage : `url(${tournament.imgURL})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"}}>

                        </Div>})
                    }
                </Gallery>
            </Group>

            {/*Бесконечный список турниров*/}
            <Group separator={'hide'}
                   style={{position : "relative", zIndex : 0}}>
                    {recommendedTournaments.map((tournament) => {
                        return (recommendedTournamentsLoading ? <SimpleCell
                            key={tournament.id}
                            before={<Avatar mode="app" src={tournament.imgURL} size={72}/>}
                            description={
                                <React.Fragment>
                                    <Caption><Div className={'recommend_place_holder_descr'} style={{marginTop : 6}}/></Caption>
                                    <Caption><Div className={'recommend_place_holder_descr'}/></Caption>
                                    <Caption><Div className={'recommend_place_holder_descr'} style={{marginBottom: 0}}/></Caption>
                                </React.Fragment>
                            }><Div className={'recommend_place_holder_name'}/></SimpleCell>
                            :
                            <SimpleCell
                                key={tournament.id}
                                onClick={(e)=>{
                                    selectTournament(tournament)
                                    go(e)
                                }}
                                data-to = {Constants.Panels.TOURNAMENT_INFO_HOME}
                                before={<Avatar mode="app" src={tournament.imgURL} style={{objectFit : "cover"}} size={72}/>}
                                description={
                                <React.Fragment>
                                    <Caption level="2" weight="regular">
            {StrManager.get(StrManager.StrEnum.TOURNAMENTS_GAME_NAME)}: {tournament.gameName}
                                    </Caption>
                    <Caption level="2" weight="regular">
            {StrManager.get(StrManager.StrEnum.TOURNAMENTS_GRID_TYPE)}: {StrManager.get(tournament.gridType)}
                    </Caption>
                    <Caption level="2" weight="regular">
            {StrManager.get(StrManager.StrEnum.TOURNAMENTS_START_TIME)}: {Helper.getNormalDateView(tournament.dateBegin)}
                    </Caption>
                                </React.Fragment>
                                }>{tournament.name}
                            </SimpleCell>)
                    })}
            </Group>
        </React.Fragment>}
    </React.Fragment>
}

export default Tournament