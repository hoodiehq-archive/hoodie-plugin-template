# Hoodie Plugin Template

This is a template layout for a Hoodie plugin. It contains a Gruntfile with
appropriate tasks for running jshint, unit tests and browser tests against
a Hoodie server.

You'll need to have phantomjs and grunt installed:

```
npm install -g phantomjs grunt-cli
```

## To run tests / linting

Install dev dependencies:

```
npm install
```

Then run the 'test' task

```
grunt test
```

You can also run `test:unit` or `test:browser` individually.

If your plugin depends on other plugins being present (usually it will at
least depend on the hoodie users plugin), then make sure they're included
in your devDependencies in package.json and listed in the hoodie.plugins
property. This way, they'll also get started when the browser tests are
run.

NOTE: When running the browser tests, the grunt tasks will remove the local
Hoodie 'data' directory completely so you get a clean database to test
against. Be careful you don't use this path for any data you may want to
keep!


## Troubleshooting

If it should happen that while you are developing your tests and you
run `grunt` and instead of running all the tests, you see a prompt that
asks you for a CouchDB _admin user, a previous run of the test suite
didn’t fisnish properly and you have to kill it yourself. Do not
dispair, this is easy:

> ps ax | grep node

should show you something like this:

> 49688 s003  S      0:00.95 /usr/local/bin/node /Users/jan/Work/hoodie/hoodie-plugin-template/node_modules/hoodie-server/bin/start --www test/browser

If you see this, just run:

> kill -TERM 49688

The `-TERM` is important, so the subsequent CouchDB process terminates
correctly as well. If you leave that off, you have to find and kill
that yourself.
