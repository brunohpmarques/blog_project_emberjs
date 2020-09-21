import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | category-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders category', async function(assert) {
    this.set('category', {
      id: 1,
      name: 'Category A'
    });

    await render(hbs`{{category-item category=category}}`);

    assert.ok(this.element.textContent.indexOf('Category A') > -1);
  });
});
