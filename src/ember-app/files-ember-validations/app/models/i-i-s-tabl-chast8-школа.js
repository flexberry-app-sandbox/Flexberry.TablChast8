import {
  defineNamespace,
  defineProjections,
  Model as ШколаMixin
} from '../mixins/regenerated/models/i-i-s-tabl-chast8-школа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ШколаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
