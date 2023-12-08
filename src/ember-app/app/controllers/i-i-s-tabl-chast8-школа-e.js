import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-tabl-chast8-школа-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-tabl-chast8-ученик+классУч':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'назв',
            required: true,
            relationName: 'классУч',
            projection: 'КлассУчL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
