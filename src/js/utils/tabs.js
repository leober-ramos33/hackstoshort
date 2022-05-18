import browser from "webextension-polyfill";

/**
 * Get the current tab.
 *
 * @return {array}
 */
export async function getCurrentTab() {
    const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true,
    });
    const currentTab = tabs[0];

    return currentTab;
}

/**
 * Verify if the current tab is a Hackshort url.
 *
 * @return {boolean}
 */
export async function currentTabIsValid() {
    const currentTab = await getCurrentTab();
    const regexp = /https?:\/\/(hackshort|acortalink).me|/;

    if (currentTab.url.match(regexp) !== null) {
        return true;
    } else {
        return false;
    }
}
