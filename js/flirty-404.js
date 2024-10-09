/*
 * Flirty - 404 Page
 * Build Date: October 2016
 * Author: joashp
 */

var transcript = new Array(
    "Hate to tell you this, but that page ain\'t here.",
    "Seriously. It\'s not.",
    "404 baby. 40-freakin\'-4.",
    "If you Dont Go back Now your Gay,",
    "folks. WE GOT A GAY ONE",
    "GAY",
    "GAY",
    "GAY",
    "GAY",
    "GAY",
    "GAY",
    "GAY",
    "GAY",
    "*sigh**
    "You're Still Gay!"
);

var speed = 80;
var index = 0;
text_pos = 0;
var str_length = transcript[0].length;
var contents, row;

function start_type_text() {
    contents = '';
    row = Math.max(0, index - 6);
    while (row < index)
        contents += transcript[row++] + '\r\n';
    document.textform.elements[0].value = contents + transcript[index].substring(0, text_pos) + "_";
    if (text_pos++ == str_length) {
        text_pos = 0;
        index++;
        if (index != transcript.length) {
            str_length = transcript[index].length;
            setTimeout("start_type_text()", 1500);
        }
    } else
        setTimeout("start_type_text()", speed);
}

function MM_callJS(jsStr) {
    return eval(jsStr)
}
