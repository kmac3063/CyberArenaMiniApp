import Constants from "./Constants";

class StrManager {
    static p = "a"
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
        // Информация о пользователе
        PROFILE_TITLE: 17,

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
        TOURNAMENT_NAME: 310,

        GRID_NOT_READY_YET: 350,
        GRID_NOT_READY_YET_DESCRIPTION: 351,

        [Constants.TournamentParams.GridType.SINGLE_ELIMINATION] : 4,
        [Constants.TournamentParams.GroupType.SOLO] : 40,
        [Constants.TournamentParams.GroupType.GROUP] : 41,
        [Constants.TournamentParams.PrivateType.OPEN] : 42,
        [Constants.TournamentParams.PrivateType.PRIVATE] : 43,

        CREATE_TOURNAMENT_TITLE: 5,
        CREATE_TOURNAMENT_NAME: 51,
        CREATE_TOURNAMENT_GAME_NAME: 52,
        CREATE_TOURNAMENT_DESCRIPTION: 53,
        CREATE_TOURNAMENT_START_DATE: 54,
        CREATE_TOURNAMENT_DATE_HOLDER: 55,
        CREATE_TOURNAMENT_END_DATE: 56,
        CREATE_TOURNAMENT_PRIVATE_TITLE: 57,
        CREATE_TOURNAMENT_PRIVATE_DESCR: 58,
        CREATE_TOURNAMENT_GROUP_TITLE: 59,
        CREATE_TOURNAMENT_GROUP_DESCR: 500,
        CREATE_TOURNAMENT_GRID_TITLE: 501,
        CREATE_TOURNAMENT_MAX_PEOPLE: 502,
        CREATE_TOURNAMENT_RULES_TITLE: 503,
        CREATE_TOURNAMENT_RULES_DESCR: 504,
        CREATE_TOURNAMENT_IMG_TITLE: 505,
        CREATE_TOURNAMENT_IMG_DESCR: 506,
        CREATE_TOURNAMENT_IMG_ADD: 507,
        CREATE_TOURNAMENT_IMG_ADD_TITLE: 508,
        CREATE_TOURNAMENT_SAVE: 509,
        CREATE_TOURNAMENT_NEED_CHECK_ALL: 510,

        EDIT_TOURNAMENT_TITLE: 6,
        EDIT_TOURNAMENT_NAME: 61,
        EDIT_TOURNAMENT_GAME_NAME: 62,
        EDIT_TOURNAMENT_DESCRIPTION: 63,
        EDIT_TOURNAMENT_START_DATE: 64,
        EDIT_TOURNAMENT_DATE_HOLDER: 65,
        EDIT_TOURNAMENT_END_DATE: 66,
        EDIT_TOURNAMENT_PRIVATE_TITLE: 67,
        EDIT_TOURNAMENT_PRIVATE_DESCR: 68,
        EDIT_TOURNAMENT_GROUP_TITLE: 69,
        EDIT_TOURNAMENT_GROUP_DESCR: 600,
        EDIT_TOURNAMENT_GRID_TITLE: 601,
        EDIT_TOURNAMENT_MAX_PEOPLE: 602,
        EDIT_TOURNAMENT_RULES_TITLE: 603,
        EDIT_TOURNAMENT_RULES_DESCR: 604,
        EDIT_TOURNAMENT_IMG_TITLE: 605,
        EDIT_TOURNAMENT_IMG_DESCR: 606,
        EDIT_TOURNAMENT_IMG_ADD: 607,
        EDIT_TOURNAMENT_IMG_ADD_TITLE: 608,
        EDIT_TOURNAMENT_SAVE: 609,
        EDIT_TOURNAMENT_NEED_CHECK_ALL: 610,
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
            [this.StrEnum.TOURNAMENTS_GAME_NAME, "Игра"],
            [this.StrEnum.TOURNAMENTS_GRID_TYPE, "Тип сетки"],
            [this.StrEnum.TOURNAMENTS_START_TIME, "Начало"],
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
            [this.StrEnum.TOURNAMENT_NAME, "Название турнира"],
            [this.StrEnum.GRID_NOT_READY_YET, "Сетки пока нет"],
            [this.StrEnum.GRID_NOT_READY_YET_DESCRIPTION, "Возвращайтесь позже, сетка ещё не сформирована"],

