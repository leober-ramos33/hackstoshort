import browser from "webextension-polyfill";
import { getCurrentTab } from "./utils/tabs";
import { printMsg, printError } from "./utils/alerts";
import { getLocaleMsg } from "./utils/localize";
import GibberishAES from "./vendor/gibberish-aes/gibberish-aes-1.0.0.min";

/**
 * Decrypt a link encrypted with AES and encoded with Base64. Basically a Hackstore.net download link
 *
 * @param {string} link - A string of the browser embed script with the link or a string with the encoded link in Base64.
 *
 * @return {string}
 */
export function decryptLink(link) {
    try {
        const KEY = "fee631d2cffda38a78b96ee6d2dfb43a";
        const embedScriptRegexp = /link_out = "(\w+)";/;
        const hackstoreOutRegexp = /https?:\/\/hackstore\.link\/\w+\/?/;

        // Verify if the passed argument is the embed script from the browser, otherwise choose the link passed
        const encodedLink = embedScriptRegexp.test(link)
            ? link.match(embedScriptRegexp)[1]
            : link;

        // Decode the link
        const decodedLink = atob(encodedLink);

        // Decrypt the link using GibberishAES
        const decryptedLink = GibberishAES.dec(decodedLink, KEY);

        // If Match the link with the pattern of hackstore out links
        if (hackstoreOutRegexp.test(decryptedLink)) {
            // Return it.
            return decryptedLink.match(hackstoreOutRegexp)[0];
        }

        // Otherwise return the decrypted link
        return decryptedLink;
    } catch (err) {
        throw new Error(getLocaleMsg("linkDecryptError"));
    }
}

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

        const link = decryptLink(result);

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
