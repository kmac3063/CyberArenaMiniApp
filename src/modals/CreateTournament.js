import React, {useCallback, useEffect, useState} from 'react';
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import {Avatar, Button, Group, ModalPage, Select, Textarea} from "@vkontakte/vkui";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Data from "../Model/Data";
import Constants from "../Model/Constants";
import Icon24Camera from "@vkontakte/icons/dist/24/camera";
import StrManager from "../Model/StrManager";
import File from "@vkontakte/vkui/dist/components/File/File";
import ImageCard from "../Componentns/ImageCard";
import TournamentInfo from "../img/400x240_tournament_preview.png";
import Helper from "../Model/Helper";

const CreateTournament = ({id, out, onClose, create, gameUser}) => {
    // const [name, setName] = useState("Example");
    // const [dateBegin, setDateBegin] = useState();
    // const [dateEnd, setDateEnd] = useState();
    // const [rules, setRules] = useState();
    // const [groupType, setGroupType] = useState(Constants.RadioValue.TournamentGroupType.SOLO);
    // const [gridType, setGridType] = useState(Constants.SelectValue.TournamentGridType.SINGLE_ELIMINATION);
    // const [privateType, setPrivateType] = useState(Constants.SelectValue.TournamentPrivateType.OPEN);
    // const [maxCommand, setMaxCommand] = useState(2);
    // const [gameName, setGameName] = useState();
    // const [tourDescription, setTourDescription] = useState();
    // const [imageURL, setImageURL] = useState();

    const [name, setName] = useState("Example");
    const [dateBegin, setDateBegin] = useState("2020-01-01");
    const [dateEnd, setDateEnd] = useState("2020-12-31");
    const [rules, setRules] = useState("Test rule text");
    const [groupType, setGroupType] = useState(Constants.TournamentParams.GroupType.SOLO);
    const [gridType, setGridType] = useState(Constants.TournamentParams.GridType.SINGLE_ELIMINATION);
    const [privateType, setPrivateType] = useState(Constants.TournamentParams.PrivateType.OPEN);
    const [maxCommand, setMaxCommand] = useState(2);
    const [gameName, setGameName] = useState('HearthStone');
    const [description, setDescription] = useState("Test tour description");
    const [imageURL, setImageURL] = useState(null);
    const [image, setImage] = useState();

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
        imageURL,
        image])
    // const [price, setPrice] = useState();
    // const [prize, setPrize] = useState();

    const buildTour = () => {
        let prop = {};
        prop.creatorId = gameUser.id
        prop.name = name
        prop.dateBegin = dateBegin
        prop.dateEnd = dateEnd
        prop.rules = rules
        prop.groupType = groupType
        prop.gridType = gridType
        prop.privateType = privateType
        prop.maxCommand = maxCommand
        prop.gameName = gameName
        prop.description = description
        prop.img = image
        prop.imgURL = imageURL
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
        create(buildTour())
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
                    left={<PanelHeaderButton onClick={out}><Icon24Cancel /></PanelHeaderButton>}
                    right={allRequireFieldChecked ?
                        <PanelHeaderButton onClick={saveButtonClicked}>
                            <Icon24Done/>
                        </PanelHeaderButton> :
                        <PanelHeaderButton disabled><Icon24Done/></PanelHeaderButton>}>
                    {StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_TITLE)}
                </ModalPageHeader>
            }
            onClose={out}
        >

        <FormLayout>
            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_NAME)}>
                <Input type="text"
                       value={name}
                       onChange={(e) => {
                            setName(e.target.value)}}
                />
            </FormLayoutGroup>
            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_GAME_NAME)}>
                <Select value={gameName}
                        onChange={(e) => {
                            setGameName(e.target.value)}}
                >
                    {games.map((game) => {
                        return <option key={game.id} value ={game.name}>{game.name}</option>
                    })}
                </Select>
            </FormLayoutGroup>
            <FormLayout top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_DESCRIPTION)}>
                <Textarea
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)}}
                />
            </FormLayout>
            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_START_DATE)}>
                <Input placeholder={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_DATE_HOLDER)} type="date"
                       value={dateBegin}
                       onChange={(e) => {
                           setDateBegin(e.target.value)
                       }}
                       onBlur={onDateBeginBlur}/>
            </FormLayoutGroup>
            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_END_DATE)}>
                <Input placeholder={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_DATE_HOLDER)} type="date"
                       value={dateEnd}
                       onChange={(e) => {
                           setDateEnd(e.target.value)
                       }}
                       onBlur={onDateEndBlur}
                />
            </FormLayoutGroup>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_PRIVATE_TITLE)}
                             bottom={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_PRIVATE_DESCR)}>
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

            <FormLayout top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_GROUP_TITLE)}
                        value={groupType}
                        onChange={(e) => {
                            setGroupType(e.target.value)
                        }}>
                <Div style={{padding: 0}}>
                    <Radio name="radio"
                           value = {Constants.TournamentParams.GroupType.SOLO}
                           defaultChecked>
                        {StrManager.get(Constants.TournamentParams.GroupType.SOLO)}
                    </Radio>
                    <Radio name="radio"
                           value = {Constants.TournamentParams.GroupType.GROUP}
                           disabled
                           description={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_GROUP_DESCR)}>
                        {StrManager.get(Constants.TournamentParams.GroupType.GROUP)}
                    </Radio>
                </Div>
            </FormLayout>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_GRID_TITLE)}>
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

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_MAX_PEOPLE)}>
                <Input type={"number"}
                       value={maxCommand}
                       onChange={(e) => {setMaxCommand(e.target.value)}}
                        onBlur={() => {maxCommand < 2 ? setMaxCommand(2) : null}}
                />
            </FormLayoutGroup>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_RULES_TITLE)}
                             bottom={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_RULES_DESCR)}
            >
                <Textarea
                    value={rules}
                    onChange={(e) => {
                        setRules(e.target.value)
                    }}/>
            </FormLayoutGroup>

            <FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_IMG_TITLE)}>
                <File before={<Icon24Camera />} controlSize="xl" onChange={imageChange}>
                    {StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_IMG_ADD)}
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
            {/*<FormLayoutGroup top={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_IMG_TITLE)} >*/}
            {/*    <Button before={<Icon24Camera/>} size="l">*/}
            {/*        {StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_IMG_ADD)}*/}
            {/*    </Button>*/}

            {/*    */}

            {/*    <Input*/}
            {/*        placeholder={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_IMG_ADD_TITLE)}*/}
            {/*           type="text"*/}
            {/*           value={imageURL}*/}
            {/*           onChange={(e) => {*/}
            {/*               setImageURL(e.target.value)}*/}
            {/*           }*/}
            {/*    />*/}
            {/*</FormLayoutGroup>*/}
        </FormLayout>
        <Div> {allRequireFieldChecked ?
            <Button size="xl" mode="commerce"
                 onClick={saveButtonClicked}>
                {StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_SAVE)}
            </Button>
            :
            <Group description={StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_NEED_CHECK_ALL)}>
                <Button size="xl" mode="commerce"
                        onClick={() => create(buildTour())}
                        disabled>
                    {StrManager.get(StrManager.StrEnum.CREATE_TOURNAMENT_SAVE)}
                </Button>
            </Group>

        }</Div>
    </ModalPage>
}

export default CreateTournament;