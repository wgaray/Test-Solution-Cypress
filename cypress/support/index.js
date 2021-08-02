// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from "mochawesome/addContext";

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("test:after:run", (test, runnable) => {  
    if (test.state === "failed") {
        var testTitle = test.title.replaceAll('"','');
        var screenshot = `../screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${testTitle} (failed).png`;
        var videos = `../videos/${Cypress.spec.name}.mp4`;
        addContext({ test }, screenshot);
        addContext({ test }, videos);
    }
});