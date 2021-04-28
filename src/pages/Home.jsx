import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories, ToolBlock, SortPopup} from "../components";
import {fetchTools} from "../redux/action/tools";
import {setCategory, setSortBy} from "../redux/action/filters"
import {addToolToCart} from "../redux/action/cart";


const categoryNames = ["дрели", "пилы", "Болгарки", "Компрессоры", "Строительные фены"];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {
    const [menuActive, setMenuActive] = useState(false)

    const dispatch = useDispatch()

    const items = useSelector(({tools}) => tools.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded =  useSelector(({tools}) => tools.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
        dispatch(fetchTools(sortBy, category))
    },[category, sortBy])

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

    return (
        <div className="container">
            <div className="content__top">

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
                        addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        key={obj.id}
                        {...obj}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Home;