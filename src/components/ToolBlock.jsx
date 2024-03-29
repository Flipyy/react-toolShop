import React from "react";

const ToolBlock = ({id, imageUrl, name, description, price, availability, onClickAddTool, addedCount, onClickOpenModal}) => {

    const onAddTool = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price
        }
        onClickAddTool(obj)
    }

    const modalWindow = () => {
        const obj = {
            id,
            name,
            description,
            imageUrl,
            price
        }
        onClickOpenModal(obj)
    }

    return (
        <div className="tool-block">
            <button className="tool-block__detail" onClick={modalWindow}>Подробнее...</button>
            <img className="tool-block__img" src={imageUrl} alt=""/>
            <h4 className="tool-block__title">{name}</h4>
            <div className="tool-block__bottom">
                <div className="tool-block__price">{price} ₽</div>
                <button className="tool-block__btn"
                    onClick={onAddTool}>
                    <svg width="12"
                         height="12"
                         viewBox="0 0 12 12"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                              fill="white"/>
                    </svg>
                    Добавить
                    {addedCount && <span>{addedCount}</span>}
                </button>
            </div>
        </div>
    )
}

export default ToolBlock;