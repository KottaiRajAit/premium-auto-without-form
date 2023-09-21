
/**
 * Set the API key
 * @param {string} ochnkey - The API key
 */

var ochnkey = 'Qo1cs4S4SCdL8fN85dC5PuDU';

(function (d, s, id) {
    let js, ojs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) { return; }

    js = d.createElement(s); js.id = id; js.async = !0;

    js.src = "https://staging.footprintsforretail.com/jsapi/omnichannelLead.js";

    ojs.parentNode.insertBefore(js, ojs);

}(document, 'script', 'omnichanneltrack'));

/**
 * Initialization function 
 * ocnh.init()   - Initialized the F-AI omnichannel Js library
 * ochn.send()   - Tracking the search of the page
 */

async function ochntrack() {

}
