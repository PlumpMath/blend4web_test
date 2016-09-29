// Compiled by ClojureScript 1.7.228 {}
goog.provide('cube_test.core');
goog.require('cljs.core');
cube_test.core.check_version = (function cube_test$core$check_version(){
var m_version = b4w.require("version");
return console.log("Using Blend4Web Version",m_version.version());
});
cube_test.core.check_version.call(null);
cube_test.core.start = (function cube_test$core$start(json){
var m_main = b4w.require("main");
var m_data = b4w.require("data");
var m_scene = b4w.require("scenes");
var m_config = b4w.require("config");
var m_trans = b4w.require("transform");
var m_camera = b4w.require("camera");
var m_controls = b4w.require("controls");
var m_material = b4w.require("material");
var m_rgba = b4w.require("rgba");
var canvas = document.getElementById("container");
var position = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"direction","direction",-633359395),(1),new cljs.core.Keyword(null,"back-limit","back-limit",-289535030),(30),new cljs.core.Keyword(null,"front-limit","front-limit",-271127864),(-30)], null));
var cube_range = cljs.core.range.call(null,(-30),(30));
cube_test.core.loaded_cb = ((function (m_main,m_data,m_scene,m_config,m_trans,m_camera,m_controls,m_material,m_rgba,canvas,position,cube_range){
return (function cube_test$core$start_$_loaded_cb(data_id,success){
return console.log("Main scene loaded on thread number: ",data_id,"with a success value of: ",success);
});})(m_main,m_data,m_scene,m_config,m_trans,m_camera,m_controls,m_material,m_rgba,canvas,position,cube_range))
;

cube_test.core.manifold_cb = ((function (m_main,m_data,m_scene,m_config,m_trans,m_camera,m_controls,m_material,m_rgba,canvas,position,cube_range){
return (function cube_test$core$start_$_manifold_cb(obj,manifold_id){

var current_camera = m_scene.get_active_camera();
var cube = m_scene.get_object_by_name("Cube");
var sensor_data = cljs.core.first.call(null,obj);
var mat_name = cljs.core.first.call(null,m_material.get_materials_names(cube));
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,position)),new cljs.core.Keyword(null,"back-limit","back-limit",-289535030).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,position)))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,position)),new cljs.core.Keyword(null,"front-limit","front-limit",-271127864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,position))))){
cljs.core.swap_BANG_.call(null,position,cljs.core.assoc,new cljs.core.Keyword(null,"direction","direction",-633359395),((-1) * new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,position))));
} else {
}

cljs.core.swap_BANG_.call(null,position,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,position)) + new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,position))));

m_material.set_diffuse_color(cube,mat_name,m_rgba.from_values((cljs.core.rand_int.call(null,(10)) / (10)),(cljs.core.rand_int.call(null,(10)) / (10)),(cljs.core.rand_int.call(null,(10)) / (10))));

m_trans.set_translation(cube,(0),(1),(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,position)) / (10)));

return m_trans.rotate_y_local(cube,sensor_data);
});})(m_main,m_data,m_scene,m_config,m_trans,m_camera,m_controls,m_material,m_rgba,canvas,position,cube_range))
;

cube_test.core.stageload_cb = ((function (m_main,m_data,m_scene,m_config,m_trans,m_camera,m_controls,m_material,m_rgba,canvas,position,cube_range){
return (function cube_test$core$start_$_stageload_cb(data_id,success){

if(cljs.core.truth_(m_data.is_primary_loaded())){
var elapsed_sensor = m_controls.create_elapsed_sensor();
m_controls.create_sensor_manifold(null,"m_main",m_controls.CT_CONTINUOUS,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elapsed_sensor], null)),cube_test.core.manifold_cb);

return console.log("stage-load callback finished");
} else {
return null;
}
});})(m_main,m_data,m_scene,m_config,m_trans,m_camera,m_controls,m_material,m_rgba,canvas,position,cube_range))
;

m_config.set("console_verbose",true);

m_data.load([cljs.core.str(json)].join(''),cube_test.core.loaded_cb,cube_test.core.stageload_cb,true,false);

return m_main.init(canvas);
});
goog.exportSymbol('cube_test.core.start', cube_test.core.start);
