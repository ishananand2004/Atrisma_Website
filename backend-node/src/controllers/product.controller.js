const productService = require('../services/product.service');

class ProductController {
  async getAllProducts(req, res, next) {
    try {
      const products = await productService.getAllProducts();
      // Spring Boot returns an array directly: return ResponseEntity.ok(productService.getAllProducts());
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const product = await productService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
