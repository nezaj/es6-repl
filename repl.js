/* Bootstrapped repl for rapid prototyping */
import repl from 'repl';

// Common imports I seem to use a lot
import fs from 'fs';
import path from 'path';

// Customize repl context
// ---------------------------------------------------------------------------
const hello = 'Hello World!'

function initializeContext(context) {
  context.hello = hello;
}

// Start repl
// ---------------------------------------------------------------------------
const r = repl.start({
  prompt: "my-repl > ",
})
initializeContext(r.context);

r.on('reset', initializeContext);
