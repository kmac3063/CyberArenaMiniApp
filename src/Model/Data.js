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
import bridge from "@vkontakte/vk-bridge";

import Helper from "./Helper";

class Data {
    // TOURNAMENTS
    static getMyTournaments(user) {
        return fetch("https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3&id=4&id=5&id=6&id=7")
            .then(response => response.json())
            .then(tournaments => tournaments.map((t) => {
                        t.creatorId = 1
                        t.imgURL = user.photo_200
                        t.name = "Paladins Pro Circuit 1/4 final"
                        t.gameName = "Paladins"
                        t.gridType = Constants.TournamentParams.GridType.SINGLE_ELIMINATION
                        t.groupType = Constants.TournamentParams.GroupType.SOLO
                        t.dateBegin = "2000-12-18"
                        t.dateEnd = "2000-12-18"
                        t.privateType = Constants.TournamentParams.PrivateType.OPEN
                        t.description = "DOTA 2 dota 2 cs go cs:go 123 Почему почему почему почему..."
                        t.maxCommand = 16
                        t.rules = "1. Никаких оскорблений.\n" +
                            "2. Участники старше 16+\n" +
                            "3. Участники из РФ"
                        return t}))
            .then(tournaments => {
                let t1 = {}
                t1.id = 1
                t1.creatorId = 1
                t1.imgURL = "https://sun9-23.userapi.com/impf/oTYsEI-Hjcz2I3kjRVRManGmF-YFsXNNdLfWoQ/h8Ttoeq5lQ4.jpg?size=1280x720&quality=96&proxy=1&sign=77242168f68547e416f47bdf2e7e98fa";
                t1.name = "Dota 2 Open Classification"
                t1.gameName = "Dota 2"
                t1.gridType = Constants.TournamentParams.GridType.SINGLE_ELIMINATION
                t1.groupType = Constants.TournamentParams.GroupType.SOLO
                t1.privateType = Constants.TournamentParams.PrivateType.OPEN
                t1.dateBegin = "2021-01-01"
                t1.dateEnd = "2021-01-10"
                t1.maxCommand = 16
                t1.description = "Турнир по Дота 2, организованный Игроманией совместно с Эльдорадо. Главный приз - супер широкий монитор от LG.\n" +
                    "Подробности на сайте игромании:"
                t1.rules = "1. Никаких оскорблений.\n" +
                    "2. Участники старше 16+\n" +
                    "3. Участники из РФ"

                let t2 = {}
                t2.id = 2
                t2.creatorId = 2
                t2.imgURL = "https://sun9-37.userapi.com/impf/uiQQnPo4xDDN2hIfpBQxccCoq9i7zdtPoyGf3g/6SpdQLhZ-Xc.jpg?size=1600x800&quality=96&proxy=1&sign=dc6f37fc14df95c33de478042495779f"
                t2.name = "Hearthstone Battlegrounds emea cup"
                t2.gameName = "HearthStone"
                t2.gridType = Constants.TournamentParams.GridType.SINGLE_ELIMINATION
                t2.groupType = Constants.TournamentParams.GroupType.SOLO
                t2.dateBegin = "2021-01-15"
                t2.dateEnd = "2021-01-16"
                t2.maxCommand = 16
                t2.description = "Международный турнир по дисциплине Hearthstone! Главный приз - 3000$.\n" +
                    "Принимайте участие все!"
                t2.privateType = Constants.TournamentParams.PrivateType.OPEN
                t2.rules = "1. Участники 18+\n" +
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
                {imgURL : img,
                id: n + 1})
        }
        return tournaments
    }

    static getAllTournaments(user) {
        return this.getMyTournaments(user);
    }

    static deleteTournament(tournament) {
        // TODO отправляем на удаление
    }

    static createTournament(newTournament) {

    }

    static updateTournament(editedTournament) {

    }
    static getTournamentsWithUser(user) {

    }

    static addNewParticipant(tournament, user) {

    }

    static deleteParticipant(tournament, user) {

    }

    // USERS

    static initUser(VKUser) {

    }

    static updateUser(user) {

    }

    static getParticipants(tournament) {

    }

    static getGameUser(VKUser) {
        // запрос в бд на юзера
        // console.log(user)
        return {avatarURL : VKUser.photo_200,
                id : VKUser.id,
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

    static async getTestUsers() {
        return [{ id : 1,
            imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
            nickname : "killer228"},
            { id : 2,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 3,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 4,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 5,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 6,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 7,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 8,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 9,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 10,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},
            { id : 11,
                imgURL : "https://sun9-72.userapi.com/impf/c851536/v851536397/f51ab/d2brwQfMOWg.jpg?size=1920x1200&quality=96&proxy=1&sign=de50e0b8bc6254845fddfbfd572194bf",
                nickname : "killer228"},]
    }


    // VK API

    static async getVKUsers(gameUsers) {
        // TODO делаем запрос в вк апи и получаем имена всех людей
        // const tokenObj = await bridge.send("VKWebAppGetAuthToken",
        //     {app_id : parseInt(Helper.getVkAppId()) , "scope": ""});
        // const token = tokenObj.access_token
        //
        //
        // let usersURL = ""
        // for (let i = 0; i < gameUsers.length; i++) {
        //     usersURL += gameUsers[i].id
        //     if (i !== gameUsers.length - 1)
        //         usersURL += ','
        // }
        // const vkUsers = await bridge.send("VKWebAppCallAPIMethod",
        //     {"method": "users.get", "request_id": "32test",
        //         "params": {user_ids: usersURL, fields: "bdate,city", "v":"5.126", "access_token":token}})

        //return vkUsers.response

        return [
            {id : 1, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 2, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 3, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 4, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 5, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 6, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
        ]
    }



    // ANOTHER

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
}

export default Data