# Integrating WebdriverIO with Cucumber

WebdriverIO is a popular JavaScript testing framework for browser automation, and Cucumber is a widely used tool for behavior-driven development (BDD). Integrating WebdriverIO with Cucumber allows you to write and execute tests in a more human-readable format.

## Installation Steps

### 1. Install Necessary Packages

Make sure you have Node.js installed. Create a new Node.js project if you haven't already. Navigate to your project directory and run the following commands:

```bash
npm init -y
npm install --save-dev @wdio/cli @wdio/cucumber-framework
```

### 2. Generate WebdriverIO Configuration

Use the WebdriverIO CLI to generate a configuration file:

```bash
npx wdio config
```

```plaintext
Follow the prompts to configure your setup. Choose the options that suit your project. Since it updates every time. Here is mine:

? A project named "java_webdriverio_cucumber" was detected at "/home/ubuntu/Documents/Java_WebDriverIO_Cucumber", correct? Yes
? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
? Where is your automation backend located? On my local machine
? Which environment would you like to automate? Web - web applications in the browser
? With which browser should we start? Firefox
? Which framework do you want to use? Cucumber (https://cucumber.io/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? Yes
? What should be the location of your feature files? /home/ubuntu/Documents/Java_WebDriverIO_Cucumber/features/**/*.feature
? What should be the location of your step definitions? /home/ubuntu/Documents/Java_WebDriverIO_Cucumber/features/step-definitions/steps.js
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? No
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? wait-for: utilities that provide functionalities to wait for certain conditions till a defined task is complete.
   > https://www.npmjs.com/package/wdio-wait-for
? Do you want to add a service to your test setup? 
? What is the base URL? http://localhost:5000
? Do you want me to run `npm install` (Y/n) Y
```

Feel free to use this formatted text in your documentation or README.md file.

### 3. Install Cucumber

Install the Cucumber package:

```bash
npm install --save-dev cucumber
```

### 4. Create Feature Files

In your project, create a `features` directory. Inside it, create feature files with a `.feature` extension. These files contain your test scenarios in Gherkin syntax.

Example `login.feature`:

```gherkin
Feature: Blog with Users

  Scenario: As an User, I can login

    Given I am on the login page
    When I login with test1@test.com and YNG>iarqC5wGE~>
    Then I should see logout button
```

### 5. Implement Step Definitions

Create step definition files corresponding to your feature files. These files contain the JavaScript code that maps to the steps in your feature files.

Example `steps.js`:

```javascript
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

```

### 6. Run Tests

Update your WebdriverIO configuration file (`wdio.conf.js`) to use the Cucumber framework and specify the paths to your feature files and step definitions.

Example `npx wdio`:

```javascript
// ...

framework: 'cucumber',
cucumberOpts: {
  require: ['./path/to/step/definitions/*.steps.js'],
  // Other Cucumber options
},

// ...
```

Run your tests:

```bash
npx wdio
```

WebdriverIO will execute your tests using the specified Cucumber framework.

## Additional Resources
The blog with users website is available at https://github.com/oscpprep/POM/tree/9867beef8b4b9748d0e102071d4b0a524fde1222/dockers_compressed_into_7zips

Make sure to refer to the [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted.html) and [Cucumber Documentation](https://cucumber.io/docs/guides/10-minute-tutorial/) for more detailed information and options.
