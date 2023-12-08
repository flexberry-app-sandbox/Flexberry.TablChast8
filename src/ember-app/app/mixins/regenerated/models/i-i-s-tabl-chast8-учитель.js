import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  школа: DS.belongsTo('i-i-s-tabl-chast8-школа', { inverse: 'учитель', async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-tabl-chast8-учитель.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  школа: {
    descriptionKey: 'models.i-i-s-tabl-chast8-учитель.validations.школа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УчительE', 'i-i-s-tabl-chast8-учитель', {
    фио: attr('Фио', { index: 0 })
  });
};
