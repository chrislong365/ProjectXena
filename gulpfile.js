'use strict';

const gulp = require('gulp');
const elixir = require('laravel-elixir'); require('laravel-elixir-vue-2');

elixir.config.sourcemaps = false;

elixir((mix) => {
  mix.sass('./resources/src/sass/app.scss', 'public/css');
  mix.webpack('./resources/src/js/app.js', 'public/js');
  // mix.version(['css/app.css', 'js/app.js']);
});
