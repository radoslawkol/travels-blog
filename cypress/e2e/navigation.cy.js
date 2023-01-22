/// <reference types="cypress" />

it("Open mobile navigation on button click", () => {
	cy.viewport(400, 700);
	cy.visit("/");

	cy.get("button > .fa-bars").should("exist").click();
	cy.get("button > .fa-xmark").should("be.visible");
	cy.get("li").should("exist").contains(/home/i);
});

it("Close mobile navigation on button click", () => {
	cy.viewport(400, 700);
	cy.visit("/");
	cy.get("button > .fa-bars").should("exist").click();
	cy.get("button > .fa-xmark").should("be.visible").click();
	cy.get("button > .fa-xmark").should("not.exist");
	cy.get("button > .fa-bars").should("exist");
});

it("Close navigation sidebar when redirect on nav item click", () => {
	cy.viewport(400, 700);
	cy.visit("/");
	cy.get("button > .fa-bars").should("exist").click();
	cy.get(".menu").children().contains(/about/i).should("be.visible").click();
	cy.url().should("include", "/about");
	cy.get("button > .fa-xmark").should("not.exist");
});
