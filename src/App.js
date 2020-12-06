import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Constants from "./Model/Constants";
import TournamentInfoHome from "./panels/TournamentInfoHome";
import StrManager from "./Model/StrManager";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Root from "@vkontakte/vkui/dist/components/Root/Root";

const App = () => {
	//"deploy": "vk-miniapps-deploy" в scripts в package.json
	const [activePanel, setActivePanel] = useState(Constants.Panels.HOME);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const [fetchedUser, setUser] = useState(null);
	const [selectedTournament, setSelectedTournament] = useState(null);


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
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null)
		}
		// async function setLocale() {
		// 	let xhr = new XMLHttpRequest();
		// 	xhr.open('GET', `https://api.vk.com/method/users.get?user_ids=${fetchedUser.id}&fields=lang&access_token=${Token.token}&v=5.126`, false);
		// 	xhr.send();
		//
		// 	let locale = "default"
		// 	if (xhr.status != 200) {
		// 		console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
		// 	} else {
		// 		locale = xhr.response.lang;
		// 		console.log(locale);
		// 	}
		// 	StrManager.setLocale(locale);
		// }

		fetchData();
		//setLocale();1
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const selectTournament = (tournament) => {
		setSelectedTournament(tournament)
	}

	return (
		<View activePanel={activePanel}>
			<Home id={Constants.Panels.HOME}
				  fetchedUser={fetchedUser}
				  go={go}
				  selectTournament={selectTournament}/>
			<TournamentInfoHome id={Constants.Panels.TOURNAMENT_INFO_HOME}
				fetchedUser={fetchedUser}
				go={go}
				tournament={selectedTournament}/>
		</View>
	);
}

export default App;

