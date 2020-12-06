class StrManager {
    static StrEnum = {
        APP_NAME : 1,

        TOURNAMENT_TAB: 2,
        TAVERN_TAB: 3,
        PROFILE_TAB: 4,
        NOTHING_HAS_FOUND: 5,

        PROFILE_AVATAR: 10,
        PROFILE_DATE_OF_BIRTH: 11,
        PROFILE_NICKNAME: 12,
        PROFILE_INFO: 13,
        PROFILE_GAMES: 14,
        PROFILE_VK_LINK: 15,
        PROFILE_CITY: 16,

        TAVERN_NOT_READY: 20,
        TAVERN_NOT_READY_DESCRIPTION: 21,

        TOURNAMENTS_CREATED_HEADER: 30,
        TOURNAMENTS_TAKING_PART_HEADER: 31,
        TOURNAMENTS_RECOMMENDED_HEADER: 32,
        TOURNAMENTS_GAME_NAME: 33,
        TOURNAMENTS_GRID_TYPE: 34,
        TOURNAMENTS_START_TIME: 35,

        TOURNAMENT_INFO_HEADER: 300,
        TOURNAMENT_DESCRIPTION: 301,
        TOURNAMENT_MAX_PARTICIPANTS: 302,
        TOURNAMENT_START_DATE: 303,
        TOURNAMENT_END_DATE: 304,
        TOURNAMENT_ORGANIZER: 305,
        TOURNAMENT_RULES: 306,
        TOURNAMENT_TAKE_PART: 307,
        TOURNAMENT_DECLINE: 308,
        TOURNAMENT_EDIT: 309,

        GRID_NOT_READY_YET: 350,
        GRID_NOT_READY_YET_DESCRIPTION: 351,

    }

    static localeWords

    static setLocale(lang) {
        let ru = new Map([
            [this.StrEnum.APP_NAME, "КиберАрена"],
            [this.StrEnum.TOURNAMENT_TAB, "Турниры"],
            [this.StrEnum.TAVERN_TAB, "Таверна"],
            [this.StrEnum.PROFILE_TAB, "Профиль"],
            [this.StrEnum.NOTHING_HAS_FOUND, "Ничего не найдено"],
            [this.StrEnum.PROFILE_AVATAR, "Аватар"],
            [this.StrEnum.PROFILE_DATE_OF_BIRTH, "Дата рождения"],
            [this.StrEnum.PROFILE_NICKNAME, "Никнейм"],
            [this.StrEnum.PROFILE_INFO, "Информация о пользователе"],
            [this.StrEnum.PROFILE_GAMES, "Игры"],
            [this.StrEnum.PROFILE_VK_LINK, "Ссылка Вконтакте"],
            [this.StrEnum.PROFILE_CITY, "Город"],
            [this.StrEnum.TAVERN_NOT_READY, "Таверна недоступна"],
            [this.StrEnum.TAVERN_NOT_READY_DESCRIPTION, "Совсем скоро вы сможете посетить таверну, а пока соревнуйтесь с другими участниками"],
            [this.StrEnum.TOURNAMENTS_CREATED_HEADER, "Мои турниры"],
            [this.StrEnum.TOURNAMENTS_TAKING_PART_HEADER, "Турниры, в которых я участвую"],
            [this.StrEnum.TOURNAMENTS_RECOMMENDED_HEADER, "Рекомендуемые турниры"],
            [this.StrEnum.TOURNAMENTS_GAME_NAME, "Игра: "],
            [this.StrEnum.TOURNAMENTS_GRID_TYPE, "Тип сетки: "],
            [this.StrEnum.TOURNAMENTS_START_TIME, "Начало: "],
            [this.StrEnum.TOURNAMENT_INFO_HEADER, "Информация о турнире"],
            [this.StrEnum.TOURNAMENT_DESCRIPTION, "Описание"],
            [this.StrEnum.TOURNAMENT_MAX_PARTICIPANTS, "Максимальное количество участников"],
            [this.StrEnum.TOURNAMENT_START_DATE, "Дата начала"],
            [this.StrEnum.TOURNAMENT_END_DATE, "Дата окончания"],
            [this.StrEnum.TOURNAMENT_ORGANIZER, "Организатор"],
            [this.StrEnum.TOURNAMENT_RULES, "Правила"],
            [this.StrEnum.TOURNAMENT_TAKE_PART, "Принять участие"],
            [this.StrEnum.TOURNAMENT_DECLINE, "Отказаться от участия"],
            [this.StrEnum.TOURNAMENT_EDIT, "Изменить"],
            [this.StrEnum.GRID_NOT_READY_YET, "Сетки пока нет"],
            [this.StrEnum.GRID_NOT_READY_YET_DESCRIPTION, "Возвращайтесь позже, сетка ещё не сформирована"],
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