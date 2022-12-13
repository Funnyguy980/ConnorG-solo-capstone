import { Driver } from "selenium-webdriver/chrome";
import { ableToSwitchToFrame } from "selenium-webdriver/lib/until";
import { Connor } from "./connorsPage";

const connor = new Connor ()

test("Sign in", async ()=> {
    await connor.click(connor.SignBtn)
    await connor.click(connor.LibSelect)
    await connor.setInput(connor.LibSelect, "Springville Public Library")
    await connor.click(connor.CardNum)
    await connor.setInput(connor.CardNum, "23451001004322")
    await connor.click(connor.Pin)
    await connor.setInput(connor.Pin, "8019")
    await connor.click(connor.SignBtn2)
})

test("Search for and check out a book", async ()=> {
    await connor.click(connor.Search)
    await connor.click(connor.SearchBox)
    await connor.setInput(connor.SearchBox, "Maze Runner")
    await connor.click(connor.ConfSearch)

})

