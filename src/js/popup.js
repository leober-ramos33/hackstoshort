import { getLocaleMsg, localizePage } from "./utils/localize";
import { getCurrentTab, currentTabIsValid } from "./utils/tabs";
import { printError } from "./utils/alerts";
import executeExploit from "./payload";

document.addEventListener("DOMContentLoaded", async () => {
    localizePage();

    if (await currentTabIsValid()) {
        executeExploit();
    } else {
        printError(
            `${getLocaleMsg(
                "currentTabIsNotValid"
            )} <br /> <br /> <ul>${getLocaleMsg(
                "currentTabIsNotValidOptions"
            )}</ul>`
        );
    }
});
