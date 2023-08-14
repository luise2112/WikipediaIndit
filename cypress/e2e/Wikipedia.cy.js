describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.google.com");
    cy.get("button[data-ved]").eq(3).click();
    cy.screenshot('Capturing the screenshot after successful login');
    cy.get('[title="Buscar"]').type('Automatización{enter}');
    cy.get('a[href*="wikipedia"]').eq(0).click()
    cy.contains('[href*="wikipedia"]', 'Wikipedia', { timeout: 60000 }).click()
    cy.origin('https://es.wikipedia.org/', () => {
            cy.contains('p', 'primer telar automatizado').should('contain.text', '1800').screenshot()
    cy.screenshot()
   })
  });
});
