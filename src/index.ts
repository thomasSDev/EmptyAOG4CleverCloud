// Import the appropriate service and chosen wrappers
import {
  dialogflow,
  DialogflowConversation
} from 'actions-on-google'

import { 
  helpIntent,
  welcomeIntent,
  byeIntent
} from './default/base.intent';


// Create an app instance
const app = dialogflow()

// Register handlers for Dialogflow intents

app.intent('Default Welcome Intent', welcomeIntent)

// Intent in Dialogflow called `Goodbye`
app.intent('Goodbye', byeIntent)

app.intent('Help', helpIntent)

app.intent('Default Fallback Intent', (conv: DialogflowConversation) => {
  conv.ask(`I didn't understand. Can you tell me something else?`)
})

exports.fulfillment = app;