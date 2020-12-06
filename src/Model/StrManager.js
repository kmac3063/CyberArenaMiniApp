class StrManager {
    static StrEnum = {
        APP_NAME : 1,

        TOURNAMENT_TAB: 2,
        TAVERN_TAB: 3,
        PROFILE_TAB: 4,

        PROFILE_AVATAR: 10,
        PROFILE_DATE_OF_BIRTH: 11,
        PROFILE_NICKNAME: 12,
        PROFILE_INFO: 13,
        PROFILE_GAMES: 14,
        PROFILE_VK_LINK: 15,
        PROFILE_CITY: 16,



    }

    static localeWords

    static setLocale(lang) {
        let ru = new Map([
            [this.StrEnum.APP_NAME, "КиберАрена"],
            [this.StrEnum.TOURNAMENT_TAB, "Турниры"],
            [this.StrEnum.TAVERN_TAB, "Таверна"],
            [this.StrEnum.PROFILE_TAB, "Профиль"],
            [this.StrEnum.PROFILE_AVATAR, "Аватар"],
            [this.StrEnum.PROFILE_DATE_OF_BIRTH, "Дата рождения"],
            [this.StrEnum.PROFILE_NICKNAME, "Никнейм"],
            [this.StrEnum.PROFILE_INFO, "Информация о пользователе"],
            [this.StrEnum.PROFILE_GAMES, "Игры"],
            [this.StrEnum.PROFILE_VK_LINK, "Ссылка Вконтакте"],
            [this.StrEnum.PROFILE_CITY, "Город"],

        ])

        let en = {}

        let ge = {}

        let fr = {}

        switch (lang) {
            case 'en':
                this.localeWords = en;
                break;
            case 'ge':
                this.localeWords = ge;
                break;
            case 'fr':
                this.localeWords = fr;
                break;
            case 'ru':
            case 'default':
            default:
                this.localeWords = ru;
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