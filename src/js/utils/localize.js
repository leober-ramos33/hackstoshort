import browser from "webextension-polyfill";

/**
 * Get a i18n message
 *
 * @param {String} key The key of the message.
 *
 * @return {String}
 */
export function getLocaleMsg(key) {
    return browser.i18n.getMessage(key);
}

/**
 * Localize by replacing __MSG_***__ meta tags
 *
 * @url https://stackoverflow.com/a/25612056
 *
 * @return void
 */
export function localizePage() {
    const objects = document.getElementsByTagName("html");

    for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];
        const valStrH = obj.innerHTML.toString();
        const valNewH = valStrH.replace(/__MSG_(\w+)__/g, function (match, v1) {
            return v1 ? browser.i18n.getMessage(v1) : "";
        });

        if (valNewH != valStrH) {
            obj.innerHTML = valNewH;
        }
    }
}
