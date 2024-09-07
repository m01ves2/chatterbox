'use stict';

import hello from './modules/hello.js';
import addLoginHandler from './modules/modal-login.js';
import addSignupHandler from './modules/modal-signup.js';
import { Validity } from './modules/validity.js';

// hello();
addLoginHandler();
addSignupHandler();
Validity();
