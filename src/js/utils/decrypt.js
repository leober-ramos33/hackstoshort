import GibberishAES from "../vendor/gibberish-aes/gibberish-aes-1.0.0.min";

/**
 * Decrypt a link encrypted with AES and encoded with Base64. Basically a Hackstore.net download link
 *
 * @param {string} link - A string of the browser embed script with the link or a string with the encoded link in Base64.
 *
 * @return {string}
 */
export function decryptLink(link) {
    const KEY = "fee631d2cffda38a78b96ee6d2dfb43a"; // Key for AES decryption
    const embedScriptRegexp = /link_out = "(.*)";?/;

    // Verify if the passed argument is the embed script from the browser, otherwise choose the link passed
    const encodedLink = embedScriptRegexp.test(link)
        ? link.match(embedScriptRegexp)[1]
        : link;

    // Decode the link
    const decodedLink = atob(encodedLink);

    // Decrypt the link using GibberishAES
    const decryptedLink = GibberishAES.dec(decodedLink, KEY);

    // Otherwise return the decrypted link
    return decryptedLink;
}
