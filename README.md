# WebdriverIO Test automation using cucumber and typescript

### Task
<details>
  <summary>tommy-hilfiger ui automation</summary>

    Task is developed as per instructions of email
</details>

***

### Environment Setup / Pre-Requisites
<details>
  <summary>Environment setup</summary>

##### Below software are pre-requisites
* [Git][1]
* [Node.js][2]
* Java JDK

To check all these items installed properly, run one by one in your terminal:
```shell
node -v;
git --version;
java --version; // java is required for viewing allure reporting server
```

You should see versions for all these items, without any errors.
</details>

***

### Installation
<details>
  <summary>How to install dependencies</summary>

1. Navigate to the folder in which framework will be stored, and run in your terminal copied link (with HTTPS path):
```shell
git clone https://github.com/srinivasbudh/wdio-test-automation.git
```
2. Navigate into the downloaded "wdio-test-automation" repository folder
```shell
cd wdio-test-automation/
```
3. Install all required dependencies:
```shell
npm install
```
</details>

***

### Test run
<details>
  <summary>How to run tests</summary>

To run the automation tests you can use the command:
```shell
npm run test
```
to run specific tests configurations needs to be updated in `wdio.conf.ts`
</details>

### Report
<details>
  <summary>How to view test reports</summary>

Dot, spec and Allure reporting is added for easy access as per preference.

To generate allure reports run `npm run report` then reports can be found in `allure-report/index.html`

To Open allure reports automatically run `npm run open-allure`

Allure reports are arranged as per cucumber standards and screenshots will also be available as attachment in report when a test case fails

You can find a latest successful build [here][3]

</details>

### Issues / limitations
* Automation browser was identified by application, this is causing 403 error on `LoginIdentity endpoint`, even though I resolved it once in a while fails login test at sometime this make successful login flaky a bit
* When parallel sessions are running tests are flaky this is purely the way application is behaving with API response but this parallel execution can be fixed  or to considered for improvements on framework
* When adding an address sometimes you see a random error "jouw session is verlopen", this sometimes can make add address case flaky, this can also be fixed and improved with more time as it is a bit hard to replicate, I couldn't fix it


[1]: https://git-scm.com/downloads
[2]: https://nodejs.org/en/
[3]: https://output.circle-artifacts.com/output/job/ca61c692-4baa-42fe-ae09-9d9779b7826d/artifacts/0/allure-report/index.html
