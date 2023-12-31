const express = require('express');
const router = express.Router();
const foodController = require('./controllers/foodController');
const productController = require('./controllers/productController');
const rateController = require('./controllers/rateController');
const nodosController = require('./controllers/nodosController');

/**
 * @swagger
 * /products:
 *   get:
 *     summary: get products
 *     description: get products
 *     responses:
 *       200:
 *         description: successful get
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/products'
 * 
 * /nodos:
 *   post:
 *     summary: post nodos
 *     description: post nodos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               start:
 *                 type: string
 *               end:
 *                 type: string
 *     responses:
 *       200:
 *         description: successful psot
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/nodos'
 * 
  * /products/{productId}:
 *   get:
 *     summary: Get a product by ID
 *     description: Returns a single product by its ID
 *     parameters:
 *       - in: path
 *         name: productId
 *         description: ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/products'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 * 
 * /products/barcode/{barcode}:
 *   get:
 *     summary: Get a product by barcode
 *     description: Returns a single product by its barcode
 *     parameters:
 *       - in: path
 *         name: barcode
 *         description: barcode of the product to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/products'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 * 
 * /rate-products/{productId}:
 *   get:
 *     summary: Get a product rate by ID
 *     description: Get a product rate by ID
 *     parameters:
 *       - in: path
 *         name: productId
 *         description: ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/rate'
 *       404:
 *         description: rate not found
 *       500:
 *         description: Internal server error
 * 
 * 
 * /filtered-products:
 *   post:
 *     summary: get filter products
 *     description: get filter products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categories:
 *                 type: string
 *               brands:
 *                 type: string
 *               countries:
 *                 type: string
 *     responses:
 *       200:
 *         description: get products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/products'
 * 
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The product ID
 *         image_url:
 *           type: string
 *           description: The product image URL
 *         product_name:
 *           type: string
 *           description: The product name
 *         ingretients_text:
 *           type: string
 *         brand:
 *           type: string
 *           description: The brand of the product
 *         categories:
 *           type: array
 *           items:
 *             type: string
 *           description: The categories of the product
 *         countries_en:
 *           type: string
 *           description: The country of origin of the product
 * 
 *     rate:
 *       type: object
 *       properties:
 *         manufacturing:
 *           type: string
 *         packaging:
 *           type: string
 *         palm-oil:
 *           type: string
 *         size:
 *           type: string
 *         storage:
 *           type: string
 *         transport:
 *           type: string
 *     nodos:
 *       type: object
 *       properties:
 *         entity_id:
 *           type: string
 *         time_index:
 *           type: integer
 *         tvoc:
 *           type: integer
 *         eco2:
 *           type: integer
 *         humedad:
 *           type: integer
 *         temperatura:
 *           type: integer
 * 
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The product ID
 * 
 */

router.get('/products', async (req, res) => {
    await foodController.getAllFoods(req, res);
});

router.get('/products/:productId', async (req, res) => {
    await productController.getProductById(req, res);

});

router.get('/products/barcode/:barcode', async (req, res) => {
    await productController.getProductByBarcode(req, res);
});

router.post('/filtered-products', async (req, res) => {
    await productController.getFilteredProducts(req, res);
});

router.get('/rate-products/:productId', async (req, res) => {
    await rateController.getProductRate(req, res);
});

router.post('/nodos', async (req, res) => {
    await nodosController.getNodos(req, res);
});

module.exports = router;



