import React, {useState} from 'react';
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import {Button, ModalPage, Select, Textarea} from "@vkontakte/vkui";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const CreateTournament = ({id, out, onClose, create}) => {
    const [tourName, setTourName] = useState("Example");
    const [dateBegin1, setDateBegin1] = useState();
    const [dateBegin2, setDateBegin2] = useState();
    const [dateBegin3, setDateBegin3] = useState();
    const [dateEnd1, setDateEnd1] = useState();
    const [dateEnd2, setDateEnd2] = useState();
    const [dateEnd3, setDateEnd3] = useState();
    const [ruleText, setRuleText] = useState();
    const [tourType, setTourType] = useState();
    const [maxCommand, setMaxCommand] = useState();
    const [gameName, setGameName] = useState();
    const [tourDescription, setTourDescription] = useState();
    // const [price, setPrice] = useState();
    // const [prize, setPrize] = useState();

    const buildTour = () => {
        let prop = {};
        // prop.tourName = tourName;
        // prop.dateBegin = dateBegin1.toString() + '.' + dateBegin2.toString() + '.' + dateBegin3.toString();
        // prop.dateEnd = dateEnd1.toString() + '.' + dateEnd2.toString() + '.' + dateEnd3.toString();
        // prop.ruleText = ruleText;
        // prop.tourType = tourType;
        // prop.maxCommand = maxCommand;
        // prop.gameName = gameName;
        // prop.tourDescription = tourDescription;
        return prop;
    }

    //let games = DataBase.getGameList();
    return <ModalPage
        id={id}
        header={
            <ModalPageHeader
                left={<PanelHeaderButton onClick={out}><Icon24Cancel /></PanelHeaderButton>}
                right={<PanelHeaderButton onClick={() => create(buildTour())}> <Icon24Done /></PanelHeaderButton>}
            >
                Создание турнира
            </ModalPageHeader>
        }
    >
        <FormLayout>
            <FormLayoutGroup top="Название турнира">
                <Input type="text" onChange={(e) => setTourName(e.target.value)}/>
            </FormLayoutGroup>
            <FormLayoutGroup top="Игра">
                {/*<Select type="text">*/}
                {/*    {games.map((gameName) => {*/}
                {/*        return <option value ={gameName}>{gameName}</option>*/}
                {/*    })}*/}
                {/*</Select>*/}
                <Input type={"text"} onChange={(e) => setGameName(e.target.value)}/>
            </FormLayoutGroup>
            <FormLayout top="Описание турнира" onChange={(e) => setTourDescription(e.target.value)}>
                <Textarea/>
            </FormLayout>
            <FormLayoutGroup top="Дата начала">
                <Input placeholder="Число" type="number" onChange={(e) => setDateBegin1(e.target.value)}/>
                <Input placeholder="Месяц" type="number" onChange={(e) => setDateBegin2(e.target.value)}/>
                <Input placeholder="Год" type="number" onChange={(e) => setDateBegin3(e.target.value)}/>
            </FormLayoutGroup>
            <FormLayoutGroup top="Дата конца">
                <Input placeholder="Число" type="number" onChange={(e) => setDateEnd1(e.target.value)}/>
                <Input placeholder="Месяц" type="number" onChange={(e) => setDateEnd2(e.target.value)}/>
                <Input placeholder="Год" type="number" onChange={(e) => setDateEnd3 (e.target.value)}/>
            </FormLayoutGroup>


            <FormLayoutGroup top="Тип мероприятия"  bottom="В закрытое мероприятия можно попасть только по ссылке.">
                <Select type="text" onChange={(e) => setTourType(e.target.value === 1? "open" : "close")}>
                    <option value={1}>Открытое</option>
                    <option value={2}>Закрытое</option>
                </Select>
            </FormLayoutGroup>

            <FormLayout top={"По количеству людей"}>
                <div>
                    <Radio name="radio" defaultChecked>Одиночное</Radio>
                    <Radio  name="radio" disabled>Командое</Radio>
                </div>
            </FormLayout>

            <FormLayoutGroup top="Турнирная сетка">
                <Select type="text" placeholder="Выберите турнирную сетку">
                    <option>Single-elimination</option>
                </Select>
            </FormLayoutGroup>

            <FormLayoutGroup top="Максимальное количество участников">
                <Input type={"number"} onChange={(e) => setMaxCommand(e.target.value)}/>
            </FormLayoutGroup>

            <FormLayoutGroup top="">
            </FormLayoutGroup>
            <FormLayoutGroup top="Правила турнира" bottom={"Тут вы можете указать специфические ограничения."}>
                <Textarea onChange={(e) => setRuleText(e.target.value)}/>
            </FormLayoutGroup>
        </FormLayout>
        <Div onClick={() => create(buildTour())}>
            <Button size="xl" mode="commerce">Сохранить</Button>
        </Div>
    </ModalPage>
}

export default CreateTournament;