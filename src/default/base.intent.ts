import {
    DialogflowConversation
  } from 'actions-on-google'
import { messages } from '../constants';

export const helpIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.help);    
} 

export const welcomeIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.welcome);    
}

export const byeIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.goodbye);    
}

export const ouiIdeeProvocationIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.reponseOuiIdeeProvocation);
    console.log(conv);
}
export const nonIdeeProvocationIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.reponseNonIdeeProvocation);
}