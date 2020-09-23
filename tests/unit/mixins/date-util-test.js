import EmberObject from '@ember/object';
import DateUtilMixin from 'blog-project/mixins/date-util';
import { module, test } from 'qunit';

module('Unit | Mixin | date-util', function() {
  // TODO: Replace this with your real tests.
  test('it works', function (assert) {
    let DateUtilObject = EmberObject.extend(DateUtilMixin);
    let subject = DateUtilObject.create();
    assert.ok(subject);
  });
});
