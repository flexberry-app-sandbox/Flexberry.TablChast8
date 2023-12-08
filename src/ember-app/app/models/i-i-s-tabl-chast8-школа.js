import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ШколаMixin
} from '../mixins/regenerated/models/i-i-s-tabl-chast8-школа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ШколаMixin, Validations, {
});

defineProjections(Model);

export default Model;
