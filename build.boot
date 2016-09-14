(set-env!
  :source-paths #{"src"}
  :resource-paths #{"assets"}
  :dependencies '[[adzerk/boot-cljs "1.7.228-1"]
                  [cljsjs/blend4web "0.0.2-0"]])

(require '[adzerk.boot-cljs :refer [cljs]])

(deftask build
  []
  (comp
    (watch)
    (cljs :optimizations :simple)
    (target)))
