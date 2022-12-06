import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../../ComponentContainer/ItemList/ItemList";
import { showProdApi } from "../../ComponentContainer/ShowProdApi/showProdApi";
import "./ItemListConteiner.scss";

const ItemListContainer = ({ greeting, myName }) => {
    const [products, setProducts] = useState([]);

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        if (id) {
            showProdApi()
                .then((data) =>
                    setProducts(data.filter((prod) => prod.category === id))
                )
                .catch((err) => console.error(err));
        } else {
            showProdApi
                .then((data) => setProducts(data))
                .catch((err) => console.error(err));
        }
    }, [id]);

    return (
        <div className="item-list-container">
            <p>
                {greeting}
                {myName}
            </p>
            <section>
                <ItemList products={products} />
            </section>
        </div>
    );
};

export default ItemListContainer;
