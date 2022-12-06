let products = [
    {
        id: "1",
        name: "transistores",
        categoria: "componentes1",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/transistores.webp',
    },
    {
        id: "2",
        name: "resistencias",
        categoria: "componentes1",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/resistencias.webp',
    },
    {
        id: "3",
        name: "capacitores",
        categoria: "componentes1",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/capacitores.webp',
    },
    {
        id: "4",
        name: "circuitos-integrados2",
        categoria: "componentes",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/circuitos-integrados.webp',
    },
    {
        id: "5",
        name: "plaqueta-virgen",
        categoria: "componentes2",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/plaqueta-virgen.webp',
    },
];

export const showProdApi = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 1500);
});
