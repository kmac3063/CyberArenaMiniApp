class Data {
    static getTournaments(userId) {
        return fetch("https://jsonplaceholder.typicode.com/photos?id=1&id=3&id=4")
            .then(response => {
                return response.json()})
        // let t1 = {img : "https://sun9-2.userapi.com/impg/EsUbC6OaOFChaUcvowOZ6g1nkf1vsrgFLylzHA/6sqihZVyTr8.jpg?size=1215x2160&quality=96&proxy=1&sign=62f977e945dc431de60c80337f25fb29"}
        // let t2 = {img : "https://sun9-2.userapi.com/impg/EsUbC6OaOFChaUcvowOZ6g1nkf1vsrgFLylzHA/6sqihZVyTr8.jpg?size=1215x2160&quality=96&proxy=1&sign=62f977e945dc431de60c80337f25fb29"}
        //
        // let p = new Promise(function (resolve, reject) {
        //     resolve([t1, t2])
        // })
        // return {}
    }
}

export default Data