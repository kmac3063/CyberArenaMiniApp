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
    }

    static Modals = {
        TOURNAMENT_CREATE_TOURNAMENT: "MODALS_TOURNAMENT_CREATE_TOURNAMENT",
        PROFILE_CHANGE_AVATAR: "MODALS_TOURNAMENT_CREATE_TOURNAMENT"
    }

    static TournamentsPreviewSize = {
        SMALL_QUAD : "TOURNAMENTS_PREVIEW_SIZE_SMALL_QUAD",
        MEDIUM : "TOURNAMENTS_PREVIEW_SIZE_MEDIUM",
        LARGE : "TOURNAMENTS_PREVIEW_SIZE_LARGE",
        XLARGE: "TOURNAMENTS_PREVIEW_SIZE_XLARGE",
    }

    static SelectValue = {
        TournamentGridType : {
            SINGLE_ELIMINATION : "TOURNAMENT_GRID_TYPE_SINGLE_ELIMINATION"
        },
        TournamentPrivateType : {
            OPEN : "TOURNAMENT_PRIVATE_TYPE_OPEN",
            PRIVATE : "TOURNAMENT_PRIVATE_TYPE_PRIVATE",
        }
    };

    static RadioValue = {
        TournamentGroupType : {
            SOLO : "TOURNAMENT_GROUP_TYPE_SOLO",
            GROUP : "TOURNAMENT_GROUP_TYPE_GROUP",
        },

    }
}

export default Constants