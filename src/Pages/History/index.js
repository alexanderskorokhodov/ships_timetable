import React, { useState } from "react";
import "./index.scss";





const History = () => {

    const cachedData = [
        {
            title:"Рейс №1",
            started:"Пт, 1 сентября 2023",
            ended: "Пт, 1 октября 2023",
            date: "01.02.2002",
            favorite: false
        },
        {
            title:"Рейс №2",
            started:"Пт, 1 сентября 2023",
            ended: "Пт, 1 октября 2023",
            date: "02.02.2002",
            favorite: false
        },
        {
            title:"Рейс №3",
            started:"Пт, 1 сентября 2023",
            ended: "Пт, 1 октября 2023",
            date: "03.02.2002",
            favorite: false
        },
        {
            title:"Рейс №4",
            started:"Пт, 1 сентября 2023",
            ended: "Пт, 1 октября 2023",
            date: "04.02.2002",
            favorite: false
        },
        {
            title:"Рейс №5",
            started:"Пт, 1 сентября 2023",
            ended: "Пт, 1 октября 2023",
            date: "05.02.2002",
            favorite: false
        },
        {
            title:"Рейс №6",
            started:"Пт, 1 сентября 2023",
            ended: "Пт, 1 октября 2023",
            date: "06.02.2002",
            favorite: false
        },
        {
            title:"Рейс №7",
            started:"Пт, 1 сентября 2023",
            ended: "Пт, 1 октября 2023",
            date: "07.02.2002",
            favorite: false
        },
    ]

    const [data, setData] = useState(cachedData)

    const [change, onChange] = useState(true)
    const [searchText, setSearchText] = useState("")
    const [showFilters, setShowingFilters] = useState(false)

    function changeArray(arr){
        setData(arr)
        onChange(!change)
    }

    function onFavoriteClick(props){
        let index = 0
        let item = data.filter((item, i)=> {
            if(item.title == props.title){
                 index = i
                }
            return item.title == props.title
        })[0]
        item.favorite = !item.favorite
        let arr = data
        arr[index] = item
        changeArray(arr)
    }

    function onRemoveClick(props){
        let index = 0;
        data.forEach((item, i) => {
            if(item.title == props.title){
                index = i
                return
            }
        })
        changeArray(data.filter((item, i) => {
            let ff = item
            return i != index 
        }))
    }

    function onSearchText(text){
        setSearchText(text)
        changeArray(
            cachedData.filter(item => {
                return item.date.includes(text)
            })
        )
    }


    
    

    const output = data.map((props,i) => 
        <div className="history__archived__route" key={i}>
            <div className="history__archived__route__wrapper__header">
                <div className="history__archived__route__title">{props.title}</div>
                <div className="history__archived__route__wrapper__icons">
                    <img onClick={()=>{
                        onFavoriteClick(props)
                        }}  src={props.favorite ? "SelectedStar.svg" : "Star.svg"} className="history__archived__route__btn"/>
                    <img src="close.svg" onClick={()=>{onRemoveClick(props)}} className="history__archived__route__btn"/>
                </div>
            </div>
            <div className="history__archived__route__wrapper__body">
            <div className="history__archived__route__text">Начало: {props.started}</div>
            <div className="history__archived__route__text">Конец: {props.ended}</div>
            </div>
            <div className="history__archived__route__text text_end">{props.date}</div>
        </div>
    )

    return(
        <div className="history">
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
