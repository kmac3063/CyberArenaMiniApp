import Gamepad from "../img/gamepad.png";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import React from "react";
import StrManager from "../Model/StrManager";

const TournamentBanner = ({buttonPressed}) => {
    return <Banner
        mode="image"
        header={StrManager.get(StrManager.StrEnum.BANNER_CREATE_YOUR_EMPTY)}
        subheader={StrManager.get(StrManager.StrEnum.BANNER_CREATE_QUESTION)}
        background={
            <div
                style={{
                    backgroundImage:  'linear-gradient(135deg, #4AB34C 0%, #34F038 100%)',
                    backgroundPosition: 'right bottom',
                    backgroundSize: "100%",
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${Gamepad})`,
                        backgroundPosition: 'right bottom',
                        backgroundSize: "50%",
                        backgroundRepeat: 'no-repeat',
                        height: "100%",
                        opacity: 0.25,
                    }}
                />
            </div>
        }
        actions={<Button mode="overlay_primary" onClick={buttonPressed}>
            {StrManager.get(StrManager.StrEnum.BANNER_CREATE_TITLE)}
        </Button>}
    />
}

export default TournamentBanner