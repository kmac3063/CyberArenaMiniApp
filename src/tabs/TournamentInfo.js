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
            <Header mode="secondary">Информация о турнире</Header>
            <SimpleCell multiline>
                <InfoRow header="Описание">
                    {tournament.description}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header="Максимальное количество участников">
                    {tournament.maxCommand}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header="Дата начала">
                    {tournament.dateBegin}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header="Дата окончания">
                    {tournament.dateEnd}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header="Правила">
                    {tournament.rule}
                </InfoRow>
            </SimpleCell>

            <SimpleCell multiline>
                <InfoRow header="Организатор">
                    {/*TO-DO Сделать запрос и узнать организатора*/}
                    Александр Шпыра
                </InfoRow>
            </SimpleCell>
        </Group>
        {
            // status === Constants.TournamentStatus.NOT_PARTICIPANT &&
            <Div>
                <Button size="xl" mode="commerce">Принять участие</Button>
            </Div>}
        {
            // status === Constants.TournamentStatus.PARTICIPANT &&
            <Div>
                <Button size="xl" mode="destructive">Отказаться от участия</Button>
            </Div>}
        {
            // status === Constants.TournamentStatus.CREATOR &&
            <Div>
                <Button size="xl" mode="secondary" before={<Icon24WriteOutline/>}>Изменить</Button>
            </Div>}
    </Group>;
}

export default TournamentInfo