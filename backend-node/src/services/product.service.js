const db = require('../models');

class ProductService {
  async getAllProducts() {
    return await db.Product.findAll();
  }

  async getProductById(id) {
    const product = await db.Product.findByPk(id);
    if (!product) {
      const error = new Error(`Resource not found with id: ${id}`);
      error.statusCode = 404;
      throw error;
    }
    return product;
  }
}

module.exports = new ProductService();
