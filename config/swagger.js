import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Product API",
    version: "1.0.0",
    description: "Product CRUD API documentation",
  },
  servers: [
    {
      url: "https://api.maktabcrm.uz",
      description: "Production server",
    },
    {
      url: "http://localhost:3000",
      description: "Local development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // routing joylashgan joy
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
