const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`http://localhost:5000/${page}`);
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await $('#email').setValue(username);
    await $('#password').setValue(password);
    await $('#log_in').click();
});

Then(/^I should see logout button$/, async () => {
    await expect($('a.nav-link[href="/logout"]')).toBeExisting();
});

