import Constants from "./Constants";

class StrManager {
    static p = "a"
    static StrEnum = {
        APP_NAME : 1000,

        TOURNAMENT_TAB: 2000,
        TAVERN_TAB: 2001,
        PROFILE_TAB: 2002,
        NOTHING_HAS_FOUND: 2003,

        PROFILE_AVATAR: 3000,
        PROFILE_DATE_OF_BIRTH: 3001,
        PROFILE_NICKNAME: 3002,
        PROFILE_INFO: 3003,
        PROFILE_GAMES: 3004,
        PROFILE_VK_LINK: 3005,
        PROFILE_CITY: 3006,
        PROFILE_TITLE: 3007,

        TAVERN_NOT_READY: 4000,
        TAVERN_NOT_READY_DESCRIPTION: 4001,

        CREATE_TOURNAMENT_TITLE: 5000,
        CREATE_TOURNAMENT_NAME: 5001,
        CREATE_TOURNAMENT_GAME_NAME: 5002,
        CREATE_TOURNAMENT_DESCRIPTION: 5003,
        CREATE_TOURNAMENT_START_DATE: 5004,
        CREATE_TOURNAMENT_DATE_HOLDER: 5005,
        CREATE_TOURNAMENT_END_DATE: 5006,
        CREATE_TOURNAMENT_PRIVATE_TITLE: 5007,
        CREATE_TOURNAMENT_PRIVATE_DESCR: 5008,
        CREATE_TOURNAMENT_GROUP_TITLE: 5009,
        CREATE_TOURNAMENT_GROUP_DESCR: 5010,
        CREATE_TOURNAMENT_GRID_TITLE: 5011,
        CREATE_TOURNAMENT_MAX_PEOPLE: 5012,
        CREATE_TOURNAMENT_RULES_TITLE: 5013,
        CREATE_TOURNAMENT_RULES_DESCR: 5014,
        CREATE_TOURNAMENT_IMG_TITLE: 5015,
        CREATE_TOURNAMENT_IMG_DESCR: 5016,
        CREATE_TOURNAMENT_IMG_ADD: 5017,
        CREATE_TOURNAMENT_IMG_ADD_TITLE: 5018,
        CREATE_TOURNAMENT_SAVE: 5019,
        CREATE_TOURNAMENT_NEED_CHECK_ALL: 5020,

        EDIT_TOURNAMENT_TITLE: 6000,
        EDIT_TOURNAMENT_NAME: 6001,
        EDIT_TOURNAMENT_GAME_NAME: 6002,
        EDIT_TOURNAMENT_DESCRIPTION: 6003,
        EDIT_TOURNAMENT_START_DATE: 6004,
        EDIT_TOURNAMENT_DATE_HOLDER: 6005,
        EDIT_TOURNAMENT_END_DATE: 6006,
        EDIT_TOURNAMENT_PRIVATE_TITLE: 6007,
        EDIT_TOURNAMENT_PRIVATE_DESCR: 6008,
        EDIT_TOURNAMENT_GROUP_TITLE: 6009,
        EDIT_TOURNAMENT_GROUP_DESCR: 6010,
        EDIT_TOURNAMENT_GRID_TITLE: 6011,
        EDIT_TOURNAMENT_MAX_PEOPLE: 6012,
        EDIT_TOURNAMENT_RULES_TITLE: 6013,
        EDIT_TOURNAMENT_RULES_DESCR: 6014,
        EDIT_TOURNAMENT_IMG_TITLE: 6015,
        EDIT_TOURNAMENT_IMG_DESCR: 6016,
        EDIT_TOURNAMENT_IMG_ADD: 6017,
        EDIT_TOURNAMENT_IMG_ADD_TITLE: 6018,
        EDIT_TOURNAMENT_SAVE: 6019,
        EDIT_TOURNAMENT_DELETE: 6020,
        EDIT_TOURNAMENT_NEED_CHECK_ALL: 6021,

        TOURNAMENT_INFO_HOME_HEADER : 7000,
        TOURNAMENT_INFO_TAB_INFO : 7001,
        TOURNAMENT_INFO_TAB_GRID : 7002,
        TOURNAMENT_INFO_TAB_PARTICIPANTS : 7003,

        GRID_CREATOR_HEADER : 8000,

        //All modals
        MODAL_SELECT_AVATAR : 9000,
        MODAL_SELECT_AVATAR_OK : 9001,

        //All banners
        BANNER_CREATE_TITLE: 10000,
        BANNER_CREATE_YOUR_EMPTY: 10001,
        BANNER_CREATE_QUESTION: 10002,

        //All alerts
        ALERT_DECLINE : 1100,
        ALERT_CANCEL : 1101,
        ALERT_DELETE : 1102,
        ALERT_SAVE : 1103,
        ALERT_CONFIRM_ACTION : 1104,
        ALERT_DELETE_QUESTION : 1105,
        ALERT_INPUT_NEW_NICKNAME : 1106,
        ALERT_DECLINE_QUESTION : 1107,

        TOURNAMENTS_CREATED_HEADER: 12000,
        TOURNAMENTS_TAKING_PART_HEADER: 12001,
        TOURNAMENTS_RECOMMENDED_HEADER: 12002,
        TOURNAMENTS_GAME_NAME: 12003,
        TOURNAMENTS_GRID_TYPE: 12004,
        TOURNAMENTS_START_TIME: 12005,

        TOURNAMENT_INFO_HEADER: 13000,
        TOURNAMENT_DESCRIPTION: 13001,
        TOURNAMENT_NAME: 13002,
        TOURNAMENT_MAX_PARTICIPANTS: 13003,
        TOURNAMENT_START_DATE: 13004,
        TOURNAMENT_END_DATE: 13005,
        TOURNAMENT_ORGANIZER: 13006,
        TOURNAMENT_RULES: 13007,
        TOURNAMENT_TAKE_PART: 13008,
        TOURNAMENT_DECLINE: 13009,
        TOURNAMENT_EDIT: 13010,

        GRID_NOT_READY_YET: 14000,
        GRID_NOT_READY_YET_DESCRIPTION: 14001,
        CREATE_GRID_BUTTON_TITLE: 14002,

        [Constants.TournamentParams.GridType.SINGLE_ELIMINATION] : 15000,
        [Constants.TournamentParams.GroupType.SOLO] : 15001,
        [Constants.TournamentParams.GroupType.GROUP] : 15002,
        [Constants.TournamentParams.PrivateType.OPEN] : 15003,
        [Constants.TournamentParams.PrivateType.PRIVATE] : 15004,
    }