            [Constants.TournamentParams.GridType.SINGLE_ELIMINATION, "Single elimination"],
            [Constants.TournamentParams.GroupType.SOLO, "Одиночное"],
            [Constants.TournamentParams.GroupType.GROUP, "Командное"],
            [Constants.TournamentParams.PrivateType.OPEN, "Открытое"],
            [Constants.TournamentParams.PrivateType.PRIVATE, "Закрытое"],

            [this.StrEnum.CREATE_TOURNAMENT_TITLE, "Создать турнир"],
            [this.StrEnum.EDIT_TOURNAMENT_TITLE, "Изменить турнир"],
            [this.StrEnum.CREATE_TOURNAMENT_NAME, "Название турнира"],
            [this.StrEnum.EDIT_TOURNAMENT_NAME, "Название турнира"],
            [this.StrEnum.CREATE_TOURNAMENT_GAME_NAME, "Игра"],
            [this.StrEnum.EDIT_TOURNAMENT_GAME_NAME, "Игра"],
            [this.StrEnum.CREATE_TOURNAMENT_DESCRIPTION, "Описание турнира"],
            [this.StrEnum.EDIT_TOURNAMENT_DESCRIPTION, "Описание турнира"],
            [this.StrEnum.CREATE_TOURNAMENT_START_DATE, "Дата начала"],
            [this.StrEnum.EDIT_TOURNAMENT_START_DATE, "Дата начала"],
            [this.StrEnum.CREATE_TOURNAMENT_DATE_HOLDER, "Число"],
            [this.StrEnum.EDIT_TOURNAMENT_DATE_HOLDER, "Число"],
            [this.StrEnum.CREATE_TOURNAMENT_END_DATE, "Дата конца"],
            [this.StrEnum.EDIT_TOURNAMENT_END_DATE, "Дата конца"],
            [this.StrEnum.CREATE_TOURNAMENT_PRIVATE_TITLE, "Тип мероприятия"],
            [this.StrEnum.EDIT_TOURNAMENT_PRIVATE_TITLE, "Тип мероприятия"],
            [this.StrEnum.CREATE_TOURNAMENT_PRIVATE_DESCR, "В закрытое мероприятие можно попасть только по ссылке."],
            [this.StrEnum.EDIT_TOURNAMENT_PRIVATE_DESCR, "В закрытое мероприятие можно попасть только по ссылке."],
            [this.StrEnum.CREATE_TOURNAMENT_GROUP_TITLE, "По количеству людей"],
            [this.StrEnum.EDIT_TOURNAMENT_GROUP_TITLE, "По количеству людей"],
            [this.StrEnum.CREATE_TOURNAMENT_GROUP_DESCR, "Турниры командного типа пока недоступны"],
            [this.StrEnum.EDIT_TOURNAMENT_GROUP_DESCR, "Турниры командного типа пока недоступны"],
            [this.StrEnum.CREATE_TOURNAMENT_GRID_TITLE, "Турнирная сетка"],
            [this.StrEnum.EDIT_TOURNAMENT_GRID_TITLE, "Турнирная сетка"],
            [this.StrEnum.CREATE_TOURNAMENT_MAX_PEOPLE, "Максимальное количество участников"],
            [this.StrEnum.EDIT_TOURNAMENT_MAX_PEOPLE, "Максимальное количество участников"],
            [this.StrEnum.CREATE_TOURNAMENT_RULES_TITLE, "Правила турнира"],
            [this.StrEnum.EDIT_TOURNAMENT_RULES_TITLE, "Правила турнира"],
            [this.StrEnum.CREATE_TOURNAMENT_RULES_DESCR, "Тут вы можете указать специфические ограничения"],
            [this.StrEnum.EDIT_TOURNAMENT_RULES_DESCR, "Тут вы можете указать специфические ограничения"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_TITLE, "Обложка турнира"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_TITLE, "Обложка турнира"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_DESCR, "Загружать обложку с устройства запрещено"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_DESCR, "Загружать обложку с устройства запрещено"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_ADD, "Добавить обложку"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_ADD, "Изменить обложку"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_ADD_TITLE, "Укажите ссылку на обложку"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_ADD_TITLE, "Укажите ссылку на обложку"],
            [this.StrEnum.CREATE_TOURNAMENT_NEED_CHECK_ALL, "Необходимо заполнить все поля"],
            [this.StrEnum.EDIT_TOURNAMENT_NEED_CHECK_ALL, "Необходимо заполнить все поля"],
            [this.StrEnum.CREATE_TOURNAMENT_SAVE, "Сохранить"],
            [this.StrEnum.EDIT_TOURNAMENT_DELETE, "Удалить турнир"],
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