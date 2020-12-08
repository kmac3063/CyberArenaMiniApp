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

        let ge = new Map([
            [this.StrEnum.APP_NAME, "KünstlicheArena"],
            [this.StrEnum.TOURNAMENT_TAB, "Turniere"],
            [this.StrEnum.TAVERN_TAB, "Taverne"],
            [this.StrEnum.PROFILE_TAB, "Profil"],
            [this.StrEnum.NOTHING_HAS_FOUND, "Es wurde nichts gefunden"],
            [this.StrEnum.PROFILE_AVATAR, "Avatar"],
            [this.StrEnum.PROFILE_DATE_OF_BIRTH, "Geburtsdatum"],
            [this.StrEnum.PROFILE_NICKNAME, "Spitzname"],
            [this.StrEnum.PROFILE_INFO, "Benutzerinformation"],
            [this.StrEnum.PROFILE_GAMES, "Spiele"],
            [this.StrEnum.PROFILE_VK_LINK, "Link von Vkontakte"],
            [this.StrEnum.PROFILE_CITY, "Stadt"],
            [this.StrEnum.TAVERN_NOT_READY, "Taverne ist nicht verfügbar"],
            [this.StrEnum.TAVERN_NOT_READY_DESCRIPTION, "Bald können Sie die Taverne besuchen, aber vorers versuchen Sie mit anderen Teilnehmern im Wettbewerb zu stehen"],
            [this.StrEnum.TOURNAMENTS_CREATED_HEADER, "Meine Turniere"],
            [this.StrEnum.TOURNAMENTS_TAKING_PART_HEADER, "Meine Turnierteilnahmen"],
            [this.StrEnum.TOURNAMENTS_RECOMMENDED_HEADER, "Empfohlene Turniere"],
            [this.StrEnum.TOURNAMENTS_GAME_NAME, "Spiel"],
            [this.StrEnum.TOURNAMENTS_GRID_TYPE, "Typ der Turniertabelle"],
            [this.StrEnum.TOURNAMENTS_START_TIME, "Beginn"],
            [this.StrEnum.TOURNAMENT_INFO_HEADER, "Turnierinformation"],
            [this.StrEnum.TOURNAMENT_DESCRIPTION, "Beschreibung"],
            [this.StrEnum.TOURNAMENT_MAX_PARTICIPANTS, "Maximale Teilnehmerzahl"],
            [this.StrEnum.TOURNAMENT_START_DATE, "Beginnzeit"],
            [this.StrEnum.TOURNAMENT_END_DATE, "Endezeit"],
            [this.StrEnum.TOURNAMENT_ORGANIZER, "Veranstalter"],
            [this.StrEnum.TOURNAMENT_RULES, "Regeln"],
            [this.StrEnum.TOURNAMENT_TAKE_PART, "Teilnehmen"],
            [this.StrEnum.TOURNAMENT_DECLINE, "Verweigerung der Teilnahme"],
            [this.StrEnum.TOURNAMENT_EDIT, "Ändern"],
            [this.StrEnum.TOURNAMENT_NAME, "Name des Turniers"],

            [this.StrEnum.GRID_NOT_READY_YET, "Es gibt noch keine Turniertabelle"],
            [this.StrEnum.GRID_NOT_READY_YET_DESCRIPTION, "Kommen Sie später zurück, die Turniertabelle ist noch nicht gebildet"],
            [this.StrEnum.CREATE_GRID_BUTTON_TITLE, "Turniertabelle erstellen"],

            [Constants.TournamentParams.GridType.SINGLE_ELIMINATION, "KO-System"],
            [Constants.TournamentParams.GroupType.SOLO, "Single"],
            [Constants.TournamentParams.GroupType.GROUP, "Mannschaft"],
            [Constants.TournamentParams.PrivateType.OPEN, "Offen"],
            [Constants.TournamentParams.PrivateType.PRIVATE, "Geschlossen"],

            [this.StrEnum.CREATE_TOURNAMENT_TITLE, "Turnier erstellen"],
            [this.StrEnum.EDIT_TOURNAMENT_TITLE, "Turnier ändern"],
            [this.StrEnum.CREATE_TOURNAMENT_NAME, "Name des Turniers"],
            [this.StrEnum.EDIT_TOURNAMENT_NAME, "Name des Turniers"],
            [this.StrEnum.CREATE_TOURNAMENT_GAME_NAME, "Spiel"],
            [this.StrEnum.EDIT_TOURNAMENT_GAME_NAME, "Spiel"],
            [this.StrEnum.CREATE_TOURNAMENT_DESCRIPTION, "Beschreibung des Turniers"],
            [this.StrEnum.EDIT_TOURNAMENT_DESCRIPTION, "Beschreibung des Turniers"],
            [this.StrEnum.CREATE_TOURNAMENT_START_DATE, "Beginnzeit"],
            [this.StrEnum.EDIT_TOURNAMENT_START_DATE, "Beginnzeit"],
            [this.StrEnum.CREATE_TOURNAMENT_DATE_HOLDER, "Datum"],
            [this.StrEnum.EDIT_TOURNAMENT_DATE_HOLDER, "Datum"],
            [this.StrEnum.CREATE_TOURNAMENT_END_DATE, "Endezeit"],
            [this.StrEnum.EDIT_TOURNAMENT_END_DATE, "Endezeit"],
            [this.StrEnum.CREATE_TOURNAMENT_PRIVATE_TITLE, "Typ der Veranstaltung"],
            [this.StrEnum.EDIT_TOURNAMENT_PRIVATE_TITLE, "Typ der Veranstaltung"],
            [this.StrEnum.CREATE_TOURNAMENT_PRIVATE_DESCR, "Die geschlossene Veranstaltung kann man nur per Link beitreten."],
            [this.StrEnum.EDIT_TOURNAMENT_PRIVATE_DESCR, "Die geschlossene Veranstaltung kann man nur per Link beitreten."],
            [this.StrEnum.CREATE_TOURNAMENT_GROUP_TITLE, "Nach der Anzahl der Personen"],
            [this.StrEnum.EDIT_TOURNAMENT_GROUP_TITLE, "Nach der Anzahl der Personen"],
            [this.StrEnum.CREATE_TOURNAMENT_GROUP_DESCR, "Mannschaftsturniere sind noch nicht verfügbar"],
            [this.StrEnum.EDIT_TOURNAMENT_GROUP_DESCR, "Mannschaftsturniere sind noch nicht verfügbar"],
            [this.StrEnum.CREATE_TOURNAMENT_GRID_TITLE, "Turniertabelle"],
            [this.StrEnum.EDIT_TOURNAMENT_GRID_TITLE, "Turniertabelle"],
            [this.StrEnum.CREATE_TOURNAMENT_MAX_PEOPLE, "Maximale Teilnehmerzahl"],
            [this.StrEnum.EDIT_TOURNAMENT_MAX_PEOPLE, "Maximale Teilnehmerzahl"],
            [this.StrEnum.CREATE_TOURNAMENT_RULES_TITLE, "Turnierregeln"],
            [this.StrEnum.EDIT_TOURNAMENT_RULES_TITLE, "Turnierregeln"],
            [this.StrEnum.CREATE_TOURNAMENT_RULES_DESCR, "Hier können Sie spezifische Einschränkungen festlegen"],
            [this.StrEnum.EDIT_TOURNAMENT_RULES_DESCR, "Hier können Sie spezifische Einschränkungen festlegen"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_TITLE, "Turniercover"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_TITLE, "Turniercover"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_DESCR, "Das Herunterladen des Covers vom Gerät ist verboten"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_DESCR, "Das Herunterladen des Covers vom Gerät ist verboten"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_ADD, "Cover hinzufügen"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_ADD, "Cover ändern"],
            [this.StrEnum.CREATE_TOURNAMENT_IMG_ADD_TITLE, "Geben Sie Link vom Cover an"],
            [this.StrEnum.EDIT_TOURNAMENT_IMG_ADD_TITLE, "Geben Sie Link vom Cover an"],
            [this.StrEnum.CREATE_TOURNAMENT_NEED_CHECK_ALL, "Alle Felder müssen ausgefüllt sein"],
            [this.StrEnum.EDIT_TOURNAMENT_NEED_CHECK_ALL, "Alle Felder müssen ausgefüllt sein"],
            [this.StrEnum.CREATE_TOURNAMENT_SAVE, "Speichern"],
            [this.StrEnum.EDIT_TOURNAMENT_DELETE, "Turnier löschen"],

            [this.StrEnum.TOURNAMENT_INFO_HOME_HEADER, "Turnierinformation"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_INFO, "Information"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_GRID, "Tabelle"],
            [this.StrEnum.TOURNAMENT_INFO_TAB_PARTICIPANTS, "Teilnehmer"],

            [this.StrEnum.GRID_CREATOR_HEADER, "Erstellung der Turniertabelle"],
            [this.StrEnum.MODAL_SELECT_AVATAR, "Wählen Sie einen Avatar"],
            [this.StrEnum.MODAL_SELECT_AVATAR_OK, "OK"],

            [this.StrEnum.BANNER_CREATE_TITLE, "Erstellen"],
            [this.StrEnum.BANNER_CREATE_YOUR_EMPTY, "Sie haben noch kein Turnier erstellt"],
            [this.StrEnum.BANNER_CREATE_QUESTION, "Möchten Sie es erstellen?"],

            [this.StrEnum.ALERT_DECLINE, "Verweigern"],
            [this.StrEnum.ALERT_CANCEL, "Abbrechen"],
            [this.StrEnum.ALERT_DELETE, "Löschen"],
            [this.StrEnum.ALERT_SAVE, "Speichern"],
            [this.StrEnum.ALERT_CONFIRM_ACTION, "Bestätigen"],
            [this.StrEnum.ALERT_DECLINE_QUESTION, "Sind Sie sicher, dass Sie sich weigern möchten, daran teilzunehmen?"],
            [this.StrEnum.ALERT_DELETE_QUESTION, "Sind Sie sicher, dass Sie das Turnier löschen möchten? Es wird danach nicht möglich, diese Operation abzubrechen."],
            [this.StrEnum.ALERT_INPUT_NEW_NICKNAME, "Geben Sie neuen Spitznamen ein"],


        ])

        let en = {}

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