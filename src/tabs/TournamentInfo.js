import React, {useEffect, useState} from 'react'
import {Button, Group, Spinner, View} from "@vkontakte/vkui";
import ImageCard from "../Componentns/ImageCard";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Constants from "../Model/Constants";
import Icon24WriteOutline from '@vkontakte/icons/dist/24/write_outline';
import StrManager from "../Model/StrManager";
import DeclinePartition from "../alerts/DeclinePartition";
import CreateTournament from "../modals/CreateTournament";
import ModalRoot from "@vkontakte/vkui/dist/components/ModalRoot/ModalRoot";
import EditTournament from "../modals/EditTournament";
import Data from "../Model/Data";
import Helper from "../Model/Helper";

const TournamentInfo = ({VKUser, gameUser, go, tournament, setPopout}) => {
    const [loading, setLoading] = useState(true)
    const [buttonLoading, setButtonLoading] = useState(true)

    const [activeModal, setActiveModal] = useState(null)
    const [status, setStatus] = useState()

    const getStatus = () => {
        // TO-DO установить статус в зависимости от турнира
        return Constants.UserStatus.CREATOR

        if (tournament.creatorId === gameUser.id)
            return Constants.UserStatus.CREATOR
        else if (/*tournament.participants.has(gameUser)*/1) {
            return Constants.UserStatus.PARTICIPANT
        } else {
            return Constants.UserStatus.NOT_PARTICIPANT
        }
    }


    useEffect(() => {
        setLoading(false)
        setStatus(getStatus())
        setButtonLoading(false)
    }, [])

    const takePartButtonClicked = () => {
        setButtonLoading(true)
        // TODO Отправляем на сервер то, что мы теперь участник

        // Как только дождались
        setTimeout(() => {
            setStatus(Constants.UserStatus.PARTICIPANT)
            setButtonLoading(false)
        }, 500)

    }

    const declineButtonClicked = () => {
        setButtonLoading(true)
        // TODO Отправляем на сервер то, что мы больше не участник

        // Когда дождались
        setTimeout(() => {
            setStatus(Constants.UserStatus.NOT_PARTICIPANT)
            setButtonLoading(false)
        }, 500)

    }

    const editButtonClicked = () => {
        setActiveModal(Constants.Modals.EDIT_TOURNAMENT)
        // setButtonLoading(true)
    }

    const saveEditedTournament = (editedTournament) => {
        Data.updateTournament(editedTournament)
    }

    const deleteTournament = () => {
        Data.deleteTournament(tournament)
    }

    return loading ? <Spinner size={"large"} style={{position:"relative", marginTop:"50%"}}/> :
    <Group popout={<Spinner/>} style={{position : "relative", zIndex: 0}}>
        <ModalRoot activeModal={activeModal}>
            <EditTournament id={Constants.Modals.EDIT_TOURNAMENT}
                            tournament={tournament}
                            saveTournament={saveEditedTournament}
                            deleteTournament={deleteTournament}
                            setPopout={setPopout}
                            onClose={() => setActiveModal(null)}/>
        </ModalRoot>

        <Div style={{
        marginTop: 0,
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "16px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        objectFit: "cover"}}>
        <ImageCard url={tournament.imgURL}
                   height={"150px"}
                   width={"100%"}/>
        </Div>

        <Separator/>
        <Group style={{position : "relative", zIndex: 0}}>
            <Header mode="secondary">{StrManager.get(StrManager.StrEnum.TOURNAMENT_INFO_HEADER)}</Header>
            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_NAME)}>
                    {tournament.name}
                </InfoRow>
            </SimpleCell>
            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_DESCRIPTION)}>
                    {tournament.description}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_MAX_PARTICIPANTS)}>
                    {tournament.maxCommand}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_START_DATE)}>
                    {Helper.getNormalDateView(tournament.dateBegin)}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_END_DATE)}>
                    {Helper.getNormalDateView(tournament.dateEnd)}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_RULES)}>
                    {tournament.rules}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_ORGANIZER)}>
                    {/*TO-DO Сделать запрос и узнать организатора*/}
                    Александр Шпыра
                </InfoRow>
            </SimpleCell>
        </Group>
        <Div style={{marginBottom : 10}}>
            {buttonLoading ? <Spinner size={"large"}/> :
            <React.Fragment>
            {status === Constants.UserStatus.NOT_PARTICIPANT &&
            <Button size="xl" mode="commerce"
                    onClick={takePartButtonClicked}>
                {StrManager.get(StrManager.StrEnum.TOURNAMENT_TAKE_PART)}</Button>}

            {status === Constants.UserStatus.PARTICIPANT &&
            <Button size="xl" mode="destructive"
                    onClick={() => setPopout(
                        <DeclinePartition setPopout={setPopout}
                                          declineButtonClicked={declineButtonClicked}/>)}>
                {StrManager.get(StrManager.StrEnum.TOURNAMENT_DECLINE)}</Button>}

            {status === Constants.UserStatus.CREATOR &&
            <Button size="xl" mode="secondary" before={<Icon24WriteOutline/>}
                    onClick={editButtonClicked}>
                {StrManager.get(StrManager.StrEnum.TOURNAMENT_EDIT)}</Button>}
            </React.Fragment>}
        </Div>
    </Group>
}

export default TournamentInfo