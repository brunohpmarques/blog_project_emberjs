import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | categories', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders categories', async function(assert) {
    await render(hbs`{{categories}}`);

    assert.ok(this.element.textContent.indexOf('Categories') > -1);
  });
});
