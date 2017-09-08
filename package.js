// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
  name: 'ilie-oxani:bootstrap-beta',  // https://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '4.0.0-beta',
  git: 'https://github.com/ilie-oxani/bootstrap-beta.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});
