import DefaultTournamentPreview from "../img/default_tournament_preview.png"

class Data {
    static getMyTournaments(user) {
        return fetch("https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3&id=4&id=5&id=6&id=7")
            .then(response => response.json())
            .then(tournaments =>
                tournaments.map((t) => {
                    t.imgUrl = user.photo_200;
                    // надо возвращать сам турнир
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

    static getLoadTournaments(n) {
        let tournaments = []
        while (n--) {
            tournaments.push(
                {imgUrl : DefaultTournamentPreview,
                id: n + 1})
        }
        return tournaments
    }
}

export default Data