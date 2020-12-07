import {Panel} from "@vkontakte/vkui";
import React from "react";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import Constants from "../Model/Constants";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import StrManager from "../Model/StrManager";

const GridCreator = ({id, go, tournament}) => {
    return <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go}
                                            data-to={Constants.Panels.TOURNAMENT_INFO_HOME}
                                            data-tab={Constants.Tabs.TOURNAMENT_GRID}
        />}>
            {StrManager.get(StrManager.StrEnum.GRID_CREATOR_HEADER)}
        </PanelHeader>
    </Panel>
}

export default GridCreator