/**
 * Create a alert.
 *
 * @param {string} message
 * @param {string} class
 *
 * @return {void}
 */
function createAlert(message, style) {
    const el = document.createElement("p");
    el.classList.add("alert", style);
    el.innerHTML = message;

    document.querySelector("main").appendChild(el);
}

/**
 * Print a error message.
 *
 * @param {string} message
 *
 * @return {void}
 */
export function printError(message) {
    createAlert(message, "alert-red");
}

/**
 * Print a successfull message.
 *
 * @param {string} message
 *
 * @return {void}
 */
export function printMsg(message) {
    createAlert(message, "alert-green");
}
