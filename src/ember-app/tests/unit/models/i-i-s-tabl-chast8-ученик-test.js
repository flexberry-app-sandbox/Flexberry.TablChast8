import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tabl-chast8-ученик', 'Unit | Model | i-i-s-tabl-chast8-ученик', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tabl-chast8-класс-уч',
    'model:i-i-s-tabl-chast8-родитель',
    'model:i-i-s-tabl-chast8-статус-уч',
    'model:i-i-s-tabl-chast8-ученик',
    'model:i-i-s-tabl-chast8-учитель',
    'model:i-i-s-tabl-chast8-школа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
