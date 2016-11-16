import Ember from 'ember';

export function and([a, b]) {
  return a && b;
}

export default Ember.Helper.helper(and);
