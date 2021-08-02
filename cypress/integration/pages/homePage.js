class HomePage{

    static searchElem(text) {
        cy.get('.validate').type(text);
        cy.get('.btn').click();
    }

}

export default HomePage;