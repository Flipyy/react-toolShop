import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories, ToolBlock, SortPopup} from "../components";
import {fetchTools} from "../redux/action/tools";
import {setCategory, setSortBy} from "../redux/action/filters"


const categoryNames = ["дрели", "пилы", "Болгарки", "Компрессоры", "Строительные фены"];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

let Home = () => {

    const dispatch = useDispatch()

    const items = useSelector(({tools}) => tools.items)
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


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    items={categoryNames}
                    onClickCategory={onSelectCategory}
                />
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