import { Given, Then, When, Before } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../Pages/homePage';
import ResultsPage from '../../Pages/resultsPage';
import _ from 'lodash';
import { assert } from "chai";

//#region GIVEN

Given(/^open browser$/, () => {
    cy.visit(Cypress.env("url_server"));
});

//#endregion

//#region WHEN

When(/^search the tv show "(.*)"$/, (tvShow) => {
    HomePage.searchElem(tvShow);
});

When(/^click the second URL$/, () => {
    ResultsPage.clickURLbyNumber(1);
});

When(/^go back with browser features$/, () => {
    cy.go('back');
});

When(/^change backgorund color$/, () => {
    ResultsPage.changeBackgroundColorCard(1, '#4a148c')
});

When(/^click the back button$/, () => {
    ResultsPage.clickBackButton()
});

//#endregion

//#region THEN

Then(/^the url is the same$/, () => {
    cy.url().should('eq',Cypress.env("url_server"))
});

Then(/^the input seach is empty$/, () => {
    cy.get('.validate').invoke('text').then((text) => {
        assert.equal(text,"");
    });
});

//#endregion
