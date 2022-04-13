goog.provide('message_log_3.events');
message_log_3.events.clj__GT_json = (function message_log_3$events$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js(ds));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","initialize-db","message-log-3.events/initialize-db",46490873),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__31811__auto__ = message_log_3.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__31811__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__31811__auto__;
}catch (e31929){var e = e31929;
throw e;
}}):(function (_,___$1){
return message_log_3.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","navigate","message-log-3.events/navigate",573682980),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__31930){
var vec__31931 = p__31930;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31931,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31931,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)));

var result__31811__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (){var result__31811__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__31811__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__31811__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__31811__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__31811__auto__;
}catch (e31934){var e = e31934;
throw e;
}}):(function (_,p__31935){
var vec__31936 = p__31935;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31936,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31936,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","set-active-panel","message-log-3.events/set-active-panel",-848456369),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__31939,p__31940){
var map__31941 = p__31939;
var map__31941__$1 = cljs.core.__destructure_map(map__31941);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31941__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31942 = p__31940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31942,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31942,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null)));

var result__31811__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__31811__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__31811__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__31811__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__31811__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var result__31811__auto__ = active_panel;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__31811__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__31811__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__31811__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__31811__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__31811__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__31811__auto__;
}catch (e31945){var e = e31945;
throw e;
}}):(function (p__31946,p__31947){
var map__31948 = p__31946;
var map__31948__$1 = cljs.core.__destructure_map(map__31948);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31948__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31949 = p__31947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31949,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31949,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","update-db","message-log-3.events/update-db",704340530),(function (db,p__31952){
var vec__31953 = p__31952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31953,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31953,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31953,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),id], null),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","update-list","message-log-3.events/update-list",807824651),(function (db,p__31956){
var vec__31957 = p__31956;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31957,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31957,(1),null);
var input = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unix-time","unix-time",-781363207),Date.now()], null),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(db));
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"msg","msg",-1386103444),cljs.core.PersistentVector.EMPTY);
var merged = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(messages,input);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"msg","msg",-1386103444),merged);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","clear-input","message-log-3.events/clear-input",-445007564),(function (db){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"form","form",-1624062471));
}));
message_log_3.events.handler = (function message_log_3$events$handler(response){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","submit","message-log-3.events/submit",-200247638),(function (p__31960){
var map__31961 = p__31960;
var map__31961__$1 = cljs.core.__destructure_map(map__31961);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31961__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"POST","POST",110456857),new cljs.core.Keyword(null,"uri","uri",-774711847),"/submit",new cljs.core.Keyword(null,"params","params",710516235),message_log_3.events.clj__GT_json(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(db)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","success-post-result","message-log-3.events/success-post-result",-1222262303)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","failure-post-result","message-log-3.events/failure-post-result",1678774697)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","good-http-result","message-log-3.events/good-http-result",-819866045),(function (db,p__31962){
var vec__31963 = p__31962;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31963,(0),null);
var map__31966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31963,(1),null);
var map__31966__$1 = cljs.core.__destructure_map(map__31966);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31966__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","bad-http-result","message-log-3.events/bad-http-result",582853391),(function (db,p__31967){
var vec__31968 = p__31967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31968,(0),null);
var map__31971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31968,(1),null);
var map__31971__$1 = cljs.core.__destructure_map(map__31971);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31971__$1,new cljs.core.Keyword(null,"data","data",-232669377));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fail init"], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","read-msg-txt","message-log-3.events/read-msg-txt",-113939833),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"GET","GET",1736591026),new cljs.core.Keyword(null,"uri","uri",-774711847),"/init",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","good-http-result","message-log-3.events/good-http-result",-819866045)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","bad-http-result","message-log-3.events/bad-http-result",582853391)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","success-post-result","message-log-3.events/success-post-result",-1222262303),(function (){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1("done brayy");
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("message-log-3.events","failure-post-result","message-log-3.events/failure-post-result",1678774697),(function (){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1("fail brayy");
}));

//# sourceMappingURL=message_log_3.events.js.map
