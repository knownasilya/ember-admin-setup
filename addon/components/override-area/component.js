import Ember from 'ember';
import layout from './template';

const { set, inject } = Ember;

const Component = Ember.Component.extend({
  adminConfig: inject.service(),

  didReceiveAttrs() {
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
  }
});

Component.reopenClass({
  positionalParams: ['area', 'type']
});

export default Component;
