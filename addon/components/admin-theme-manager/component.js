import Ember from 'ember';
import layout from './template';

const { inject } = Ember;

const Component = Ember.Component.extend({
  layout,
  adminConfig: inject.service(),

  didReceiveAttrs() {
    let theme = this.get('theme');
    this.set('adminConfig.activeTheme', theme);
  }
});

Component.reopenClass({
  positionalParams: ['theme']
});

export default Component;
