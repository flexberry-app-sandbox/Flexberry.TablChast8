import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  классУч: DS.belongsTo('i-i-s-tabl-chast8-класс-уч', { inverse: null, async: false }),
  родитель: DS.belongsTo('i-i-s-tabl-chast8-родитель', { inverse: null, async: false }),
  статусУч: DS.belongsTo('i-i-s-tabl-chast8-статус-уч', { inverse: null, async: false }),
  школа: DS.belongsTo('i-i-s-tabl-chast8-школа', { inverse: 'ученик', async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-tabl-chast8-ученик.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классУч: {
    descriptionKey: 'models.i-i-s-tabl-chast8-ученик.validations.классУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  родитель: {
    descriptionKey: 'models.i-i-s-tabl-chast8-ученик.validations.родитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  статусУч: {
    descriptionKey: 'models.i-i-s-tabl-chast8-ученик.validations.статусУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  школа: {
    descriptionKey: 'models.i-i-s-tabl-chast8-ученик.validations.школа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УченикE', 'i-i-s-tabl-chast8-ученик', {
    фИО: attr('ФИО', { index: 0 }),
    классУч: belongsTo('i-i-s-tabl-chast8-класс-уч', 'Класс уч', {
      назв: attr('Назв', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'назв' }),
    статусУч: belongsTo('i-i-s-tabl-chast8-статус-уч', 'Статус уч', {
      назв: attr('Назв', { index: 4 })
    }, { index: 3, displayMemberPath: 'назв' }),
    родитель: belongsTo('i-i-s-tabl-chast8-родитель', 'Родитель', {
      фио: attr('Фио', { index: 6 })
    }, { index: 5, displayMemberPath: 'фио' })
  });
};
