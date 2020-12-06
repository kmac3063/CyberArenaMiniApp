import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform, Spinner, Tabs, TabsItem} from "@vkontakte/vkui";
import StrManager from "../Model/StrManager";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Constants from "../Model/Constants";
import Tournament from "../tabs/Tournament";
import Tavern from "../tabs/Tavern";
import Profile from "../tabs/Profile";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";



const Home = ({ id, VKUser, gameUser, go, selectTournament}) => {
	const [activeTab, setActiveTab] = useState(Constants.Tabs.HOME_TOURNAMENT)

	const showTab = () => {
		switch (activeTab) {
			case Constants.Tabs.HOME_TOURNAMENT:
				return <Tournament VKUser={VKUser}
				                   gameUser={gameUser}
								   go={go}
								   selectTournament={selectTournament}/>
			case Constants.Tabs.HOME_TAVERN:
				return <Tavern VKUser={VKUser}
							   gameUser={gameUser}
							   go={go}/>
			case Constants.Tabs.HOME_PROFILE:
				return <Profile VKUser={VKUser}
								gameUser={gameUser}
								go={go}/>
		}
		return null
	}
	return (<Panel id={id}>
		<PanelHeader>
			{StrManager.get(StrManager.StrEnum.APP_NAME)}
		</PanelHeader>
		<Tabs >
			<TabsItem
				id = {Constants.Tabs.HOME_TOURNAMENT}
				onClick={() => setActiveTab(Constants.Tabs.HOME_TOURNAMENT)}
					  selected={activeTab === Constants.Tabs.HOME_TOURNAMENT}>
				{StrManager.get(StrManager.StrEnum.TOURNAMENT_TAB)}
			</TabsItem>
			<TabsItem
				id = {Constants.Tabs.HOME_TAVERN}
				onClick={() => setActiveTab(Constants.Tabs.HOME_TAVERN)}
					  selected={activeTab === Constants.Tabs.HOME_TAVERN}>
				{StrManager.get(StrManager.StrEnum.TAVERN_TAB)}
			</TabsItem>
			<TabsItem
				id = {Constants.Tabs.HOME_PROFILE}
				onClick={() => setActiveTab(Constants.Tabs.HOME_PROFILE)}
					  selected={activeTab === Constants.Tabs.HOME_PROFILE}>
				{StrManager.get(StrManager.StrEnum.PROFILE_TAB)}
			</TabsItem>
		</Tabs>
		{VKUser ? showTab() :
			<Spinner size={"large"} style={{position:"relative", marginTop:"50%"}}/>}
	</Panel>)
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	VKUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home
