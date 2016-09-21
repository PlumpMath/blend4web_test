(ns cube-test.core
  (:require blend4web))

(defn check-version []
    (let [m-version (.require js/b4w "version")]
      (.log js/console (.version m-version))))

(check-version)

(defn ^:export hello
  []
  (let [m-main  (.require js/b4w "main")
        m-data  (.require js/b4w "data")
        m-scene (.require js/b4w "scenes")
        canvas  (.getElementById js/document "container")]

    (.init m-main canvas)
    (.load m-data "cube_test.json")
    (.set_active m-scene "scenes")
    (.get_active m-scene)
    ;;(def m-camera (.get_active_camera m-scene "scene"))
    (.log js/console m-scene)))
