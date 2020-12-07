import React, {useCallback, useEffect, useState} from 'react';
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import {Button, Group, ModalPage, Select, Textarea} from "@vkontakte/vkui";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Data from "../Model/Data";
import Constants from "../Model/Constants";
import Icon24Camera from "@vkontakte/icons/dist/24/camera";
import ConfirmDeleteTournament from "../alerts/ConfirmDeleteTournament";
import StrManager from "../Model/StrManager";
import File from "@vkontakte/vkui/dist/components/File/File";
import ImageCard from "../Componentns/ImageCard";
import TournamentInfo from "../img/400x240_tournament_preview.png";
import Helper from "../Model/Helper";

const EditTournament = ({id, tournament, saveTournament,
                            deleteTournament, onClose, setPopout}) => {
    const [name, setName] = useState(tournament.name);
    const [dateBegin, setDateBegin] = useState(tournament.dateBegin);
    const [dateEnd, setDateEnd] = useState(tournament.dateEnd);
    const [rules, setRules] = useState(tournament.rules);
    const [groupType, setGroupType] = useState(Constants.TournamentParams.GroupType.SOLO);
    const [gridType, setGridType] = useState(Constants.TournamentParams.GridType.SINGLE_ELIMINATION);
    const [privateType, setPrivateType]
        = useState(tournament.groupType);
    const [maxCommand, setMaxCommand] = useState(tournament.maxCommand);
    const [gameName, setGameName] = useState(tournament.gameName);
    const [description, setDescription] = useState(tournament.description);
    const [imageURL, setImageURL] = useState(tournament.imgURL);
    const [image, setImage] = useState(tournament.image)

    const [allRequireFieldChecked, setAllRequireFieldChecked] = useState(false);

    useEffect(() => {
        checkAllRequireField()
    }, [name,
        dateBegin,
        dateEnd,
        rules,
        groupType,
        gridType,
        privateType,
        maxCommand,
        gameName,
        description,
        image,
        imageURL])
    // const [price, setPrice] = useState();
    // const [prize, setPrize] = useState();

    const buildTour = () => {
        let prop = {};
        prop.name = name
        prop.dateBegin = dateBegin
        prop.dateEnd = dateEnd
        prop.rules = rules
        prop.tourGroupType = groupType
        prop.tourGridType = gridType
        prop.tourPrivateType = privateType
        prop.maxCommand = maxCommand
        prop.gameName = gameName
        prop.description = description
        prop.image = image
        prop.imageURL = imageURL
        return prop;
    }

    const games = Data.getGameList();

    const onDateBeginBlur = () => {
        if (dateEnd && dateBegin && new Date(dateEnd).valueOf() < new Date(dateBegin)) {
            setDateEnd(dateBegin)
        }
    }

    const checkAllRequireField = () => {
        setAllRequireFieldChecked(
            name && name.length > 0 &&
            dateBegin && dateBegin.length > 0 &&
            dateEnd && dateEnd.length > 0 &&
            rules && rules.length > 0 &&
            groupType && groupType.length > 0 &&
            gameName && gameName.length > 0 &&
            description && description.length > 0 &&
            image)
    }

    //useCallback(() => {setAllRequireFieldChecked(imageURL && imageURL.length > 0)}, [imageURL])

    const onDateEndBlur = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let date = yyyy + '-' + mm + '-' + dd;

        if (dateBegin && new Date(date).valueOf() < new Date(dateBegin).valueOf())
            date = dateBegin
        if (dateEnd && new Date(dateEnd).valueOf() < new Date(date).valueOf())
            setDateEnd(date)
    }

    const saveButtonClicked = () => {
        saveTournament(buildTour())
        onClose()
    }

    const imageChange = (e) => {
        if (e && e.target && e.target.files && e.target.files[0]) {
            let tempImage = e.target.files[0]
            setImage(tempImage)
            Helper.convertImageToURL(tempImage, setImageURL)
        }
    }

    return <ModalPage
        id={id}
        header={
            <ModalPageHeader
                left={<PanelHeaderButton onClick={onClose}><Icon24Cancel /></PanelHeaderButton>}
                right={allRequireFieldChecked ?
                    <PanelHeaderButton onClick={saveButtonClicked}>
                        <Icon24Done/>
                    </PanelHeaderButton> :
                    <PanelHeaderButton disabled><Icon24Done/></PanelHeaderButton>}>
                {StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_TITLE)}
            </ModalPageHeader>
        }
        onClose={onClose}
    >

        <FormLayout>
            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_NAME)}>
                <Input type="text"
                       value={name}
                       disabled
                />
            </FormLayoutGroup>
            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_GAME_NAME)}>
                <Select value={gameName}
                        disabled
                >
                    {games.map((game) => {
                        return <option key={game.id} value ={game.name}>{game.name}</option>
                    })}
                </Select>
            </FormLayoutGroup>
            <FormLayout top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_DESCRIPTION)}>
                <Textarea
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)}}
                />
            </FormLayout>
            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_START_DATE)}>
                <Input placeholder={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_DATE_HOLDER)} type="date"
                       value={dateBegin}
                       onChange={(e) => {
                           setDateBegin(e.target.value)
                       }}
                       onBlur={onDateBeginBlur}/>
            </FormLayoutGroup>
            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_END_DATE)}>
                <Input placeholder={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_DATE_HOLDER)} type="date"
                       value={dateEnd}
                       onChange={(e) => {
                           setDateEnd(e.target.value)
                       }}
                       onBlur={onDateEndBlur}
                />
            </FormLayoutGroup>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_PRIVATE_TITLE)}
                             bottom={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_PRIVATE_DESCR)}>
                <Select type="text"
                        value={privateType}
                        onChange={(e) => {
                            setPrivateType(e.target.value)
                        }}>
                    <option value={Constants.TournamentParams.PrivateType.OPEN}
                            defaultChecked>
                        {StrManager.get(Constants.TournamentParams.PrivateType.OPEN)}
                    </option>
                    <option value={Constants.TournamentParams.PrivateType.PRIVATE}>
                        {StrManager.get(Constants.TournamentParams.PrivateType.PRIVATE)}
                    </option>
                </Select>
            </FormLayoutGroup>

            <FormLayout top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_GROUP_TITLE)}
                        value={groupType}
                        disabled>
                <Div style={{padding: 0}}>
                    <Radio name="radio"
                           value = {Constants.TournamentParams.GroupType.SOLO}
                           defaultChecked>
                        {StrManager.get(Constants.TournamentParams.GroupType.SOLO)}
                    </Radio>
                    <Radio name="radio"
                           value = {Constants.TournamentParams.GroupType.GROUP}
                           disabled
                           description={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_GROUP_DESCR)}>
                        {StrManager.get(Constants.TournamentParams.GroupType.GROUP)}
                    </Radio>
                </Div>
            </FormLayout>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_GRID_TITLE)}>
                <Select type="text"
                        value={gridType}
                        onChange={(e) => {
                            setGridType(e.target.value)
                        }}>
                    <option defaultChecked value={Constants.TournamentParams.GridType.SINGLE_ELIMINATION}>
                        {StrManager.get(Constants.TournamentParams.GridType.SINGLE_ELIMINATION)}
                    </option>
                </Select>
            </FormLayoutGroup>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_MAX_PEOPLE)}>
                <Input type={"number"}
                       value={maxCommand}
                       onChange={(e) => {setMaxCommand(e.target.value)}}
                       onBlur={() => {maxCommand < 2 ? setMaxCommand(2) : null}}
                />
            </FormLayoutGroup>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_RULES_TITLE)}
                             bottom={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_RULES_DESCR)}
            >
                <Textarea
                    value={rules}
                    disabled/>
            </FormLayoutGroup>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_IMG_TITLE)}>
                <File before={<Icon24Camera />} controlSize="xl" onChange={imageChange}>
                    {StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_IMG_ADD)}
                </File>
            </FormLayoutGroup>

            <Div style={{
                marginTop: 0,
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "0 16px",
                display: "flex",
                justifyContent: "center",
                objectFit: "cover"}}>
                <ImageCard url={imageURL ? imageURL : TournamentInfo}
                           height={120}
                           width={"100%"}/>
            </Div>
        </FormLayout>
        <Div>
            <Button size="xl" mode="destructive"
                    onClick={() => setPopout(<ConfirmDeleteTournament
                        deleteButtonClicked={deleteTournament}
                        setPopout={setPopout}/>)}>
                {StrManager.get(StrManager.StrEnum.EDIT_TOURNAMENT_DELETE)}
            </Button>
       </Div>
    </ModalPage>
}

export default EditTournament;