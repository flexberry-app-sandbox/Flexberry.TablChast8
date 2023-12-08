import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tabl-chast8-класс-уч-l');
  this.route('i-i-s-tabl-chast8-класс-уч-e',
  { path: 'i-i-s-tabl-chast8-класс-уч-e/:id' });
  this.route('i-i-s-tabl-chast8-класс-уч-e.new',
  { path: 'i-i-s-tabl-chast8-класс-уч-e/new' });
  this.route('i-i-s-tabl-chast8-статус-уч-l');
  this.route('i-i-s-tabl-chast8-статус-уч-e',
  { path: 'i-i-s-tabl-chast8-статус-уч-e/:id' });
  this.route('i-i-s-tabl-chast8-статус-уч-e.new',
  { path: 'i-i-s-tabl-chast8-статус-уч-e/new' });
  this.route('i-i-s-tabl-chast8-школа-l');
  this.route('i-i-s-tabl-chast8-школа-e',
  { path: 'i-i-s-tabl-chast8-школа-e/:id' });
  this.route('i-i-s-tabl-chast8-школа-e.new',
  { path: 'i-i-s-tabl-chast8-школа-e/new' });
});

export default Router;
