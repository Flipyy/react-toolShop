import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories, ToolBlock, SortPopup, ModalWindow} from "../components";
import {fetchTools} from "../redux/action/tools";
import {setCategory, setSortBy} from "../redux/action/filters"
import {addToolToCart} from "../redux/action/cart";

let objModelWindow

const categoryNames = ["дрели", "пилы", "Болгарки", "Компрессоры", "Строительные фены"];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {
    const [menuActive, setMenuActive] = useState(false)
    const [modalWindow, setModalWindow] = useState(false)

    const menuRef = React.useRef()

    const dispatch = useDispatch()

    const items = useSelector(({tools}) => tools.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded =  useSelector(({tools}) => tools.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
        dispatch(fetchTools(sortBy, category))
    },[category, sortBy])

    React.useEffect(() => {
        window.addEventListener('click', outsideClickMenu)
    }, [])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddToolToCart = (obj) => {
        dispatch(addToolToCart(obj))
    }

    const handleSetMenuActive = () => {
        setMenuActive(!menuActive)
    }

    const handleOpenModalWindow = (obj) => {
        objModelWindow = obj
        setModalWindow(true)
        document.body.style.overflowY = "hidden"
    }

    const handleCloseModalWindow = () => {
        setModalWindow(false)
        document.body.style.overflowY = ""
    }

    const outsideClickMenu = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(menuRef.current)) {
            setMenuActive(false)
        }
    }

    return (
        <div className="container">
            <div className="content__top">
                <div ref={menuRef}>
                    <Categories
                        menuActive={menuActive}
                        onMenuActive={handleSetMenuActive}
                        activeCategory={category}
                        items={categoryNames}
                        onClickCategory={onSelectCategory}
                    />
                    <div className="menu__btn-wrapper">
                        <button className={menuActive ? "menu__btn active" : "menu__btn" } onClick={handleSetMenuActive}><span/></button>
                    </div>
                </div>
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <div className="content__items">
                {items &&
                items.map((obj) => (
                    <ToolBlock
                        onClickAddTool={handleAddToolToCart}
                        onClickOpenModal={handleOpenModalWindow}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        key={obj.id}
                        {...obj}
                    />
                ))
                }
            </div>
            {modalWindow && (
                <ModalWindow
                    onClickCloseModel={handleCloseModalWindow}
                    obj={objModelWindow}
                />
            )}
        </div>
    )
}

export default Home;