    static localeWords

    static setLocale(lang) {
        if (lang !== 'ru') {
            lang = 'ru'
        }

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
            [this.StrEnum.CREATE_GRID_BUTTON_TITLE, "Создать турнирную сетку"],

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

            [this.StrEnum.TOURNAMENT_INFO_HOME_HEADER, "Информация о турнире"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_INFO, "Информация"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_GRID, "Сетка"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_PARTICIPANTS, "Участники"],

            [this.StrEnum.GRID_CREATOR_HEADER, "Создание сетки"],
            [this.StrEnum.MODAL_SELECT_AVATAR, "Выберите аватар"],
            [this.StrEnum.MODAL_SELECT_AVATAR_OK, "Готово"],

            [this.StrEnum.BANNER_CREATE_TITLE, "Создать"],
            [this.StrEnum.BANNER_CREATE_YOUR_EMPTY, "Вы ещё не создали ни одного турнира"],
            [this.StrEnum.BANNER_CREATE_QUESTION, "Хотите создать?"],

            [this.StrEnum.ALERT_DECLINE, "Отказаться"],
            [this.StrEnum.ALERT_CANCEL, "Отмена"],
            [this.StrEnum.ALERT_DELETE, "Удалить"],
            [this.StrEnum.ALERT_SAVE, "Сохранить"],
            [this.StrEnum.ALERT_CONFIRM_ACTION, "Подтвердите действие"],
            [this.StrEnum.ALERT_DECLINE_QUESTION, "Вы уверены, что хотите отказаться от участия?"],
            [this.StrEnum.ALERT_DELETE_QUESTION, "Вы уверены, что хотите удалить турнир? Отменить это действие будет невозможно."],
            [this.StrEnum.ALERT_INPUT_NEW_NICKNAME, "Введите новый никнейм"],


        ])

        let en = new Map([
            [this.StrEnum.APP_NAME, "CyberArena"],
            [this.StrEnum.TOURNAMENT_TAB, "Tournaments"],
            [this.StrEnum.TAVERN_TAB, "Tavern"],
            [this.StrEnum.PROFILE_TAB, "Profile"],
            [this.StrEnum.NOTHING_HAS_FOUND, "Nothing found"],
            [this.StrEnum.PROFILE_AVATAR, "Avatar"],
            [this.StrEnum.PROFILE_DATE_OF_BIRTH, "Birth date"],
            [this.StrEnum.PROFILE_NICKNAME, "Nickname"],
            [this.StrEnum.PROFILE_INFO, "User info"],
            [this.StrEnum.PROFILE_GAMES, "Games"],
            [this.StrEnum.PROFILE_VK_LINK, "VK link"],
            [this.StrEnum.PROFILE_CITY, "City"],
            [this.StrEnum.TAVERN_NOT_READY, "Tavern is not available now"],
            [this.StrEnum.TAVERN_NOT_READY_DESCRIPTION, "You will be able to visit the tavern very soon, for now compete with other participants"],
            [this.StrEnum.TOURNAMENTS_CREATED_HEADER, "My tournaments"],
            [this.StrEnum.TOURNAMENTS_TAKING_PART_HEADER, "Tournaments I participate"],
            [this.StrEnum.TOURNAMENTS_RECOMMENDED_HEADER, "Recommended"],
            [this.StrEnum.TOURNAMENTS_GAME_NAME, "Game"],
            [this.StrEnum.TOURNAMENTS_GRID_TYPE, "Grid type"],
            [this.StrEnum.TOURNAMENTS_START_TIME, "Start"],
            [this.StrEnum.TOURNAMENT_INFO_HEADER, "Tournament info"],
            [this.StrEnum.TOURNAMENT_DESCRIPTION, "Description"],
            [this.StrEnum.TOURNAMENT_MAX_PARTICIPANTS, "Maximum number of participants"],
            [this.StrEnum.TOURNAMENT_START_DATE, "Start date"],
            [this.StrEnum.TOURNAMENT_END_DATE, "End date"],
            [this.StrEnum.TOURNAMENT_ORGANIZER, "Organizer"],
            [this.StrEnum.TOURNAMENT_RULES, "Rules"],
            [this.StrEnum.TOURNAMENT_TAKE_PART, "Participate"],
            [this.StrEnum.TOURNAMENT_DECLINE, "Refuse to participate"],
            [this.StrEnum.TOURNAMENT_EDIT, "Edit"],
            [this.StrEnum.TOURNAMENT_NAME, "Tournament name"],

            [this.StrEnum.GRID_NOT_READY_YET, "No grid yet"],
            [this.StrEnum.GRID_NOT_READY_YET_DESCRIPTION, "Come back later, grid is not ready yet"],
            [this.StrEnum.CREATE_GRID_BUTTON_TITLE, "Create a tournament grid"],

            [Constants.TournamentParams.GridType.SINGLE_ELIMINATION, "Single elimination"],
            [Constants.TournamentParams.GroupType.SOLO, "Solo"],
            [Constants.TournamentParams.GroupType.GROUP, "Team"],
            [Constants.TournamentParams.PrivateType.OPEN, "Open"],
            [Constants.TournamentParams.PrivateType.PRIVATE, "Private"],

            [this.StrEnum.CREATE_TOURNAMENT_TITLE, "Create tournament"],
            [this.StrEnum.EDIT_TOURNAMENT_TITLE, "Edit tournament"],
            [this.StrEnum.CREATE_TOURNAMENT_NAME, "Tournament name"],
            [this.StrEnum.EDIT_TOURNAMENT_NAME, "Tournament name"],
            [this.StrEnum.CREATE_TOURNAMENT_GAME_NAME, "Game"],
            [this.StrEnum.EDIT_TOURNAMENT_GAME_NAME, "Game"],
            [this.StrEnum.CREATE_TOURNAMENT_DESCRIPTION, "Tournament description"],
            [this.StrEnum.EDIT_TOURNAMENT_DESCRIPTION, "Tournament description"],
            [this.StrEnum.CREATE_TOURNAMENT_START_DATE, "Start date"],
            [this.StrEnum.EDIT_TOURNAMENT_START_DATE, "Start date"],
            [this.StrEnum.CREATE_TOURNAMENT_DATE_HOLDER, "Date"],
            [this.StrEnum.EDIT_TOURNAMENT_DATE_HOLDER, "Date"],
            [this.StrEnum.CREATE_TOURNAMENT_END_DATE, "End date"],
            [this.StrEnum.EDIT_TOURNAMENT_END_DATE, "End date"],
            [this.StrEnum.CREATE_TOURNAMENT_PRIVATE_TITLE, "Type of  event"],
            [this.StrEnum.EDIT_TOURNAMENT_PRIVATE_TITLE, "Type of event"],
            [this.StrEnum.CREATE_TOURNAMENT_PRIVATE_DESCR, "You can access to the private event only using the link."],
            [this.StrEnum.EDIT_TOURNAMENT_PRIVATE_DESCR, "You can access to the private event only using the link."],
            [this.StrEnum.CREATE_TOURNAMENT_GROUP_TITLE, "By the number of people"],
            [this.StrEnum.EDIT_TOURNAMENT_GROUP_TITLE, "By the number of people"],
            [this.StrEnum.CREATE_TOURNAMENT_GROUP_DESCR, "Team tournaments are not available now"],
            [this.StrEnum.EDIT_TOURNAMENT_GROUP_DESCR, "Team tournaments are not available now"],
            [this.StrEnum.CREATE_TOURNAMENT_GRID_TITLE, "Tournament grid"],
            [this.StrEnum.EDIT_TOURNAMENT_GRID_TITLE, "Tournament grid"],
            [this.StrEnum.CREATE_TOURNAMENT_MAX_PEOPLE, "Maximum number of participants"],
            [this.StrEnum.EDIT_TOURNAMENT_MAX_PEOPLE, "Maximum number of participants"],
            [this.StrEnum.CREATE_TOURNAMENT_RULES_TITLE, "Tournament rules"],
            [this.StrEnum.EDIT_TOURNAMENT_RULES_TITLE, "Tournament rules"],
            [this.StrEnum.CREATE_TOURNAMENT_RULES_DESCR, "You can indicate specific restrictions here"],
            [this.StrEnum.EDIT_TOURNAMENT_RULES_DESCR, "You can indicate specific restrictions here"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_TITLE, "Tournament cover"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_TITLE, "Tournament cover"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_DESCR, "It is forbidden to upload cover from device"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_DESCR, "It is forbidden to upload from device"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_ADD, "Add cover"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_ADD, "Edit cover"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_ADD_TITLE, "Add cover link"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_ADD_TITLE, "Add cover link"],
            [this.StrEnum.CREATE_TOURNAMENT_NEED_CHECK_ALL, "All fields must be filled"],
            [this.StrEnum.EDIT_TOURNAMENT_NEED_CHECK_ALL, "All fields must be filled"],
            [this.StrEnum.CREATE_TOURNAMENT_SAVE, "Save"],
            [this.StrEnum.EDIT_TOURNAMENT_DELETE, "Delete tournament"],

            [this.StrEnum.TOURNAMENT_INFO_HOME_HEADER, "Tournament info"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_INFO, "Info"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_GRID, "Grid"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_PARTICIPANTS, "Participants"],

            [this.StrEnum.GRID_CREATOR_HEADER, "Grid creation"],
            [this.StrEnum.MODAL_SELECT_AVATAR, "Choose the avatar"],
            [this.StrEnum.MODAL_SELECT_AVATAR_OK, "Done"],

            [this.StrEnum.BANNER_CREATE_TITLE, "Create"],
            [this.StrEnum.BANNER_CREATE_YOUR_EMPTY, "You haven't created any tournaments yet"],
            [this.StrEnum.BANNER_CREATE_QUESTION, "Do you want to create?"],

            [this.StrEnum.ALERT_DECLINE, "Refuse"],
            [this.StrEnum.ALERT_CANCEL, "Cancel"],
            [this.StrEnum.ALERT_DELETE, "Delete"],
            [this.StrEnum.ALERT_SAVE, "Save"],
            [this.StrEnum.ALERT_CONFIRM_ACTION, "Confirm action"],
            [this.StrEnum.ALERT_DECLINE_QUESTION, "Are you sure you want to delete the tournament? It will be impossible to undo this action."],
            [this.StrEnum.ALERT_DELETE_QUESTION, "Are you sure you want to refuse to participate?"],
            [this.StrEnum.ALERT_INPUT_NEW_NICKNAME, "Add new nickname"],


        ])

        switch (lang) {
            case 'en':
                this.localeWords = en;
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