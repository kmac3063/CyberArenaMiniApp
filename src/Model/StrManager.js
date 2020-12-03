class StrManager {
    static StrEnum = {
        APP_NAME : 1,
        TOURNAMENT_TAB: 2,
        TAVERN_TAB: 3,
        PROFILE_TAB: 4,
    }

    static localeWords

    static setLocale(lang) {
        let ru = new Map([
            [this.StrEnum.APP_NAME, "КиберАрена"],
            [this.StrEnum.TOURNAMENT_TAB, "Турниры"],
            [this.StrEnum.TAVERN_TAB, "Таверна"],
            [this.StrEnum.PROFILE_TAB, "Профиль"],
        ])

        //let en = {}

        if (lang === 'default')
            lang = 'ru'

        switch (lang) {
            case 'ru':
                this.localeWords = ru;
                break;
            case 'en':
                break;
            case 'ge':
                break;
            case 'fr':
                break;
        }
    }


    static get(stringEnum, array) {
        if (this.localeWords.has(stringEnum) === false) {
            return "NOT FOUND: " + stringEnum;
        }

        let s = this.localeWords.get(stringEnum)
        if (!array) {
            return s;
        }

        let k = 0
        let res = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '\0') {
                res.push(array[k++])
            } else {
                res.push(s[i])
            }
        }

        return res.join('')
    }
}

export default StrManager