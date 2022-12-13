import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class Connor extends BasePage {
    SignBtn: By = By.xpath('//a[@class="Nav-signIn button secondary secondary-background"]')
    LibSelect: By =By.xpath('//input[@id="signin-options"]')
    SigninOp: By = By.xpath('(//div[text() = "Springville Public Library"])[1]')
    CardNum: By = By.xpath('//input[@id="username"]')
    Pin: By = By.xpath('//input[@id="password"]')
    SignBtn2: By = By.xpath('//button[@class="signin-button button secondary"]')
    Search: By = By.xpath('//span[@class="Nav-searchText"]')
    SearchBox: By = By.xpath('//input[@id="nav-search"]')
    ConfSearch: By = By.xpath('//i[@class="icon-search-nav Nav-searchIcon--desktop is-submit secondary-color-hover"]')
    BorrowBtn: By = By.xpath('(//span[text() = "Borrow"])[1]')
    BorrowBtn2: By = By.xpath('//button[@class="button radius secondary contrast u-allCaps borrow-button"]')
    ClosePop: By = By.xpath('//a[@class="close-reveal-modal js-close"]')
    HomeBtn: By = By.xpath('//img[@class="Nav-logo--desktop"]')
    MyInvin: By = By.xpath('//i[@class="icon-bookshelf Nav-bookshelfIcon--desktop secondary-color-hover"]')
    ReturnBtn: By = By.xpath('(//i[@class="icon icon-return"])[1]')
    ReturnBtn2: By = By.xpath('//span[text()="Return title"]')
    AddtoWish: By = By.xpath('(//i[@class="icon-wish-list icon animated bounceIn"])[1]')
    WishList: By = By.xpath('(//a[@class="secondary-color-hover contrast"])[2]')
    RemoveWish: By = By.xpath('//a[@class="button radius return-title-button js-show-remove-modal"]')
    RemoveWishConf: By = By.xpath('//span[text()="Remove title"]')
    PlaceHold: By = By.xpath('(//button[@class="TitleActionButton u-allCaps secondary-color-hover is-hold js-hold"])[1]')
    Holds: By = By.xpath('(//a[text()="Holds"])[4]')
    RemoveHold: By = By.xpath('//i[@class="icon icon-clear removal"]')
    RemoveHoldConf: By = By.xpath('//button[@class="button margin-small radius secondary u-allCaps"]')
    MyAccount: By = By.xpath('//a[@class="js-account-menu-link Nav-myAccount--desktop"]')
    SingOutBtn: By = By.xpath('(//a[text()="Sign out"])[1]')
    constructor () {
        super({url: "https://beehive.overdrive.com/"})
    }
    async MaxWindow() {
        await this.driver.manage().window().maximize()
    }

}