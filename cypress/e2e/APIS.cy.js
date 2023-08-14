describe("Tienda de mascotas", () => {
        it("Crear usuario", () => {
          const user = {
            id: 230,
            username: "juan",
            firstName: "juan",
            lastName: "guerra",
            email: "test@test.com",
            password: "clara-mente",
            phone: "8987354758",
            userStatus: 1,
          };
          cy.request("post", "https://petstore.swagger.io/v2/user", user).then((res) => {
            cy.log(JSON.stringify(res.body));
            //cy.wait(30000);//
          });
        });
      
        it("Obtener lista de mascotas vendidas", () => {
          cy.request("https://petstore.swagger.io/v2/pet/findByStatus?status=sold").then((res) => {
            cy.log(JSON.stringify(res.body));


            
          });
        });
      });