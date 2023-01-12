import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import products from "./json/products.json"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            const promesa = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(products)
                }, 2000)
        });

        promesa.then((data) => {
            
            setItems(data);
        })
    }, []);

    })

    return (
        <div className="container py-5">
            <ItemList items={items} />
            <ItemCount stockItems={15}/>
        </div>
    )
}

export default ItemListContainer;