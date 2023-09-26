import { IProduct } from "./interfaces";

const productList: IProduct[] = [];

const createProduct = (product: IProduct) => {
    productList.push(product);
    return { product, message: "Product sucessfully created"};
}

const getProducts = () => {
    return productList;
}

/*
Geladeira - 2400 - identificador: 1
Cooktop - 1200 - identificador: 2
*/
const product1 = createProduct({ id: 1, name: "Geladeira", price: 2400});
const product2 = createProduct({ id: 2, name: 'Cooktop', price: 1200});
console.log(product1);
console.log(product2);
console.log(getProducts());
