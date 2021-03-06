import Ember from 'ember';
import layout from './template';

const { set, inject, observer } = Ember;

const Component = Ember.Component.extend({
  adminConfig: inject.service(),

  didReceiveAttrs() {
    this.setComponent();
  },

  setComponentOnThemeChange: observer('adminConfig.activeTheme', function () {
    this.setComponent();
  }),

  setComponent() {
    let adminConfig = this.get('adminConfig');
    let areas = this.get('adminConfig.areas');
    let theme = this.get('theme') || 'default';
    let area = this.get('area');
    let type = this.get('type') || 'default';
    let send = this.get('send');
    let location = `${theme}.${area}.${type}`;

    if (!areas[theme]) {
      areas[theme] = Ember.Object.create();
    }

    if (!areas[theme][area]) {
      areas[theme][area] = Ember.Object.create();
    }

    set(areas, location, send);
    adminConfig.notifyRenderArea(location);
  }
});

Component.reopenClass({
  positionalParams: ['area', 'type']
});

export default Component;
