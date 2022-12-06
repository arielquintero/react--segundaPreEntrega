import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { showProdApi } from "../ShowProdApi/showProdApi";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { productId } = useParams();

    console.log(productId);

    useEffect(() => {
        showProdApi
            .then(resolve => setProduct(resolve.find(prod => prod.id === productId)))
            .catch((err) => console.log(err));
    });

    return (
        <ItemDetail product={product} />
        );
};

export default ItemDetailContainer;
