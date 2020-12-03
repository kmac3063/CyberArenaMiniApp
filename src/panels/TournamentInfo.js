import React from "react";
import {Group} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import StrManager from "../Model/StrManager";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import Constants from "../Model/Constants";

const TournamentInfo = ({id, tournamentId, go}) => {
    console.log("TournamentInfo id = " + tournamentId)
    return <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to={Constants.Panels.HOME}/>}>
            Информация о турнире
        </PanelHeader>
    </Panel>
}

export default TournamentInfo