import swaggerJSDoc from 'swagger-jsdoc';


const swaggerAPIDesc = swaggerJSDoc({
    swaggerDefinition: (swaggerJSDoc.Options = {
        info: {
            title: "Social media integration",
            version: "0.1.0",
            description:
              "API documentation",
            contact: {
              name:"Sashank Sekhar Dash",
              email: "mech.ssd@gmail.com",
            },
          },
          "host": "localhost:3000",
          servers: ["http://localhost:3000/"],
          "schemes": ["http"],
          "consumes": ["application/json"],
          "produces": ["application/json"]
        }),
    apis: ["./app/server.js","./app/routes/*.js"],
});

export default swaggerAPIDesc;