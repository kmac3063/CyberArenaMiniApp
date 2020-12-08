import Debug from "../Debug/Debug";

class Helper {
    static convertImageToURL = async (image, callback) => {
        let reader = new FileReader()
        reader.onload = (e) => {
            callback(e.target.result)
        }
        await reader.readAsDataURL(image)
        return image;
    }

    static addHMSToDate = (d) => {
        //YYYY-MM-DD HH:MI:SS
        return d + " 00:00:00"
    }

    //2000-12-12
    static getNormalDateView = (d) => {
        // console.log("Date")
        // console.log(d)
        if (!d || !d.length || d.length < 10) return d;
        let date = d.slice(0, 10);
        let t = date.split('-')
        return  t[2] + '.' + t[1] + '.' + t[0]
    }

    static getVkAppId = () => {
        const qs = require('querystring');
        const urlParams = qs.parse(window.location.search);
        const ordered = {};
        Object.keys(urlParams).sort().forEach((key) => {
            if (key.slice(0, 3) === 'vk_') {
                ordered[key] = urlParams[key];
            }
        });
        return ordered["vk_app_id"];
    }

    static async postData(url, data) {
        if (Debug.DEBUG) {
            // console.log("post url: " + url)
            // console.log(url)
            // console.log(data)
            // console.log("")
        }

        const response = fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(response => response.json()).then(r => console.log(r))
            .catch(e => {
                if (Debug.DEBUG) {
                    console.log("Ошибка")
                    console.log(e)
                }
            })
    }

    static async postWithData(url, data) {
        if (Debug.DEBUG) {
            // console.log("post url: " + url)
            // console.log(url)
            // console.log(data)
            // console.log("")
        }

        const response = fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(response => response.json())
            .catch(e => {
                if (Debug.DEBUG) {
                    console.log("Ошибка")
                    console.log(e)
                }
            })

        return response; // parses JSON response into native JavaScript objects
    }

    static async getData(url) {
        return fetch(url).then(response => response.json())
            .catch(e => {
                console.log("Get не получился url: " + url)
                console.log(e)
            })
    }
}

export default Helper