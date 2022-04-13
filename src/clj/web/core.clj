(ns web.core
  (:require [reitit.ring :as ring]
            [reitit.middleware :as middleware]
            [muuntaja.core :as m]
            [aleph.http :as http]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [mount.core :as mount]
            [ring.adapter.jetty :as ring-jetty]
            [clojure.data.json :as json]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]))

(defn index-handler [_]
  {:body (slurp (io/resource "public/index.html"))})

(def path (get (read-string (slurp (io/resource "public/param/param.edn"))) :db_path "kosong mas"))

(defn create-handler [{:keys [body-params]}]
  (spit (io/resource path) body-params)
  {:body (str body-params)
   :timeout 8000
   :status 200})

 (defn init-post [_]
   {:body (slurp (io/resource path))
    :timeout 8000
    :status 200})

(def app
  (ring/ring-handler
   (ring/router
    [
     ["/init" {:get init-post}]
     ["/submit" {:post create-handler
                 :middleware [:content]}]
     ["/assets/*" (ring/create-resource-handler {:root "public/assets/"})]
     ["/" {:get index-handler}]]
    {::middleware/registry {:content muuntaja/format-middleware}
     :data {:muuntaja m/instance}})))

(mount/defstate server
  :start (http/start-server #'app {:port 8123})
  :stop (.close server))

(defn -main [& _]
  (mount/start))

;;pedestal router