import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tabl-chast8.caption'),
          title: i18n.t('forms.application.sitemap.tabl-chast8.title'),
          children: [{
            link: 'i-i-s-tabl-chast8-класс-уч-l',
            caption: i18n.t('forms.application.sitemap.tabl-chast8.i-i-s-tabl-chast8-класс-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.tabl-chast8.i-i-s-tabl-chast8-класс-уч-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-tabl-chast8-школа-l',
            caption: i18n.t('forms.application.sitemap.tabl-chast8.i-i-s-tabl-chast8-школа-l.caption'),
            title: i18n.t('forms.application.sitemap.tabl-chast8.i-i-s-tabl-chast8-школа-l.title'),
            children: null
          }, {
            link: 'i-i-s-tabl-chast8-статус-уч-l',
            caption: i18n.t('forms.application.sitemap.tabl-chast8.i-i-s-tabl-chast8-статус-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.tabl-chast8.i-i-s-tabl-chast8-статус-уч-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-tabl-chast8-родитель-l',
            caption: i18n.t('forms.application.sitemap.tabl-chast8.i-i-s-tabl-chast8-родитель-l.caption'),
            title: i18n.t('forms.application.sitemap.tabl-chast8.i-i-s-tabl-chast8-родитель-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})