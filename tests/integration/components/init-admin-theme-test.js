import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('init-admin-theme', 'Integration | Component | init admin theme', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{init-admin-theme}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#init-admin-theme}}
      template block text
    {{/init-admin-theme}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
