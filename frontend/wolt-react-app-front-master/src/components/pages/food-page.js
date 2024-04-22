import React from "react";
import MenuComponent from "../../menu-component/menu-rename";

const FoodsPage = () => {

    return (
        <div className="container mt-5">
            <MenuComponent height={300 } query={'Burger'} />
            <MenuComponent height={500 } query={'Soup'} />
            <MenuComponent height={300 } query={'Pizza'} />
            <MenuComponent height={300 } query={'Salad'} />
        </div>
    )
}

export default FoodsPage