import React, { useEffect, useState } from "react";
import "./index.scss";
import CSVInterface from "../../Components/CSVLoader"

import Service from "../../Service";


const History = () => {

    const service = new Service()

    const [data, setData] = useState(JSON.parse(localStorage.getItem("cached_data")))

    const [change, onChange] = useState(true)
    const [searchText, setSearchText] = useState("")
    const [showFilters, setShowingFilters] = useState(false)
    const [ch, setch] = useState(Number(localStorage.getItem('chosen')))

    function changeArray(arr){
        setData(arr)
        localStorage.setItem("cached_data", JSON.stringify(arr))
        onChange(!change)
    }

    function onFavoriteClick(i){
        localStorage.setItem("chosen", i)
        setch(i)
    }

    function onRemoveClick(props){
        
        let index = 0;
        data.forEach((item, i) => {
            if(item.time === props.time){
                index = i
                return
            }
        })
        changeArray(data.filter((item, i) => {
            let ff = item
            return i !== index 
        }))
        localStorage.setItem("chosen", 0)
        setch(0)
    }

    function onSearchText(text){
        setSearchText(text)
        changeArray(
            data.filter(item => {
                return item.date.includes(text)
            })
        )
    }

    const onAdded = (arr) => {
        setData(JSON.parse(localStorage.getItem("cached_data")))
        service.upload(arr).then(()=>{window.location.reload()})
        
    }
    // useEffect(()=>{}, data)
    const output = data.map((props,i) => 
        <div className="history__archived__route" key={i}>
            <div className="history__archived__route__wrapper__header">
                <div className="history__archived__route__filename">{props.filename}</div>
                <div className="history__archived__route__wrapper__icons">
                    <img alt="" onClick={()=>{
                        onFavoriteClick(i)
                        }}  src={i === ch ? "SelectedStar.svg" : "Star.svg"} className="history__archived__route__btn"/>
                    <img alt="" src="close.svg" onClick={()=>{onRemoveClick(props)}} className="history__archived__route__btn"/>
                </div>
            </div>
            <div className="history__archived__route__wrapper__body">
            {/* <div className="history__archived__route__text">Начало: {props.started}</div> */}
            {/* <div className="history__archived__route__text">Конец: {props.ended}</div> */}
            </div>
            <div className="history__archived__route__text text_end">{props.time}</div>
        </div>
    )

    return(
        <div className="history">

            <div className="container">
                <CSVInterface onAdded={onAdded}/>
            </div>
            <div className="container">
                <div className="history__wrapper">
                    <div className="history__wrapper__search__bar">
                        <input className="history__search__input" onChange={(text) => {
                            onSearchText(text.target.value)
                        }} type="text" id="name" value={searchText}/>
                        <div className="history__search__wrap__filter">
                          <img src="Filter.svg" onClick={() => {setShowingFilters(!showFilters)}} className="history__search__filter__btn"/>
                          <div className="history__search__group__filters">
                           
                            <div className="history__search__group__filter">
                                <img src="check.svg" />
                                <div className="history__archived__route__text">Избранные</div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="history__wrapper__archived__routes">
                        {output}
                    </div>
                </div>
            </div>
        </div>
    )

}


export default History;
