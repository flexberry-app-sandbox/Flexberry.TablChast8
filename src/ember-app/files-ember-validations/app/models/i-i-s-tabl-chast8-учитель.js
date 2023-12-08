import {
  defineNamespace,
  defineProjections,
  Model as УчительMixin
} from '../mixins/regenerated/models/i-i-s-tabl-chast8-учитель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УчительMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
