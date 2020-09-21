import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders header', async function(assert) {
    await render(hbs`{{header}}`);

    assert.ok(this.element.textContent.indexOf('Blog Project') > -1);
  });
});
