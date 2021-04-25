import React from "react";



const categoryNames = ["дрели", "пилы", "Болгарки", "Компрессоры", "Строительные фены"];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

let Home = () => {
    return (
        <div className="container">
            <div className="content__top">

            </div>
            <div className="content__items">

            </div>
        </div>
    )
}

export default Home;