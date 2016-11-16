import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('initialize-admin-theme', 'Integration | Component | initialize admin theme', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{initialize-admin-theme}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#initialize-admin-theme}}
      template block text
    {{/initialize-admin-theme}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
