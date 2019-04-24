"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the appropriate service and chosen wrappers
var actions_on_google_1 = require("actions-on-google");
var base_intent_1 = require("./default/base.intent");
// Create an app instance
var app = actions_on_google_1.dialogflow();
// Register handlers for Dialogflow intents
app.intent('Default Welcome Intent', base_intent_1.welcomeIntent);
// Intent in Dialogflow called `Goodbye`
app.intent('Goodbye', base_intent_1.byeIntent);
app.intent('Help', base_intent_1.helpIntent);
app.intent('Default Fallback Intent', function (conv) {
    conv.ask("I didn't understand. Can you tell me something else?");
});
exports.fulfillment = app;
//# sourceMappingURL=index.js.map