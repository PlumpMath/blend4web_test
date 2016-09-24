(ns cube-test.core
  (:require blend4web))

(defn check-version []
    (let [m-version (.require js/b4w "version")]
      (.log js/console (.version m-version))))

(check-version)

(defn ^:export start
  []
  (let [m-main  (.require js/b4w "main")
        m-data  (.require js/b4w "data")
        m-scene (.require js/b4w "scenes")
        m-config (.require js/b4w "config")
        m-debug (.require js/b4w "debug")
        canvas  (.getElementById js/document "container")
        a-transform (.require js/b4w "transform")]

    (defn loaded-cb [data-id success]
      (.log js/console "loaded-cb: " data-id success))

    (defn stageload-cb [data-id success]
      (.log js/console "stageload-cb: " data-id success)
      (.log js/console "Is primary loaded" (.is_primary_loaded m-data)))

    ;;(.set m-config "console_verbose" true)
    (.load m-data "cube_test.json" loaded-cb stageload-cb true false)
    (.activate-media m-data)
    (.init m-main canvas)
    (.log js/console "Active scenes: " (.get-active m-scene))))
