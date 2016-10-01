(ns cube-test.core
  (:require blend4web))

(defn check-version []
    (let [m-version (.require js/b4w "version")]
      (.log js/console "Using Blend4Web Version" (.version m-version))))

(check-version)

(defn ^:export start
  [json]
  (let [m-main      (.require js/b4w "main")
        m-data      (.require js/b4w "data")
        m-scene     (.require js/b4w "scenes")
        m-config    (.require js/b4w "config")
        m-trans     (.require js/b4w "transform")
        m-camera    (.require js/b4w "camera")
        m-controls  (.require js/b4w "controls")
        m-material  (.require js/b4w "material")
        m-rgba      (.require js/b4w "rgba")
        canvas      (.getElementById js/document "container")
        position    (atom {:current 0
                           :direction 1
                           :back-limit 30
                           :front-limit -30})
        cube-range  (range -30 30)]

    (defn loaded-cb [data-id success]
      (.log js/console
            "Main scene loaded on thread number: " data-id
            "with a success value of: " success))

    ;;You can think this manifold-cb as an update per tick loop.  At least when
    ;;the manifold type is an elapsed one. Note that the obj parameter returns
    ;;the time between the last update and the current - in seconds.
    (defn manifold-cb [obj manifold-id]
      "Make any per-tick changes here."
      (let [current-camera (.get-active-camera m-scene)
            cube           (.get-object-by-name m-scene "Cube")
            floor          (.get-object-by-name m-scene "Floor")
            sensor-data    (first obj)
            mat-name       (first (.get-materials-names m-material cube))]

            (if (or (= (:current @position) (:back-limit @position))
                    (= (:current @position) (:front-limit @position)))
                      (swap! position assoc :direction (* -1
                                                          (:direction @position))))

            (swap! position assoc :current (+ (:direction @position)
                                              (:current @position)))

            (.set-diffuse-color m-material cube mat-name
                                (.from-values m-rgba
                                            (/ (rand-int 7) 10)
                                            (/ (rand-int 3) 10)
                                            (/ (rand-int 2) 10)))

            (.set-translation m-trans cube
                              0
                              (/ (:current @position) 10)
                              1)

            (.rotate-z-local m-trans cube sensor-data)))

    (defn stageload-cb [data-id success]
      "Use camera, translation and other b4w modules if you want to do something
      static (ie. the whole time its running). If you want something to change
      over time, invoke the module functions within sensor manifold's callback
      scope instead.  In this case, that callback function would be manifold-cb"
      (when (.is-primary-loaded m-data)
                (let [elapsed-sensor (.create-elapsed-sensor m-controls)]
                  ;;The manifold sensor can act as an update-tick.
                      (.create-sensor-manifold m-controls
                                               nil
                                               "m_main"
                                               (.-CT_CONTINUOUS m-controls)
                                               (clj->js [elapsed-sensor])
                                                manifold-cb)

                  (.log js/console "stage-load callback finished"))))

    (.set m-config "console_verbose" true)
    (.load m-data (str json) loaded-cb stageload-cb true false)

    (.init m-main canvas)))
