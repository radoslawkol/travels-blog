/// <reference types="cypress" />

it("Set theme to dark when toggle", () => {
	cy.visit("/about");
	cy.get("#darkModeToggle").should("exist").parent().click();
	cy.get("section").should("have.css", "background-color", "rgb(57, 57, 57)");
});

it("Set theme to light when toggle", () => {
	cy.visit("/about");
	cy.get("#darkModeToggle").should("exist").parent().click();
	cy.get("#darkModeToggle").should("exist").parent().click();
	cy.get("section").should("have.css", "background-color", "rgb(57, 57, 57)");
});
