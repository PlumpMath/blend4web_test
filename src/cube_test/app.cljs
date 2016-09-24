(ns cube-test.app
  (:require blend4web))

(defn check-version []
    (let [m-version (.require js/b4w "version")]
      (.log js/console (.version m-version))))

(def m-data (.require js/b4w "data"))
(def m-app (.require js/b4w "app"))
(def m-scene (.require js/b4w "scenes"))

(defn ^:export load-cb [data-id canvas]
  (.log js/console "load cb data-id" data-id)
  (.log js/console "canvas in load-cb" canvas)
  (.enable-camera-controls m-app))

(defn ^:export load []
  (.load m-data "cube_test.json" load-cb))

(defn ^:export init-cb [data success]
  (.log js/console "data" data)
  (.log js/console "success" success)
  (load)
  (.log js/console "callback finished"))

(defn ^:export start
  []
  (.init m-app (js-obj "canvas_container_id" "container"
                       "callback" init-cb
                       "show_fps" true
                       "console_verbose" true
                       "autoresize" true))
  (.report-app-error m-app "ERROR" "so and so" "replace" "a"))
