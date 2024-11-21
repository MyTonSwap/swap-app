describe("template spec", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173");
        cy.viewport("macbook-15");
    });
    it("should have a title", () => {
        cy.title().should("eq", "TON Blockchain Swap Platform - MyTonSwap");
    });
    it("should have a logo", () => {
        cy.get("img").should("have.attr", "alt", "MyTonSwap Logo");
    });
    it("should have a navbar", () => {
        cy.get("nav").should("exist");
    });
    it("should have a swap widget", () => {
        cy.get("#swap-widget").should("exist");
    });
    it("should have connect button", () => {
        cy.get('[data-testid="swap-button"]').should("exist");
    });
    it("change language", () => {
        cy.get('[data-testid="lang-popover"]').click();
        cy.get('[data-testid="lang-fa"]').click();
        cy.get('[data-testid="docs-link"]').should("contain.text", "مستندات");
        cy.get('[data-testid="blog-link"]').should("contain.text", "بلاگ");
        cy.viewport("iphone-6");
        cy.get('[data-testid="mobile-menu-button-open"]').click();
        cy.get('[data-testid="docs-link-mobile"]').should(
            "contain.text",
            "مستندات"
        );
        cy.get('[data-testid="blog-link-mobile"]').should(
            "contain.text",
            "بلاگ"
        );
        cy.get('[data-testid="mobile-menu-button-close"]').click();
        cy.viewport("macbook-15");
        cy.get('[data-testid="lang-popover"]').click();
        cy.get('[data-testid="lang-en"]').click();
        cy.get('[data-testid="docs-link"]').should("contain.text", "Docs");
        cy.get('[data-testid="blog-link"]').should("contain.text", "Blog");
        cy.viewport("iphone-6");
        cy.get('[data-testid="mobile-menu-button-open"]').click();
        cy.get('[data-testid="docs-link-mobile"]').should(
            "contain.text",
            "Docs"
        );
        cy.get('[data-testid="blog-link-mobile"]').should(
            "contain.text",
            "Blog"
        );

        cy.get('[data-testid="mobile-menu-button-close"]').click();
        cy.viewport("macbook-15");
        cy.get('[data-testid="lang-popover"]').click();
        cy.get('[data-testid="lang-ru"]').click();
        cy.get('[data-testid="docs-link"]').should("contain.text", "Документы");
        cy.get('[data-testid="blog-link"]').should("contain.text", "Блог");
        cy.viewport("iphone-6");
        cy.get('[data-testid="mobile-menu-button-open"]').click();
        cy.get('[data-testid="docs-link-mobile"]').should(
            "contain.text",
            "Документы"
        );
        cy.get('[data-testid="blog-link-mobile"]').should(
            "contain.text",
            "Блог"
        );
        cy.get('[data-testid="mobile-menu-button-close"]').click();
        cy.viewport("macbook-15");
    });
    it("should open mobile menu", () => {
        cy.viewport("iphone-6");
        cy.get('[data-testid="mobile-menu-button-open"]').click();
        // check element position
        cy.get('[data-testid="mobile-menu"]')
            .then(($el) => {
                return window.getComputedStyle($el[0]);
            })
            .invoke("getPropertyValue", "right")
            .should("equal", "0px");
        cy.get('[data-testid="mobile-menu-button-close"]').click();
        cy.viewport("macbook-15");
    });
    it("should change theme", () => {
        cy.get('[data-testid="theme-toggle"]').click();

        cy.get("[data-testid='app-bg']")
            .then(($el) => {
                return window.getComputedStyle($el[0]);
            })
            .invoke("getPropertyValue", "background-color")
            .should("equal", "rgb(255, 255, 255)");
        cy.get('[data-testid="theme-toggle"]').click();
        cy.get("[data-testid='app-bg']").should(
            "have.css",
            "background-color",
            "rgb(9, 9, 11)"
        );
    });
});
