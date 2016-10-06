import Vue from 'vue';

Vue.use(require('vue-resource'));

let protocol = "http";
let hostname = "localhost";
let port = "5600";
//let port = "5666";
let origin = protocol + "://" + hostname + ":" + port;

let $Bucket     = Vue.resource(origin + '/api/0/buckets/{id}');
let $Event      = Vue.resource(origin + '/api/0/buckets/{id}/events');
let $EventChunk = Vue.resource(origin + '/api/0/buckets/{id}/events/chunk?start={start}&end={end}');
let $GetViews   = Vue.resource(origin + '/api/0/views/');
let $QueryView  = Vue.resource(origin + '/api/0/views/{viewname}?limit={limit}&start={start}&end={end}');
let $CreateView = Vue.resource(origin + '/api/0/views/{viewname}/create');
let $GetViewInfo= Vue.resource(origin + '/api/0/views/{viewname}/info');
let $Log        = Vue.resource(origin + '/api/0/log');

export default {
  $Bucket:      $Bucket,
  $Event:       $Event,
  $EventChunk:  $EventChunk,
  $GetViews:    $GetViews,
  $QueryView:   $QueryView,
  $CreateView:  $CreateView,
  $GetViewInfo: $GetViewInfo,
  $Log:         $Log,
};

