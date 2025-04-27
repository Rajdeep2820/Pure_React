// single selection
// multuple selection
import data from "./data"
import { useState } from "react"
import "./style.css"

export default function Accordian() {
    const [selected, SetSelected] = useState(null);
    const [EnableMultiSelection, SetEnableMultiSelection] = useState(false);
    const [multiple, SetMultiple] = useState([]);

    function handleSingleSelection(getcurrentId) {
        console.log(getcurrentId);
        SetSelected(getcurrentId === selected ? null : getcurrentId);
    }

    function handleMultiSelection(getcurrentId) {
        let cpyMultiple = [...multiple];
        const findIdxOfCurrId = cpyMultiple.indexOf(getcurrentId);
        console.log(findIdxOfCurrId);
        if (findIdxOfCurrId === -1) cpyMultiple.push(getcurrentId)
        else cpyMultiple.splice(findIdxOfCurrId, 1);

        SetMultiple(cpyMultiple);
    }
    return (
        <div className="wrapper">
            <button onClick={() => SetEnableMultiSelection(!EnableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => <div className="item" key={dataItem.id}>
                            <div onClick={EnableMultiSelection
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)
                            } className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                EnableMultiSelection
                                    ? multiple.indexOf(dataItem.id) != -1 &&
                                    (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                                    : selected === dataItem.id && (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                            }
                        </div>))
                        : <p>No data found!</p>
                }
            </div>
        </div>
    );
}