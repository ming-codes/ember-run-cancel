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

[ 'later', 'once', 'next', 'debounce', 'throttle' ].forEach((runner) => {
  test(`it should cancel scheduled "${runner}" on object destroy`, function(assert) {
    var obj = Ember.Object.create({});

    initialize(container, application);

    stop();

    assert.expect(0);

    Ember.run(() => {
      obj.destroy();

      Ember.run[runner].cancelOnDestroy(obj, () => {
        assert.ok(false, `${runner} fired`);
      }, 100);

      setTimeout(start, 300);
    });

  });

  test(`it should run scheduled "${runner}" on object NOT destroyed`, function(assert) {
    var obj = Ember.Object.create({});

    initialize(container, application);

    assert.expect(1);

    stop();

    Ember.run(() => {
      Ember.run[runner].cancelOnDestroy(obj, () => {
        assert.ok(true, `${runner} fired`);
      }, 100);

      setTimeout(start, 300);
    });

  });
});

