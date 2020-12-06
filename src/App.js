import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Constants from "./Model/Constants";
import TournamentInfoHome from "./panels/TournamentInfoHome";
import StrManager from "./Model/StrManager";
import Data from "./Model/Data";
import ParticipantProfile from "./panels/ParticipantProfile";

const App = () => {
	//"deploy": "vk-miniapps-deploy" в scripts в package.json
	const [activePanel, setActivePanel] = useState(Constants.Panels.HOME);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const [VKUser, setUser] = useState(null);
	const [gameUser, setGameUser] = useState(null)

	const [selectedTournament, setSelectedTournament] = useState(null);
	const [selectedParticipant, setSelectedParticipant] = useState(null)

	const schemeAttribute = document.createAttribute('scheme');
	schemeAttribute.value = 'space_gray';
	document.body.attributes.setNamedItem(schemeAttribute);

	useEffect(() => {
		let t = window.location.search.indexOf("vk_language=");
		let locale = window.location.search.slice(t + "vk_language=".length, t + "vk_language=".length + 2)
		StrManager.setLocale(locale)

		bridge.subscribe(({ detail: { type, data }}) => {
			// if (type === 'VKWebAppUpdateConfig') {
			// 	const schemeAttribute = document.createAttribute('scheme');
			// 	schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
			// 	document.body.attributes.setNamedItem(schemeAttribute);
			// }
		});
		async function fetchData() {
			const vkUser = await bridge.send('VKWebAppGetUserInfo');
			setUser(vkUser);

			// TO-DO Запрос на сервер
			// const gameUser = await
			const gameUser = Data.getGameUser(vkUser)
			setGameUser(gameUser)
			setPopout(null)
		}

		fetchData();
		//setLocale();1
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const selectTournament = (tournament) => {
		setSelectedTournament(tournament)
	}

	const selectParticipants = (participant) => {
		setSelectedParticipant(participant)
	}

	return (
		<View activePanel={activePanel}>
			<Home id={Constants.Panels.HOME}
				  VKUser={VKUser}
				  gameUser={gameUser}
				  go={go}
				  selectTournament={selectTournament}/>
			<TournamentInfoHome id={Constants.Panels.TOURNAMENT_INFO_HOME}
				VKUser={VKUser}
				gameUser={gameUser}
				go={go}
				tournament={selectedTournament}
				selectParticipant={selectParticipants}/>
			<ParticipantProfile id={Constants.Panels.PARTICIPANT_PROFILE}
								go={go}
								participant={selectedParticipant}
								fetchedUser={VKUser}
								tournament={selectedTournament}
			/>
		</View>
	);
}

export default App;
