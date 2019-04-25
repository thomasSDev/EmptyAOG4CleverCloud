'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var actions_on_google_1 = require("actions-on-google");
exports.mediaPlayer = function (title, url, description, image) {
    return new actions_on_google_1.MediaObject({
        name: title,
        url: url,
        description: description,
        icon: new actions_on_google_1.Image({
            url: image,
            alt: title,
        })
    });
};
exports.confirmation = function (message) {
    return new actions_on_google_1.Confirmation(message);
};
/**
 *
 * @param {String Array} suggestions
 */
exports.suggestionsChips = function (suggestions) {
    return new actions_on_google_1.Suggestions(suggestions);
};
//# sourceMappingURL=template.js.map