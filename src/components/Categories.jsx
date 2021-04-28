import React from "react";


let Categories = React.memo(({menuActive, onMenuActive,activeCategory, items, onClickCategory}) => {

    return (
        <div className={menuActive? "categories active" : "categories"}>
            <ul>
                <li className={activeCategory === null?"active": ""}
                    onClick={() => {onClickCategory(null); onMenuActive()}}>
                    Все
                </li>
                {items &&
                items.map((name, index) => (
                    <li className={activeCategory === index? "active": ""}
                        onClick={() => {onClickCategory(index); onMenuActive()}}
                        key={`${name}_${index}`}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default Categories;