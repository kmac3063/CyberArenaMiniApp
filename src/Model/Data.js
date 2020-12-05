import sTournamentPreview from "../img/100x100_tournament_preview.png"
import mTournamentPreview from "../img/200x120_tournament_preview.png"
import lTournamentPreview from "../img/400x240_tournament_preview.png"
import Constants from "./Constants";

class Data {
    static getMyTournaments(user) {
        return fetch("https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3&id=4&id=5&id=6&id=7")
            .then(response => response.json())
            .then(tournaments =>
                tournaments.map((t) => {
                    t.imgUrl = user.photo_200;
                    t.name = "Paladins Pro Circuit 1/4 final"
                    t.gameName = "Paladins"
                    t.type = "Single elimination"
                    t.date = "18.12.2000"
                    t.description = "DOTA 2 dota 2 cs go cs:go 123 igor dasha kasha"
                    return t}
                )
            )
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
}

export default Data