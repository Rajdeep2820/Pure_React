// single selection
// multuple selection
import data from "./data"
import {useState} from "react"
import "./style.css"

export default function Accordian() {
    const[selected , SetSelected] = useState(null);
    
    function handleSingleSelection(getcurrentId){
        console.log(getcurrentId);
        SetSelected(getcurrentId === selected ? null : getcurrentId);
    }
    return (
        <div className="wrapper">
            <button>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?(
                        data.map((dataItem) => <div className="item" key={dataItem.id}>
                            <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ? 
                                <div className="content">{dataItem.answer}</div>
                                : (null)
                            }
                        </div>))
                        : <p>No data found!</p>
                }
            </div>
        </div>
    );
}