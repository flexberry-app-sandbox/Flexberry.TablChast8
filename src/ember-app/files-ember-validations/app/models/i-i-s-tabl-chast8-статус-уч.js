import {
  defineNamespace,
  defineProjections,
  Model as СтатусУчMixin
} from '../mixins/regenerated/models/i-i-s-tabl-chast8-статус-уч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтатусУчMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
