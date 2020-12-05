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
                    return t}
                )
            )
    }

    static getRecommendedTournaments(userId) {
        return this.getMyTournaments(userId);
    }

    static getParticipateTournaments(userId) {
        return this.getMyTournaments(userId);
    }

    static getHighlyRecommendedTournaments(userId) {
        return this.getMyTournaments(userId);
    }

    static getLoadTournaments(n, size) {
        let img
        switch (size) {
            case Constants.TournamentsPreviewSize.SMALL:
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
}

export default Data