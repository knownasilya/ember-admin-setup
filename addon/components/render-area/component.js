import Ember from 'ember';
import layout from './template';

const { on, inject, observer } = Ember;

const Component = Ember.Component.extend({
  adminConfig: inject.service(),
  layout,

  didReceiveAttrs() {
    this.changeComponent();
  },

  changeComponentOnTheme: on('init', observer('adminConfig.activeTheme', 'adminConfig.areas', function () {
    this.changeComponent();
  })),

  changeComponent() {
    let theme = this.get('adminConfig.activeTheme') || 'default';
    let area = this.get('area');
    let type = this.get('type') || 'default';
    let comp = this.get(`adminConfig.areas.${theme}.${area}.${type}`);

    if (!comp) {
      comp = this.get(`adminConfig.areas.${theme}.${area}.default`);
    }

    this.set('comp', comp);
  }
});

Component.reopenClass({
  positionalParams: ['area', 'type']
});

export default Component;
