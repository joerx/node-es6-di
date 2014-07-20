/**
 * This will load the Traceur runtime providing the System module loader and some other mildly
 * confusing global stuff before including the application itself. 
 * 
 * This is just a loader script. Do not put anything else in here than the two lines below. 
 * Anything relevant to the application itself goes into ./lib/main.js
 */

require('traceur/bin/traceur-runtime');
require('./lib/main');
