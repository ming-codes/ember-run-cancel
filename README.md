# ember-run-cancel

[![Greenkeeper badge](https://badges.greenkeeper.io/ming-codes/ember-run-cancel.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/lightblade/ember-run-cancel.svg?branch=master)](https://travis-ci.org/lightblade/ember-run-cancel)
[![npm version](https://badge.fury.io/js/ember-run-cancel.svg)](http://badge.fury.io/js/ember-run-cancel)
[![Code Climate](https://codeclimate.com/github/lightblade/ember-run-cancel/badges/gpa.svg)](https://codeclimate.com/github/lightblade/ember-run-cancel)
[![Dependency Status](https://david-dm.org/lightblade/ember-run-cancel.svg)](https://david-dm.org/lightblade/ember-run-cancel)
[![devDependency Status](https://david-dm.org/lightblade/ember-run-cancel/dev-status.svg)](https://david-dm.org/lightblade/ember-run-cancel#info=devDependencies)

`ember-run-cancel` adds a `cancelOnDestroy` on all cancellable `Ember.run` methods to cancel the run when the target object is scheduled for destruction.

- `Ember.run.later.cancelOnDestroy(target, method, ...)`
- `Ember.run.once.cancelOnDestroy(target, method, ...)`
- `Ember.run.next.cancelOnDestroy(target, method, ...)`
- `Ember.run.debounce.cancelOnDestroy(target, method, ...)`
- `Ember.run.throttle.cancelOnDestroy(target, method, ...)`

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
