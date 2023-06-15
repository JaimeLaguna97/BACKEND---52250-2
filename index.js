import ProductManager from "./products/productsManager.js";

const productManager = new ProductManager('products.json');

const product1 = {
  title: 'Product 1',
  description: 'Product description 1',
  price: 9.99,
  thumbnail: 'ruta/image1.jpg',
  code: 'ABC123',
  stock: 10,
};

const product2 = {
  title: 'Product 2',
  description: 'Product description 1',
  price: 19.99,
  thumbnail: 'ruta/image2.jpg',
  code: 'DEF456',
  stock: 5,
};

productManager.addProduct(product1);
productManager.addProduct(product2);

const products = productManager.getProducts();
console.log(products);

const foundProduct = productManager.getProductById(1);
console.log(foundProduct);

const updatedProduct = productManager.updateProduct(2, { price: 24.99 });
console.log(updatedProduct);

productManager.deleteProduct(1);