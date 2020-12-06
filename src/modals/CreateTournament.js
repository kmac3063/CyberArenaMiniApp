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

const CreateTournament = ({id, out, close, create}) => {
    // const [tourName, setTourName] = useState("Example");
    // const [dateBegin, setDateBegin] = useState();
    // const [dateEnd, setDateEnd] = useState();
    // const [ruleText, setRuleText] = useState();
    // const [tourGroupType, setTourGroupType] = useState(Constants.RadioValue.TournamentGroupType.SOLO);
    // const [tourGridType, setTourGridType] = useState(Constants.SelectValue.TournamentGridType.SINGLE_ELIMINATION);
    // const [tourPrivateType, setTourPrivateType] = useState(Constants.SelectValue.TournamentPrivateType.OPEN);
    // const [maxCommand, setMaxCommand] = useState(2);
    // const [gameName, setGameName] = useState();
    // const [tourDescription, setTourDescription] = useState();
    // const [imageURL, setImageURL] = useState();

    const [tourName, setTourName] = useState("Example");
    const [dateBegin, setDateBegin] = useState("2020-01-01");
    const [dateEnd, setDateEnd] = useState("2020-12-31");
    const [ruleText, setRuleText] = useState("Test rule text");
    const [tourGroupType, setTourGroupType] = useState(Constants.RadioValue.TournamentGroupType.SOLO);
    const [tourGridType, setTourGridType] = useState(Constants.SelectValue.TournamentGridType.SINGLE_ELIMINATION);
    const [tourPrivateType, setTourPrivateType] = useState(Constants.SelectValue.TournamentPrivateType.OPEN);
    const [maxCommand, setMaxCommand] = useState(2);
    const [gameName, setGameName] = useState('HearthStone');
    const [tourDescription, setTourDescription] = useState("Test tour description");
    const [imageURL, setImageURL] = useState();

    const [allRequireFieldChecked, setAllRequireFieldChecked] = useState(false);

    useEffect(() => {
        checkAllRequireField()
    }, [tourName,
        dateBegin,
        dateEnd,
        ruleText,
        tourGroupType,
        tourGridType,
        tourPrivateType,
        maxCommand,
        gameName,
        tourDescription,
        imageURL])
    // const [price, setPrice] = useState();
    // const [prize, setPrize] = useState();

    const buildTour = () => {
        let prop = {};
        prop.tourName = tourName || !tourName.length ? "Tournament Name" : tourName
        prop.dateBegin = normalizeDate(dateBegin)
        prop.dateEnd = normalizeDate(dateEnd)
        prop.ruleText = ruleText
        prop.tourGroupType = tourGroupType
        prop.tourGridType = tourGridType
        prop.tourPrivateType = tourPrivateType
        prop.maxCommand = maxCommand
        prop.gameName = gameName
        prop.tourDescription = tourDescription
        prop.imageURL = imageURL
        return prop;
    }

    const games = Data.getGameList();

    const maxDate = (a, b) => {
        return (a.valueOf() < b.valueOf() ? b : a)
    }

    const normalizeDate = (d) => {
        //YYYY-MM-DD HH:MI:SS
        return d + " 00:00:00"
    }

    const onDateBeginBlur = () => {
        if (dateEnd && dateBegin && new Date(dateEnd).valueOf() < new Date(dateBegin)) {
            setDateEnd(dateBegin)
        }
    }

    const checkAllRequireField = () => {
        setAllRequireFieldChecked(
            tourName && tourName.length > 0 &&
            dateBegin && dateBegin.length > 0 &&
            dateEnd && dateEnd.length > 0 &&
            ruleText && ruleText.length > 0 &&
            tourGroupType && tourGroupType.length > 0 &&
            gameName && gameName.length > 0 &&
            tourDescription && tourDescription.length > 0 &&
            imageURL && imageURL.length > 0)
    }

    useCallback(() => {setAllRequireFieldChecked(imageURL && imageURL.length > 0)}, [imageURL])

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
        close()
    }

    return <ModalPage
            id={id}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={() => {
                        // out(buildTour()) сохраняем до следующего открытия
                        close()
                    }}><Icon24Cancel /></PanelHeaderButton>}
                    right={allRequireFieldChecked ?
                        <PanelHeaderButton onClick={saveButtonClicked}>
                            <Icon24Done/>
                        </PanelHeaderButton> :
                        <PanelHeaderButton disabled><Icon24Done/></PanelHeaderButton>}>
                    Создание турнира
                </ModalPageHeader>
            }
            onClose={out}
        >

        <FormLayout>
            <FormLayoutGroup top="Название турнира">
                <Input type="text"
                       value={tourName}
                       onChange={(e) => {
                            setTourName(e.target.value)}}
                />
            </FormLayoutGroup>
            <FormLayoutGroup top="Игра">
                <Select value={gameName}
                        onChange={(e) => {
                            setGameName(e.target.value)}}
                >
                    {games.map((game) => {
                        return <option key={game.id} value ={game.name}>{game.name}</option>
                    })}
                </Select>
            </FormLayoutGroup>
            <FormLayout top="Описание турнира">
                <Textarea
                    value={tourDescription}
                    onChange={(e) => {
                        setTourDescription(e.target.value)}}
                />
            </FormLayout>
            <FormLayoutGroup top="Дата начала">
                <Input placeholder="Число" type="date"
                       value={dateBegin}
                       onChange={(e) => {
                           setDateBegin(e.target.value)
                       }}
                       onBlur={onDateBeginBlur}/>
            </FormLayoutGroup>
            <FormLayoutGroup top="Дата конца">
                <Input placeholder="Число" type="date"
                       value={dateEnd}
                       onChange={(e) => {
                           setDateEnd(e.target.value)
                       }}
                       onBlur={onDateEndBlur}
                />
            </FormLayoutGroup>

            <FormLayoutGroup top="Тип мероприятия"  bottom="В закрытое мероприятия можно попасть только по ссылке.">
                <Select type="text"
                        value={tourPrivateType}
                        onChange={(e) => {
                            setTourPrivateType(e.target.value)
                        }}>
                    <option value={Constants.SelectValue.TournamentPrivateType.OPEN}
                            defaultChecked>Открытое</option>
                    <option value={Constants.SelectValue.TournamentPrivateType.PRIVATE}>Закрытое</option>
                </Select>
            </FormLayoutGroup>

            <FormLayout top={"По количеству людей"}
                        value={tourGroupType}
                        onChange={(e) => {
                            setTourGroupType(e.target.value)
                        }}>
                <Div style={{padding: 0}}>
                    <Radio name="radio"
                           value = {Constants.RadioValue.TournamentGroupType.SOLO}
                           defaultChecked>Одиночное</Radio>
                    <Radio name="radio"
                           value = {Constants.RadioValue.TournamentGroupType.GROUP}
                           disabled
                           description={"Турниры командного типа пока недоступны"}>Командое</Radio>
                </Div>
            </FormLayout>

            <FormLayoutGroup top="Турнирная сетка">
                <Select type="text"
                        value={tourGridType}
                        onChange={(e) => {
                            setTourGridType(e.target.value)
                        }}>
                    <option defaultChecked value={Constants.SelectValue.TournamentGridType.SINGLE_ELIMINATION}>
                        Single-elimination</option>
                </Select>
            </FormLayoutGroup>

            <FormLayoutGroup top="Максимальное количество участников">
                <Input type={"number"}
                       value={maxCommand}
                       onChange={(e) => {setMaxCommand(e.target.value)}}
                        onBlur={() => {maxCommand < 2 ? setMaxCommand(2) : null}}
                />
            </FormLayoutGroup>

            <FormLayoutGroup top="Правила турнира" bottom={"Тут вы можете указать специфические ограничения."}>
                <Textarea
                    value={ruleText}
                    onChange={(e) => {
                        setRuleText(e.target.value)
                    }}/>
            </FormLayoutGroup>

            <FormLayoutGroup top="Обложка турнира" >
                <Group description={"Загружать обложку с устройства запрещено"}>
                    <Button before={<Icon24Camera/>} size="l" disabled>
                        Добавить обложку</Button>
                </Group>
                <Input placeholder="Укажите ссылку на обложку" type="text"
                       value={imageURL}
                       onChange={(e) => {
                           setImageURL(e.target.value)}
                       }
                />
            </FormLayoutGroup>
        </FormLayout>
        <Div> {allRequireFieldChecked ?
            <Button size="xl" mode="commerce"
                 onClick={saveButtonClicked}>Сохранить</Button>
            :
            <Group description={"Необходимо заполнить все поля"}>
                <Button size="xl" mode="commerce"
                        onClick={() => create(buildTour())}
                        disabled>Сохранить</Button>
            </Group>

        }</Div>
    </ModalPage>
}

export default CreateTournament;