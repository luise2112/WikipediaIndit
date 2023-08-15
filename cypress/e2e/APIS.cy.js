const { Repeticiones } = require('./repeticiones');

describe("template spec", function(){
  let result=[];

  it('Ejercicio 1', function(){
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body:{
        "id": 1,
        "username": "Luis",
        "firstName": "dgdhjfg",
        "lastName": "dfkjdfhg",
        "email": "dfdhfgfjf",
        "password": "fgjklfjhk",
        "phone": "46580697",
        "userStatus": 0
      }
    })

    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/Luis'
    })
  })
  it('Ejercicio 2', function(){
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold'
    }).then(pets=>{
      pets.body.forEach(pet=>{
        result.push({id: pet.id, name: pet.name})
      })
    })
  })
  it('Ejercicio 3', ()=>{
    const repeticiones = new Repeticiones(result)
    cy.log(JSON.stringify(repeticiones))
    //cy.wait(30000)//
  })
});

