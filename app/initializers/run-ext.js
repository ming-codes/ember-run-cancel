
import Ember from 'ember';

export function initialize() {
  [ 'later', 'once', 'next', 'debounce', 'throttle' ].forEach((runner) => {
    Ember.run[runner].cancelOnDestroy = function () {
      var args = Array.prototype.slice.call(arguments);
      var [ target, method ] = args;

      Ember.assert('`cancelOnDestroy` requires a target object', Ember.typeOf(target) === 'instance');

      args[1] = function () {
        var real = typeof method === 'string' ? target[method] : method;

        if (!target.isDestroying) {
          method.apply(target, arguments);
        }
      };

      return Ember.run[runner].apply(Ember.run, args);
    };
  });
}

export default {
  name: 'run-ext',
  initialize: initialize
};
