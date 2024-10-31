'use stict';

import addLoginHandler from './modules/modal-login.js';
import addSignupHandler from './modules/modal-signup.js';
import { CheckLoginValidity, CheckSignupValidity } from './modules/validity.js';

addLoginHandler();
addSignupHandler();
CheckLoginValidity();
CheckSignupValidity();
