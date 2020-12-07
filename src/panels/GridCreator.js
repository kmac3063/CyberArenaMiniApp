import {Panel} from "@vkontakte/vkui";
import React from "react";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import Constants from "../Model/Constants";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";

const GridCreator = ({id, go, tournament}) => {
    return <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go}
                                            data-to={Constants.Panels.TOURNAMENT_INFO_HOME}
                                            data-tab={Constants.Tabs.TOURNAMENT_GRID}
        />}>
            Создание сетки
        </PanelHeader>
    </Panel>
}

export default GridCreator