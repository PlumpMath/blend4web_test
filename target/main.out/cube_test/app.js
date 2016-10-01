// Compiled by ClojureScript 1.7.228 {}
goog.provide('cube_test.app');
goog.require('cljs.core');
cube_test.app.check_version = (function cube_test$app$check_version(){
var m_version = b4w.require("version");
return console.log(m_version.version());
});
cube_test.app.m_data = b4w.require("data");
cube_test.app.m_app = b4w.require("app");
cube_test.app.m_scene = b4w.require("scenes");
cube_test.app.m_main = b4w.require("main");
cube_test.app.canvas = document.getElementById("container");
cube_test.app.load_cb = (function cube_test$app$load_cb(data_id,canvas){
console.log("load cb data-id",data_id);

console.log("canvas in load-cb",canvas);

return cube_test.app.m_app.enable_camera_controls();
});
goog.exportSymbol('cube_test.app.load_cb', cube_test.app.load_cb);
cube_test.app.load = (function cube_test$app$load(){
return cube_test.app.m_data.load("cube_test.json",cube_test.app.load_cb);
});
goog.exportSymbol('cube_test.app.load', cube_test.app.load);
cube_test.app.init_cb = (function cube_test$app$init_cb(data,success){
console.log("data",data);

console.log("success",success);

cube_test.app.load.call(null);

return console.log("callback finished");
});
goog.exportSymbol('cube_test.app.init_cb', cube_test.app.init_cb);
cube_test.app.start = (function cube_test$app$start(){
cube_test.app.m_app.init((function (){var obj11493 = {"canvas_container_id":"container","callback":cube_test.app.init_cb,"show_fps":true,"console_verbose":true,"autoresize":true};
return obj11493;
})());

return cube_test.app.m_main.init(cube_test.app.canvas);
});
goog.exportSymbol('cube_test.app.start', cube_test.app.start);
