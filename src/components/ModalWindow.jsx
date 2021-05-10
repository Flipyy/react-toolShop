import React from "react";

const ModalWindow = ({obj, onClickCloseModel}) => {
    console.log(obj)
    return (
        <div className="modal-window__wrapper">
            <div className="modal-window">
                <div className="modal-window__top">
                    <h2 className="modal-window__title">{obj.name}</h2>
                    <button className="modal-window__close" onClick={(() => onClickCloseModel())}>
                        <svg height="15px"
                             viewBox="0 0 329.26933 329"
                             width="15px"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                    </button>
                </div>
                <div className="modal-window__img-price">
                    <img className="modal-window__img" src={obj.imageUrl} alt=""/>
                    <div className="modal-window__price">
                        <span>Цена: {obj.price} ₽</span>
                    </div>
                </div>
                <div className="modal-window__content">
                    <h3 className="modal-window__content-title">Описание</h3>
                    <p className="modal-window__content-text">{obj.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow