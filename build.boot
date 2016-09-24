(set-env!
  :source-paths #{"src"}
  :resource-paths #{"assets"}
  :dependencies '[[adzerk/boot-cljs "1.7.228-1"]
                  [cljsjs/blend4web "0.0.2-0"]
                  [tailrecursion/boot-jetty "0.1.0"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[tailrecursion.boot-jetty :refer [serve]])

(deftask build
  []
  (comp
    (watch)
    (cljs :optimizations :simple)
    (target)
    (serve :port 8000)))
