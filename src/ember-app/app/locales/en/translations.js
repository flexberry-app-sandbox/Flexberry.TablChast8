import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTabl_chast8КлассУчLForm from './forms/i-i-s-tabl-chast8-класс-уч-l';
import IISTabl_chast8ШколаLForm from './forms/i-i-s-tabl-chast8-школа-l';
import IISTabl_chast8КлассУчEForm from './forms/i-i-s-tabl-chast8-класс-уч-e';
import IISTabl_chast8ШколаEForm from './forms/i-i-s-tabl-chast8-школа-e';
import IISTabl_chast8КлассУчModel from './models/i-i-s-tabl-chast8-класс-уч';
import IISTabl_chast8УченикModel from './models/i-i-s-tabl-chast8-ученик';
import IISTabl_chast8ШколаModel from './models/i-i-s-tabl-chast8-школа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tabl-chast8-класс-уч': IISTabl_chast8КлассУчModel,
    'i-i-s-tabl-chast8-ученик': IISTabl_chast8УченикModel,
    'i-i-s-tabl-chast8-школа': IISTabl_chast8ШколаModel
  },

  'application-name': 'Tabl_chast8',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tabl_chast8',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tabl_chast8',
          title: 'Tabl_chast8'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'tabl-chast8': {
          caption: 'Tabl_chast8',
          title: 'Tabl_chast8',
          'i-i-s-tabl-chast8-класс-уч-l': {
            caption: 'Класс уч',
            title: ''
          },
          'i-i-s-tabl-chast8-школа-l': {
            caption: 'Школа',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tabl-chast8-класс-уч-l': IISTabl_chast8КлассУчLForm,
    'i-i-s-tabl-chast8-школа-l': IISTabl_chast8ШколаLForm,
    'i-i-s-tabl-chast8-класс-уч-e': IISTabl_chast8КлассУчEForm,
    'i-i-s-tabl-chast8-школа-e': IISTabl_chast8ШколаEForm
  },

});

export default translations;
