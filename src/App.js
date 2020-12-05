import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Constants from "./Model/Constants";
import TournamentInfo from "./panels/TournamentInfo";

const App = () => {
	//"deploy": "vk-miniapps-deploy" в scripts в package.json
	const [activePanel, setActivePanel] = useState(Constants.Panels.HOME);
	const [selectedTournamentId, setSelectedTournamentId] = useState(null);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const schemeAttribute = document.createAttribute('scheme');
	schemeAttribute.value = 'space_gray';
	document.body.attributes.setNamedItem(schemeAttribute);

	useEffect(() => {
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
		let panel = e.currentTarget.dataset.to
		setActivePanel(panel);
	};

	const tournamentSelect = (tournamentId) => {
		setSelectedTournamentId(tournamentId)
	}

	return (
		<View activePanel={activePanel} popout={null/*popout*/}>
			<Home id={Constants.Panels.HOME}
				  fetchedUser={fetchedUser}
				  go={go}
				  tournamentSelect={tournamentSelect}/>
			<TournamentInfo id ={Constants.Panels.TOURNAMENT_INFO}
							tournamentId={selectedTournamentId}
							go={go}
			/>
		</View>
	);
}

export default App;

