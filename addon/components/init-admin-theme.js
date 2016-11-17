import Ember from 'ember';
import layout from '../templates/components/init-admin-theme';

const Component = Ember.Component.extend({
  layout
});

Component.reopenClass({
  positionalParams: ['theme']
});

export default Component;
