import sTournamentPreview from "../img/100x100_tournament_preview.png"
import mTournamentPreview from "../img/200x120_tournament_preview.png"
import lTournamentPreview from "../img/400x240_tournament_preview.png"
import Constants from "./Constants";

import a1 from '../img/avatars/1.png'
import a2 from '../img/avatars/2.png'
import a3 from '../img/avatars/3.png'
import a4 from '../img/avatars/4.png'
import a5 from '../img/avatars/5.png'
import a6 from '../img/avatars/6.png'

class Data {
    static getMyTournaments(user) {
        return fetch("https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3&id=4&id=5&id=6&id=7")
            .then(response => response.json())
            .then(tournaments => tournaments.map((t) => {
                        t.imgUrl = user.photo_200;
                        t.name = "Paladins Pro Circuit 1/4 final"
                        t.gameName = "Paladins"
                        t.type = "Single elimination"
                        t.dateBegin = "18.12.2000"
                        t.dateEnd = "18.12.2000"
                        t.description = "DOTA 2 dota 2 cs go cs:go 123 igor dasha kasha"
                        return t}))
            .then(tournaments => {
                let t1 = {}
                t1.id = 1
                t1.imgUrl = "https://sun9-23.userapi.com/impf/oTYsEI-Hjcz2I3kjRVRManGmF-YFsXNNdLfWoQ/h8Ttoeq5lQ4.jpg?size=1280x720&quality=96&proxy=1&sign=77242168f68547e416f47bdf2e7e98fa";
                t1.name = "Dota 2 Open Classification"
                t1.gameName = "Dota 2"
                t1.type = "Single elimination"
                t1.dateBegin = "01.01.2021"
                t1.dateEnd = "10.01.2021"
                t1.maxCommand = 16
                t1.description = "Турнир по Дота 2, организованный Игроманией совместно с Эльдорадо. Главный приз - супер широкий монитор от LG.\n" +
                    "Подробности на сайте игромании: *тут ссылка*"
                t1.rule = "1. Никаких оскорблений.\n" +
                    "2. Участники старше 16+\n" +
                    "3. Участники из РФ"

                let t2 = {}
                t2.id = 2
                t2.imgUrl = "https://sun9-2.userapi.com/impf/1FO0i_nKXnpOwNebUaKNC9fbRq5cw0SEErV6Nw/h9sGFqBdzdc.jpg?size=318x159&quality=96&proxy=1&sign=ba680847e9ea20184b17540473e5fde4"
                t2.name = "Hearthstone Battlegrounds emea cup"
                t2.gameName = "Dota 2"
                t2.type = "Single elimination"
                t2.dateBegin = "15.01.2021"
                t2.dateEnd = "16.01.2021"
                t2.maxCommand = 16
                t2.description = "Международный турнир по дисциплине Hearthstone! Главный приз - 300$.\n" +
                    "Принимайте участие все!"
                t2.rule = "1. Участники 18+\n" +
                    "2. Участники из стран СНГ\n" +
                    "3. Первые 8 игроков попадают в финал турнира!"

                tournaments[0] = t1
                tournaments[1] = t2
                return tournaments
            })
    }

    static getRecommendedTournaments(user) {
        return this.getMyTournaments(user);
    }

    static getParticipateTournaments(user) {
        return this.getMyTournaments(user);
    }

    static getHighlyRecommendedTournaments(user) {
        return this.getMyTournaments(user);
    }

    static getLoadTournaments(n, size) {
        let img
        switch (size) {
            case Constants.TournamentsPreviewSize.SMALL_QUAD:
                img = sTournamentPreview;
                break;
            case Constants.TournamentsPreviewSize.LARGE:
                img = lTournamentPreview
                break
            case Constants.TournamentsPreviewSize.MEDIUM:
            default:
                img = mTournamentPreview
        }
        let tournaments = []
        while (n--) {
            tournaments.push(
                {imgUrl : img,
                id: n + 1})
        }
        return tournaments
    }

    static getAllTournaments(user) {
        return this.getMyTournaments(user);
    }

    static getGameList() {
        let names = [
            "HearthStone",
            "Starcraft",
            "Dota 2",
            "CS:GO",
            "Шахматы",
            "UNO",
            "OverWatch",
            "Warface",
            "Warcraft Arena",
            "CS 1.6",
            "Paladins",
            "LOL",
            "HEROES of the STORM",
            "ARTIFACT",
            "GWENT",
            "VALORANT",
        ];
        let games = []
        for (let i = 0; i < names.length; i++) {
            games.push({name : names[i], id : i + 1})
        }
        return games
    }

    static getUser(user) {
        // запрос в бд на юзера
        // console.log(user)
        return {avatarURL : user.photo_200,
                id : user.id,
                nickname : "amazingMan777",
                games : "Among us, DOTA 2, PUBG"
        }
    }

    static getAvatars() {
        return [
            {imgURL : a1, id : 1},
            {imgURL : a2, id : 2},
            {imgURL : a3, id : 3},
            {imgURL : a4, id : 4},
            {imgURL : a5, id : 5},
            {imgURL : a6, id : 6},
            {imgURL : a2, id : 7},
            {imgURL : a1, id : 8},
            {imgURL : a4, id : 9},
        ];
    }
}

export default Data