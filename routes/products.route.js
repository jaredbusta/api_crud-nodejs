const express = require('express');
const ProductsService = require('../services/products.service');
const validatorHandler = require('../middleware/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema');
const route = express.Router();;
const service = new ProductsService();

route.get('/', async (req, res) => {
    res.json(await service.find())
});
/** Ruta con un solo parametro */
route.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const producto = await service.findOne(id)
        producto ? res.json(producto) : next(new Error('No encontrado'));
    } catch (error) {
        next(error);
    }
});

route.post('/', validatorHandler(createProductSchema, 'body'), async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

route.put('/:productId', async (req, res) => {

});
/**
 * update
 */
route.patch('/:id',validatorHandler(getProductSchema, 'params'),validatorHandler(updateProductSchema, 'body'),   async (req, res, next) => {
    // validatorHandler(updateProductSchema, 'body'),
    // validatorHandler(getProductSchema, 'params'),
    try {
        const { id } = req.params;
        const body = req.body;
        res.json(await service.update(id, body));
    } catch (error) {
        next(error);
    }

});

route.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const respuesta = await service.delete(id);
        res.status(200).json(respuesta);
    } catch (error) {
        next(error);
    }

});

module.exports = route;