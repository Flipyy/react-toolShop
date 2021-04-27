import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import cartEmptyImage from "../assets/img/shopping-cart.svg"
import {CartItem} from "../components"
import {clearCart, minusCartItem, plusCartItem, removeCartItem} from "../redux/action/cart";

const Cart = () => {
    const dispatch = useDispatch()
    const {totalPrice, totalCount, items} = useSelector(({cart}) => cart)

    const addedTools = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart())
        }
    }

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            dispatch(removeCartItem(id))
        }
    }

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id))
    }

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id))
    }


    return (
        <div className="container container--cart">
            {totalCount ? (
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="cart__top-title">
                            <svg height="29px"
                                 viewBox="0 -31 512.00026 512"
                                 width="29px"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/><path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/><path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
                            </svg>
                            Корзина</h2>
                        <div className="cart__top-clear">
                            <span onClick={onClearCart}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                        stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2"
                                                strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Очистить корзину</span>
                        </div>
                    </div>
                    <div className="cart__items">
                        {addedTools.map((obj) => (
                            <CartItem
                                key={obj.id}
                                id={obj.id}
                                name={obj.name}
                                imageUrl={obj.imageUrl}
                                totalPrice={items[obj.id].totalPrice}
                                totalCount={items[obj.id].items.length}
                                onPlus={onPlusItem}
                                onMinus={onMinusItem}
                                onRemove={onRemoveItem}
                            />
                        ))}
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span>Всего: <b>{totalCount}</b></span>
                            <span>Сумма заказа: <b>{totalPrice} ₽</b></span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <Link to="/" className="btn-back">

                                Вернуться назад</Link>
                            <button className="btn-pay">Оплатить</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="cart cart--empty">
                    <h2>Корзина пустая!</h2>
                    <img src={cartEmptyImage} alt="cart"/>
                    <Link to="/" className="cart__btn-back">
                        <span>Вернуться назад</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Cart;