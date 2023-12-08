import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTabl_chast8КлассУчLForm from './forms/i-i-s-tabl-chast8-класс-уч-l';
import IISTabl_chast8РодительLForm from './forms/i-i-s-tabl-chast8-родитель-l';
import IISTabl_chast8СтатусУчLForm from './forms/i-i-s-tabl-chast8-статус-уч-l';
import IISTabl_chast8ШколаLForm from './forms/i-i-s-tabl-chast8-школа-l';
import IISTabl_chast8КлассУчEForm from './forms/i-i-s-tabl-chast8-класс-уч-e';
import IISTabl_chast8РодительEForm from './forms/i-i-s-tabl-chast8-родитель-e';
import IISTabl_chast8СтатусУчEForm from './forms/i-i-s-tabl-chast8-статус-уч-e';
import IISTabl_chast8ШколаEForm from './forms/i-i-s-tabl-chast8-школа-e';
import IISTabl_chast8КлассУчModel from './models/i-i-s-tabl-chast8-класс-уч';
import IISTabl_chast8РодительModel from './models/i-i-s-tabl-chast8-родитель';
import IISTabl_chast8СтатусУчModel from './models/i-i-s-tabl-chast8-статус-уч';
import IISTabl_chast8УченикModel from './models/i-i-s-tabl-chast8-ученик';
import IISTabl_chast8ШколаModel from './models/i-i-s-tabl-chast8-школа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tabl-chast8-класс-уч': IISTabl_chast8КлассУчModel,
    'i-i-s-tabl-chast8-родитель': IISTabl_chast8РодительModel,
    'i-i-s-tabl-chast8-статус-уч': IISTabl_chast8СтатусУчModel,
    'i-i-s-tabl-chast8-ученик': IISTabl_chast8УченикModel,
    'i-i-s-tabl-chast8-школа': IISTabl_chast8ШколаModel
  },

  'application-name': 'Tabl_chast8',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tabl_chast8',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tabl_chast8',
          title: 'Tabl_chast8'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
          },
          'i-i-s-tabl-chast8-статус-уч-l': {
            caption: 'СтатусУч',
            title: ''
          },
          'i-i-s-tabl-chast8-родитель-l': {
            caption: 'Родитель',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-tabl-chast8-класс-уч-l': IISTabl_chast8КлассУчLForm,
    'i-i-s-tabl-chast8-родитель-l': IISTabl_chast8РодительLForm,
    'i-i-s-tabl-chast8-статус-уч-l': IISTabl_chast8СтатусУчLForm,
    'i-i-s-tabl-chast8-школа-l': IISTabl_chast8ШколаLForm,
    'i-i-s-tabl-chast8-класс-уч-e': IISTabl_chast8КлассУчEForm,
    'i-i-s-tabl-chast8-родитель-e': IISTabl_chast8РодительEForm,
    'i-i-s-tabl-chast8-статус-уч-e': IISTabl_chast8СтатусУчEForm,
    'i-i-s-tabl-chast8-школа-e': IISTabl_chast8ШколаEForm
  },

});

export default translations;
