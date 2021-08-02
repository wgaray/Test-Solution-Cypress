class ResultsPage{
    
    static changeBackgroundColorCard(number, color){
        cy.document().then(document => {document.getElementsByClassName('card-content white-text')[number].style.backgroundColor = color;})
    }

    static clickURLbyNumber(number){
        cy.get('a.white-text', {timeout: 60000}).eq(number,{timeout: 60000}).click({timeout: 60000});
    }

    static clickBackButton(){
        cy.get('.btn').click();
    }

}

export default ResultsPage;