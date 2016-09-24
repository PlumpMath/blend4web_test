// Compiled by ClojureScript 1.7.228 {}
goog.provide('cube_test.core');
goog.require('cljs.core');
cube_test.core.check_version = (function cube_test$core$check_version(){
var m_version = b4w.require("version");
return console.log(m_version.version());
});
cube_test.core.check_version.call(null);
cube_test.core.start = (function cube_test$core$start(){
var m_main = b4w.require("main");
var m_data = b4w.require("data");
var m_scene = b4w.require("scenes");
var m_config = b4w.require("config");
var m_debug = b4w.require("debug");
var canvas = document.getElementById("container");
var a_transform = b4w.require("transform");
cube_test.core.loaded_cb = ((function (m_main,m_data,m_scene,m_config,m_debug,canvas,a_transform){
return (function cube_test$core$start_$_loaded_cb(data_id,success){
return console.log("loaded-cb: ",data_id,success);
});})(m_main,m_data,m_scene,m_config,m_debug,canvas,a_transform))
;

cube_test.core.stageload_cb = ((function (m_main,m_data,m_scene,m_config,m_debug,canvas,a_transform){
return (function cube_test$core$start_$_stageload_cb(data_id,success){
console.log("stageload-cb: ",data_id,success);

return console.log("Is primary loaded",m_data.is_primary_loaded());
});})(m_main,m_data,m_scene,m_config,m_debug,canvas,a_transform))
;

m_data.load("cube_test.json",cube_test.core.loaded_cb,cube_test.core.stageload_cb,true,false);

m_data.activate_media();

m_main.init(canvas);

return console.log("Active scenes: ",m_scene.get_active());
});
goog.exportSymbol('cube_test.core.start', cube_test.core.start);
