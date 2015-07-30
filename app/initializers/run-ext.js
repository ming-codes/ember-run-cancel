
import Ember from 'ember';

function wrap(context, method) {
  var type = typeof method;

  if (type === 'string' || type === 'function') {
    return function cancellable() {
      if (!context.isDestroying) {
        (typeof method === 'string' ? this[method] : method)
          .apply(this, arguments);
      }
    }
  }

  return method;
}

function makeCancellable(context) {
  return function wrappedCancellable() {
    var args = Array.prototype.slice.call(arguments);

    args[0] = wrap(context, args[0]);
    args[1] = wrap(context, args[1]);

    return Ember.run.later(...args);
  };
}

export function initialize() {
  Ember.run.cancelOnDestroy = function cancelOnDestroy(context) {
    return [ 'later', 'once', 'next', 'debounce', 'throttle' ].reduce((accum, name) => {
      accum[name] = makeCancellable(name);

      return accum;
    }, {});
  };
}

export default {
  name: 'run-ext',
  initialize: initialize
};
