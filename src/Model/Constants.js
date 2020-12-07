class Constants {
    static NUMBER_OF_HIGHLY_REC_TOURNAMENT = 5
    static MAX_NICKNAME_LENGTH = 25

    static Tabs = {
        HOME_TOURNAMENT : "HOME_TOURNAMENT",
        HOME_TAVERN : "HOME_TAVERN",
        HOME_PROFILE : "HOME_PROFILE",

        TOURNAMENT_INFO : "TOURNAMENT_INFO",
        TOURNAMENT_GRID : "TOURNAMENT_GRID",
        TOURNAMENT_PARTICIPANTS : "TOURNAMENT_PARTICIPANTS",
    }

    static Colors = {
        Dark : {
            CONTEXT_BUTTON : "#E2E3E7",
        },
        Gray : {

        },
    }

    static Panels = {
        HOME: "PANELS_HOME",
        TOURNAMENT_INFO_HOME : "PANELS_TOURNAMENT_INFO_HOME",
        PARTICIPANT_PROFILE : "PANELS_PARTICIPANT_PROFILE",
        GRID_CREATOR : "GRID_CREATOR"
    }

    static Modals = {
        CREATE_TOURNAMENT: "MODALS_CREATE_TOURNAMENT",
        EDIT_TOURNAMENT: "MODALS_EDIT_TOURNAMENT",
        CHANGE_AVATAR: "MODALS_CHANGE_AVATAR"
    }

    static TournamentsPreviewSize = {
        SMALL_QUAD : "TOURNAMENTS_PREVIEW_SIZE_SMALL_QUAD",
        MEDIUM : "TOURNAMENTS_PREVIEW_SIZE_MEDIUM",
        LARGE : "TOURNAMENTS_PREVIEW_SIZE_LARGE",
        XLARGE: "TOURNAMENTS_PREVIEW_SIZE_XLARGE",
    }


    static TournamentParams = {
        GridType : {
            SINGLE_ELIMINATION : "GRID_TYPE_SINGLE_ELIMINATION"
        },
        PrivateType : {
            OPEN : "PRIVATE_TYPE_OPEN",
            PRIVATE : "PRIVATE_TYPE_PRIVATE",
        },
        GroupType : {
            SOLO : "GROUP_TYPE_SOLO",
            GROUP : "GROUP_TYPE_GROUP",
        },
    };

    static UserStatus = {
        CREATOR : "CREATOR",
        PARTICIPANT : "PARTICIPANT",
        NOT_PARTICIPANT : "NOT_PARTICIPANT",
        ANYONE : "ANYONE"
    }
}

export default Constants