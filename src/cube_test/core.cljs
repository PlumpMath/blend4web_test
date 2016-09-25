(ns cube-test.core
  (:require blend4web))

(defn check-version []
    (let [m-version (.require js/b4w "version")]
      (.log js/console "Using Blend4Web Version" (.version m-version))))

(check-version)

(defn ^:export start
  []
  (let [m-main    (.require js/b4w "main")
        m-data    (.require js/b4w "data")
        m-scene   (.require js/b4w "scenes")
        m-config  (.require js/b4w "config")
        m-debug   (.require js/b4w "debug")
        a-trans   (.require js/b4w "transform")
        m-camera  (.require js/b4w "camera")
        canvas    (.getElementById js/document "container")]

    (defn loaded-cb [data-id success]
      (.log js/console "data id, success are: " data-id success))

    (defn stageload-cb [data-id success]

      (when (.is-primary-loaded m-data)
                (let [current-camera (.get-active-camera m-scene)
                      cube           (.get-object-by-name m-scene "Weird")]

                      (.translate-view m-camera current-camera 1 1 -10))))

    ;;(.set m-config "console_verbose" true)
    (.load m-data "cube_test.json" loaded-cb stageload-cb true false)
    (.init m-main canvas)))
