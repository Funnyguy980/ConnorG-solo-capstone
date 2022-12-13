import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class Connor extends BasePage {
    SignBtn: By = By.xpath('//a[@class="Nav-signIn button secondary secondary-background"]')
    LibSelect: By =By.xpath('//input[@id="signin-options"]')
    CardNum: By = By.xpath('//input[@id="username"]')
    Pin: By = By.xpath('//input[@id="password"]')
    SignBtn2: By = By.xpath('//button[@class="signin-button button secondary"]')
    Search: By = By.xpath('//span[@class="Nav-searchText"]')
    SearchBox: By = By.xpath('//input[@id="nav-search"]')
    ConfSearch: By = By.xpath('//i[@class="icon-search-nav Nav-searchIcon--desktop is-submit secondary-color-hover"]')

    constructor () {
        super({url: "https://beehive.overdrive.com/"})
    }
    async MaxWindow() {
        await this.driver.manage().window().maximize()
    }

}