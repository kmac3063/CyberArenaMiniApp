class Helper {
    static convertImageToURL = (image, callback) => {
        let reader = new FileReader()
        reader.onload = (e) => {
            callback(e.target.result)
        }
        reader.readAsDataURL(image)
    }

    static addHMSToDate = (d) => {
        //YYYY-MM-DD HH:MI:SS
        return d + " 00:00:00"
    }

    //2000-12-12
    static getNormalDateView = (d) => {
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

    static async  postData(url, data) {
        // console.log()
        // console.log(1)
        // console.log(url)
        // console.log(data)
        let url1 = 'https://cyber-arena.fun/api/vk/contest/all';
        let response = await fetch(url1).then(r => r.json()).then(r => console.log(r))
            .catch(e => console.log(e))
        // const response = fetch(url, {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'no-cors', // no-cors, *cors, same-origin
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept' : '*/*',
        //     },
        //     body: JSON.stringify({vk_id : 2, image : null}) // body data type must match "Content-Type" header
        // })
            //.catch(e => console.log(e))
            // .then((response) => response.json())
            // .then(response => console.log(response));
        // console.log(2)
        // const data1 = await response.json();
        // console.log(data1)
        // let t = await response.json();
        // console.log(3)
        //console.log(t)
        // console.log(4)
        return "1"; // parses JSON response into native JavaScript objects
    }
}

export default Helper