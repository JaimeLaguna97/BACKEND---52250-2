import fs from 'fs';

const path = './files/Products.json';

class ProductManager {
  constructor() {
    this.path = path;
  }

  addProduct(product) {
    const products = this.getProducts();
    const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const newProduct = { ...product, id };
    products.push(newProduct);
    this.saveProducts(products);
  }

  getProducts() {
    try {
      const fileContent = fs.readFileSync(this.path, 'utf-8');
      return JSON.parse(fileContent);
    } catch (error) {
      return [];
    }
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find((product) => product.id === id);
  }

  updateProduct(id, updatedFields) {
    const products = this.getProducts();
    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      const updatedProduct = { ...products[productIndex], ...updatedFields };
      products[productIndex] = updatedProduct;
      this.saveProducts(products);
      return updatedProduct;
    }

    return null;
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const updatedProducts = products.filter((product) => product.id !== id);
    this.saveProducts(updatedProducts);
  }

  saveProducts(products) {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(this.path, data);
  }
}

export default ProductManager;