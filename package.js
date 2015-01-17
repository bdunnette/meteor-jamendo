Package.describe({
  name: 'bdunnette:jamendo',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('bdunnette:jamendo.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bdunnette:jamendo');
  api.addFiles('bdunnette:jamendo-tests.js');
});

Npm.depends({
  jamendo: "0.3.5"
});