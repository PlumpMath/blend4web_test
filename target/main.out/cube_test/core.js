// Compiled by ClojureScript 1.7.228 {}
goog.provide('cube_test.core');
goog.require('cljs.core');
cube_test.core.check_version = (function cube_test$core$check_version(){
var m_version = b4w.require("version");
return console.log(m_version.version());
});
cube_test.core.check_version.call(null);
cube_test.core.hello = (function cube_test$core$hello(){
var m_main = b4w.require("main");
var m_data = b4w.require("data");
var m_scene = b4w.require("scenes");
var canvas = document.getElementById("container");
m_main.init(canvas);

m_data.load("cube_test.json");

m_scene.set_active("scenes");

m_scene.get_active();

return console.log(m_scene);
});
goog.exportSymbol('cube_test.core.hello', cube_test.core.hello);
