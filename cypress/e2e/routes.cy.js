/// <reference types="cypress" />

it("Displays correct heading when navigating to home route", () => {
	cy.visit("/");
	cy.get("h1")
		.should("exist")
		.contains(/WELCOME TO OUR TRAVEL BLOG/i);
});

it("Displays correct heading when navigating to about route", () => {
	cy.visit("/about");
	cy.get("h1")
		.should("exist")
		.contains(
			/Remember that happiness is a way of travel, not a destination./i
		);
});

it("Displays correct button when navigating to articles route", () => {
	cy.visit("/articles");
	cy.get("button").should("exist").contains(/all/i);
});

it("Displays correct button when navigating to photos route", () => {
	cy.visit("/photos");
	cy.get("button").should("exist").contains(/all/i);
});

it("Displays correct heading when navigating to article route", () => {
	cy.visit("/articles/what-should-you-see-in-warsaw");
	cy.get("h1").should("exist").contains("What should You see in Warsaw?");
});
