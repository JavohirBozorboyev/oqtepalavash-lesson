import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Productlarni boshqarish
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - price
 *       properties:
 *         title:
 *           type: string
 *           description: Product nomi
 *           example: "iPhone 14"
 *         description:
 *           type: string
 *           description: Mahsulot haqida izoh
 *           example: "Yangi model telefon"
 *         price:
 *           type: string
 *           description: Narxi
 *           example: "1200"
 *         image:
 *           type: string
 *           description: Rasmi
 *           example: "https://cdn.site.com/img.png"
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Barcha productlarni olish
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Productlar ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: ID bo'yicha product olish
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product topildi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product topilmadi
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Yangi product yaratish
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Yaratilgan product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Noto‘g‘ri so‘rov
 */

export default router;
