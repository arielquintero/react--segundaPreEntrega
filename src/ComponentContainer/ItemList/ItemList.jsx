import Item from "../../Components/ItemDetail/ItemDetail";

const ItemList = ({ products }) => {
    return products.map((product) => <Item key={product.id} product={product} />);
};

export default ItemList;
