import browser from "webextension-polyfill";
import { getCurrentTab } from "./utils/tabs";
import { printMsg, printError } from "./utils/alerts";
import { getLocaleMsg } from "./utils/localize";
import { decryptLink } from "./utils/decrypt";

/**
 * Execute exploit.
 *
 * @param {number} tabId
 */
export default async function execute(tabId) {
    const currentTab = await getCurrentTab();

    try {
        const [result] = await browser.tabs.executeScript({
            allFrames: false,
            code:
                "(function () { return document.querySelectorAll('script')[2].innerText; })();",
        });

        let link;
        try {
            link = decryptLink(result);
        } catch {
            throw new Error(getLocaleMsg("linkDecryptError"));
        }

        printMsg(
            `${getLocaleMsg(
                "linkFound"
            )}: <a href="${link}" target="_blank">${link}</a>`
        );
    } catch (err) {
        printError(err);
        printError(
            `${getLocaleMsg("linkNotFound")} <br /> <br /> <ul>${getLocaleMsg(
                "linkNotFoundOptions"
            )}</ul>`
        );
    }
}
