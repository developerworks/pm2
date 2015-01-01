REPORTER = spec
MOCHA_OPTS = --require expect.js --timeout 10000 --bail
MOCHA_PATH = ./node_modules/mocha/bin/mocha

test: test-unit
test-w: test-unit-w

test-unit:
	@NODE_ENV=test $(MOCHA_PATH) \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS)

test-unit-w:
	@NODE_ENV=test $(MOCHA_PATH) \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS) \
		--watch

.PHONY: test test-w