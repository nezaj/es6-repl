MAKEFLAGS = --no-print-directory --always-make --silent
MAKE = make $(MAKEFLAGS)

NODE_BIN = node_modules/.bin
NODE = $(NODE_BIN)/babel-node

.PHONY: repl

repl:
	@echo "Starting repl..."
	$(NODE) repl.js
