import React, {useState} from "react";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import Constants from "../Model/Constants";
import {Spinner, Tabs, TabsItem} from "@vkontakte/vkui";
import TournamentInfo from "../tabs/TournamentInfo";
import Grid from "../tabs/Grid";
import Participants from "../tabs/Participants";
import StrManager from "../Model/StrManager";

const TournamentInfoHome = ({id, tournament, go, VKUser,
                            gameUser, selectParticipant, setPopout,
                            startTab}) => {
    const [activeTab, setActiveTab] = useState(startTab ? startTab : Constants.Tabs.TOURNAMENT_INFO)

    const showTab = () => {
        switch (activeTab) {
            case Constants.Tabs.TOURNAMENT_INFO:
                return <TournamentInfo
                    VKUser={VKUser}
                    gameUser={gameUser}
                    go={go}
                    tournament={tournament}
                    setPopout={setPopout}/>
            case Constants.Tabs.TOURNAMENT_GRID:
                return <Grid
                    go={go}
                    gameUser={gameUser}
                    tournament={tournament}/>
            case Constants.Tabs.TOURNAMENT_PARTICIPANTS:
                return <Participants
                    tournament={tournament}
                    fetchedUser={VKUser}
                    selectParticipant={selectParticipant}
                    go={go}/>
        }
        return null
    }

    
    return (<Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to={Constants.Panels.HOME}/>}>
            {StrManager.get(StrManager.StrEnum.TOURNAMENT_INFO_HOME_HEADER)}
        </PanelHeader>
        <Tabs>
            <TabsItem
                id = {Constants.Tabs.TOURNAMENT_INFO}
                onClick={() => {
                    setActiveTab(Constants.Tabs.TOURNAMENT_INFO)}}
                      selected={activeTab === Constants.Tabs.TOURNAMENT_INFO}>
                {StrManager.get(StrManager.StrEnum.TOURNAMENT_INFO_TAB_INFO)}
            </TabsItem>
            <TabsItem
                id = {Constants.Tabs.TOURNAMENT_GRID}
                onClick={() => setActiveTab(Constants.Tabs.TOURNAMENT_GRID)}
                      selected={activeTab === Constants.Tabs.TOURNAMENT_GRID}>
                {StrManager.get(StrManager.StrEnum.TOURNAMENT_INFO_TAB_GRID)}
            </TabsItem>
            <TabsItem id = {Constants.Tabs.TOURNAMENT_PARTICIPANTS}
                onClick={() => setActiveTab(Constants.Tabs.TOURNAMENT_PARTICIPANTS)}
                      selected={activeTab === Constants.Tabs.TOURNAMENT_PARTICIPANTS}>
                {StrManager.get(StrManager.StrEnum.TOURNAMENT_INFO_TAB_PARTICIPANTS)}
            </TabsItem>
        </Tabs>
        {VKUser ? showTab() :
            <Spinner size={"large"} style={{position:"relative", marginTop:"50%"}}/>}
    </Panel>)
}

export default TournamentInfoHome