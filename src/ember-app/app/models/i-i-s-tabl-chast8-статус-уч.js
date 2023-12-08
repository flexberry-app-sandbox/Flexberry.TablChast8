import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СтатусУчMixin
} from '../mixins/regenerated/models/i-i-s-tabl-chast8-статус-уч';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СтатусУчMixin, Validations, {
});

defineProjections(Model);

export default Model;
