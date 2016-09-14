(ns cube-test.core
  (:require blend4web))

(defn check-version []
    (let [m-version (.require js/b4w "version")]
      (.log js/console (.version m-version))))

(check-version)

(defn ^:exports hello
  []
  (let [m-main  (.require js/b4w "main")
        m-data  (.require js/b4w "data")
        canvas  (.getElementById js/document "container")]

    ;;(.log js/console "Main" m-main)
    ;;(.log js/console "data" m-data)
    ;;(.log js/console "canvas" canvas)

    (.init m-main canvas)
    (.load m-data "cube_test.json")))
