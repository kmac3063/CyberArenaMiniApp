import sTournamentPreview from "../img/100x100_tournament_preview.png"
import mTournamentPreview from "../img/200x120_tournament_preview.png"
import lTournamentPreview from "../img/400x240_tournament_preview.png"
import Constants from "./Constants";
import bridge from '@vkontakte/vk-bridge';

import a1 from '../img/avatars/1.png'
import a2 from '../img/avatars/2.png'
import a3 from '../img/avatars/3.png'
import a4 from '../img/avatars/4.png'
import a5 from '../img/avatars/5.png'
import a6 from '../img/avatars/6.png'
import Helper from "./Helper";
import Debug from "../Debug/Debug";
import Test1 from "../img/test1.jpg"
import Test2 from "../img/test2.jpg"
import Test3 from "../img/test3.jpg"

class Data {
    // TOURNAMENTS
    static getMyTournaments(gameUser) {
        console.log("20")
        // return Helper.
        // https://cyber-arena.fun/api/vk/player/contests/?player_id=
        return fetch("https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3&id=4&id=5&id=6&id=7")
            .then(response => response.json())
            .then(tournaments => tournaments.map((t) => {
                        t.creatorId = 1
                        t.imgURL = "https://sun5-4.userapi.com/impg/EsUbC6OaOFChaUcvowOZ6g1nkf1vsrgFLylzHA/6sqihZVyTr8.jpg?size=200x0&quality=96&crop=3,257,672,1680&sign=973fabb101633fcadbc359d530b5a873&ava=1"
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

    static async getAllTournaments() {
        const allTournaments = await Helper.getData("https://cyber-arena.fun/api/vk/contest/all/")
        // console.log("All Tournaments:")
        //
        // console.log(allTournaments)
        let tournaments = allTournaments.map((t) => {
            let tour = {
                id : t.id,
                name : t.name,
                gameName : t.game,
                description : t.description,
                rules : t.rules,
                dateBegin : t.datetime_begin.slice(0, 10),
                dateEnd : t.datetime_end.slice(0, 10),
                creatorId : t.creator_id,

                // image : t.image,
                imgURL : Data.getImage(t.id),
                img : Data.getImage(t.id),
                privateType : t.public ? Constants.TournamentParams.PrivateType.OPEN :
                    Constants.TournamentParams.PrivateType.PRIVATE,
                gridType : Constants.TournamentParams.GridType.SINGLE_ELIMINATION,
                maxCommand : t.max_people,
                participants : t.participants ? t.participants : [],
                //current_stage : 0,
                //matches : []
            }
            return tour;
        })
        return tournaments;
        //return this.getMyTournaments(user);
    }

    static deleteTournament(tournament) {
        fetch(`https://cyber-arena.fun/api/vk/contest/${tournament.id}/`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
        }).then(response => response.json())
            .catch(e => {
                if (Debug.DEBUG) {
                    console.log("Ошибка")
                    console.log(e)
                }
            })
    }

    static async createTournament(newTournament) {
        let tourJson = {
            name : newTournament.name,
            game : newTournament.gameName,
            description : newTournament.description,
            rules : newTournament.rules,
            datetime_begin : Helper.addHMSToDate(newTournament.dateBegin),
            datetime_end : Helper.addHMSToDate(newTournament.dateEnd),
            creator_id : newTournament.creatorId,

            // image : newTournament.image,
            image : null,
            // image : newTournament.img,
            public : newTournament.privateType === Constants.TournamentParams.PrivateType.OPEN,

            // grid_type : newTournament.,
            grid_type : 0,

            max_people : newTournament.maxCommand,
            participants : [],
            current_stage : 0,
            matches : []
        }
        // console.log("Создаю: ")
        // console.log(tourJson)
        Helper.postWithData("https://cyber-arena.fun/api/vk/contest/new/", tourJson)

        // prop.creatorId = gameUser.id
        // prop.name = name
        // prop.dateBegin = dateBegin
        // prop.dateEnd = dateEnd
        // prop.rules = rules
        // prop.groupType = groupType
        // prop.gridType = gridType
        // prop.privateType = privateType
        // prop.maxCommand = maxCommand
        // prop.gameName = gameName
        // prop.description = description
        // prop.image = image
        // prop.imageURL = imageURL
    }

    static async updateTournament(editedTournament) {

        let tourJson = {
            id : editedTournament.id,
            name : editedTournament.name,
            game : editedTournament.gameName,
            description : editedTournament.description,
            rules : editedTournament.rules,
            datetime_begin : Helper.addHMSToDate(editedTournament.dateBegin),
            datetime_end : Helper.addHMSToDate(editedTournament.dateEnd),
            creator_id : editedTournament.creatorId,

            // image : newTournament.image,
            image : null,
            // image : newTournament.img,
            public : editedTournament.privateType === Constants.TournamentParams.PrivateType.OPEN,

            // grid_type : newTournament.,
            grid_type : 0,

            max_people : editedTournament.maxCommand,
            participants : editedTournament.participants ? editedTournament.participants : [],
            current_stage : 0,
            matches : []
        }
        //
        // console.log(tourJson)

        await fetch(`https://cyber-arena.fun/api/vk/contest/${editedTournament.id}/`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
            body: JSON.stringify(tourJson) // body data type must match "Content-Type" header
            }).then(response => response.json()).then(r => console.log(r))
            .catch(e => {
                if (Debug.DEBUG) {
                    console.log("Ошибка")
                    console.log(e)
                }
            })
    }

    static getTournamentsWithUser(user) {

    }

    static addNewParticipant(tournament, user) {

    }

    static deleteParticipant(tournament, user) {

    }

    // USERS

    static async initUser(VKUser) {
        await Helper.postData('https://cyber-arena.fun/api/vk/player/new/', {
            vk_id : VKUser.id,
            nickname : `${VKUser.first_name} ${VKUser.last_name}`,
            ava : null,
            games : "",
        })
    }

    static updateUser(user) {

    }

    static getParticipants(tournament) {

    }

    static async getGameUser(VKUser) {
        let gameUser = await Helper.getData('https://cyber-arena.fun/api/vk/player/' + VKUser.id +'/')
        if (Debug.DEBUG) {
            console.log("GameUser :")
            console.log(gameUser)
        }
        gameUser = {id : gameUser.vk_id,
            nickname : gameUser.nickname,
            imgURL : gameUser.ava,
            games : gameUser.games}
        return gameUser
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
        //
        // return vkUsers.response

        return [
            {id : 1, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 2, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 3, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 4, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 5, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
            {id : 6, first_name : "Потап", last_name : "Потапов", city : {title : "Moskow"}, bdate : "01.01.2000"},
        ]
    }

    static async getUserLocale(user) {

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

    static getImage(id) {
        let t = id % 3
        if (t === 0)
            return Test1
        else if (t === 1)
            return Test2
        else if (t === 2)
            return Test3
    }
}

export default Data