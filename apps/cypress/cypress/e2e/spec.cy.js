describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("#username").type("username");
    cy.get("#password").type("password");
    cy.get("form").submit();

    cy.get(".form__error").should("not.exist");
  });
});
