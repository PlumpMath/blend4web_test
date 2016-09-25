// Compiled by ClojureScript 1.7.228 {}
goog.provide('cube_test.core');
goog.require('cljs.core');
cube_test.core.check_version = (function cube_test$core$check_version(){
var m_version = b4w.require("version");
return console.log("Using Blend4Web Version",m_version.version());
});
cube_test.core.check_version.call(null);
cube_test.core.start = (function cube_test$core$start(){
var m_main = b4w.require("main");
var m_data = b4w.require("data");
var m_scene = b4w.require("scenes");
var m_config = b4w.require("config");
var m_debug = b4w.require("debug");
var a_trans = b4w.require("transform");
var m_camera = b4w.require("camera");
var canvas = document.getElementById("container");
cube_test.core.loaded_cb = ((function (m_main,m_data,m_scene,m_config,m_debug,a_trans,m_camera,canvas){
return (function cube_test$core$start_$_loaded_cb(data_id,success){
return console.log("data id, success are: ",data_id,success);
});})(m_main,m_data,m_scene,m_config,m_debug,a_trans,m_camera,canvas))
;

cube_test.core.stageload_cb = ((function (m_main,m_data,m_scene,m_config,m_debug,a_trans,m_camera,canvas){
return (function cube_test$core$start_$_stageload_cb(data_id,success){
if(cljs.core.truth_(m_data.is_primary_loaded())){
var current_camera = m_scene.get_active_camera();
var cube = m_scene.get_object_by_name("Weird");
return m_camera.translate_view(current_camera,(1),(1),(-10));
} else {
return null;
}
});})(m_main,m_data,m_scene,m_config,m_debug,a_trans,m_camera,canvas))
;

m_data.load("cube_test.json",cube_test.core.loaded_cb,cube_test.core.stageload_cb,true,false);

return m_main.init(canvas);
});
goog.exportSymbol('cube_test.core.start', cube_test.core.start);
