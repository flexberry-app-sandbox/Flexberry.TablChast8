import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  ученик: DS.hasMany('i-i-s-tabl-chast8-ученик', { inverse: 'школа', async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-tabl-chast8-школа.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ученик: {
    descriptionKey: 'models.i-i-s-tabl-chast8-школа.validations.ученик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ШколаE', 'i-i-s-tabl-chast8-школа', {
    назв: attr('Назв', { index: 0 }),
    ученик: hasMany('i-i-s-tabl-chast8-ученик', 'Ученик', {
      фИО: attr('ФИО', { index: 0 }),
      классУч: belongsTo('i-i-s-tabl-chast8-класс-уч', 'Класс уч', {
        назв: attr('Назв', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'назв' })
    })
  });

  modelClass.defineProjection('ШколаL', 'i-i-s-tabl-chast8-школа', {
    назв: attr('Назв', { index: 0 })
  });
};
