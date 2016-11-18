import Ember from 'ember';
import layout from './template';

const Component = Ember.Component.extend({
  layout
});

Component.reopenClass({
  positionalParams: ['theme']
});

export default Component;
