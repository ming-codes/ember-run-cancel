import Ember from 'ember';
import { initialize } from '../../../initializers/run-ext';
import { module, test } from 'qunit';

var container, application;

module('RunExtInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

[ 'later', 'once', 'next', 'debounce', 'throttle' ].forEach((cancellable) => {
  test(`it should cancel scheduled "${cancellable}" on object destroy`, function(assert) {
    var obj = Ember.Object.create({});

    initialize(container, application);

    assert.expect(0);

    Ember.run(() => {
      Ember.run.cancelOnDestroy(obj)[cancellable](() => {
        assert.ok(false, `${cancellable} fired`);
      });

      obj.destroy();
    });

  });

  test(`it should run scheduled "${cancellable}" on object not destroyed`, function(assert) {
    var obj = Ember.Object.create({});

    initialize(container, application);

    assert.expect(1);

    Ember.run(() => {
      Ember.run.cancelOnDestroy(obj)[cancellable](() => {
        assert.ok(true, `${cancellable} fired`);
      });
    });

  });
});

