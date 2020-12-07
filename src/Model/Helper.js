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
}

export default Helper