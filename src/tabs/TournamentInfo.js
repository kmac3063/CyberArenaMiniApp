import React from 'react'
import {Button, Group} from "@vkontakte/vkui";
import ImageCard from "../Componentns/ImageCard";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Constants from "../Model/Constants";
import Icon24WriteOutline from '@vkontakte/icons/dist/24/write_outline';
import StrManager from "../Model/StrManager";

const TournamentInfo = ({VKUser, gameUser, go, tournament}) => {
    const getStatus = () => {
        // TO-DO установить статус в зависимости от турнира
        return Constants.TournamentStatus.NOT_PARTICIPANT
        // Constants.TournamentStatus.CREATOR
        // Constants.TournamentStatus.PARTICIPANT
        // Constants.TournamentStatus.NOT_PARTICIPANT
    }
    const STATUS = getStatus()


    return <Group>
        <Div style={{
            marginTop: 0,
            overflowX: "auto",
            whiteSpace: "nowrap",
            padding: "16px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "cover"}}>
            <ImageCard url={tournament.imgUrl}
                       height={"200px"}
                       width={"100%"}/>
        </Div>
        <Separator/>
        <Group>
            <Header mode="secondary">{StrManager.get(StrManager.StrEnum.TOURNAMENT_INFO_HEADER)}</Header>
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
                    {tournament.dateBegin}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_END_DATE)}>
                    {tournament.dateEnd}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_RULES)}>
                    {tournament.rule}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header={StrManager.get(StrManager.StrEnum.TOURNAMENT_ORGANIZER)}>
                    {/*TO-DO Сделать запрос и узнать организатора*/}
                    Александр Шпыра
                </InfoRow>
            </SimpleCell>
        </Group>
        {
            // status === Constants.TournamentStatus.NOT_PARTICIPANT &&
            <Div>
                <Button size="xl" mode="commerce">{StrManager.get(StrManager.StrEnum.TOURNAMENT_TAKE_PART)}</Button>
            </Div>}
        {
            // status === Constants.TournamentStatus.PARTICIPANT &&
            <Div>
                <Button size="xl" mode="destructive">{StrManager.get(StrManager.StrEnum.TOURNAMENT_DECLINE)}</Button>
            </Div>}
        {
            // status === Constants.TournamentStatus.CREATOR &&
            <Div>
                <Button size="xl" mode="secondary" before={<Icon24WriteOutline/>}>{StrManager.get(StrManager.StrEnum.TOURNAMENT_EDIT)}</Button>
            </Div>}
    </Group>;
}

export default TournamentInfo