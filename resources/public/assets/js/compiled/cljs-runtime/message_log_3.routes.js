goog.provide('message_log_3.routes');
if((typeof message_log_3 !== 'undefined') && (typeof message_log_3.routes !== 'undefined') && (typeof message_log_3.routes.panels !== 'undefined')){
} else {
message_log_3.routes.panels = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31972 = cljs.core.get_global_hierarchy;
return (fexpr__31972.cljs$core$IFn$_invoke$arity$0 ? fexpr__31972.cljs$core$IFn$_invoke$arity$0() : fexpr__31972.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("message-log-3.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
message_log_3.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
message_log_3.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"home","home",-74557309),"init",new cljs.core.Keyword(null,"init","init",-1875481434),"submit",new cljs.core.Keyword(null,"submit","submit",-49315317)], null)], null));
message_log_3.routes.parse = (function message_log_3$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(message_log_3.routes.routes),url);
});
message_log_3.routes.url_for = (function message_log_3$routes$url_for(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31976 = arguments.length;
var i__4865__auto___31977 = (0);
while(true){
if((i__4865__auto___31977 < len__4864__auto___31976)){
args__4870__auto__.push((arguments[i__4865__auto___31977]));

var G__31978 = (i__4865__auto___31977 + (1));
i__4865__auto___31977 = G__31978;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return message_log_3.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(message_log_3.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(message_log_3.routes.routes)], null),args));
}));

(message_log_3.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(message_log_3.routes.url_for.cljs$lang$applyTo = (function (seq31973){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31973));
}));

message_log_3.routes.dispatch = (function message_log_3$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","set-active-panel","message-log-3.events/set-active-panel",-848456369),panel], null));
});
if((typeof message_log_3 !== 'undefined') && (typeof message_log_3.routes !== 'undefined') && (typeof message_log_3.routes.history !== 'undefined')){
} else {
message_log_3.routes.history = pushy.core.pushy(message_log_3.routes.dispatch,message_log_3.routes.parse);
}
message_log_3.routes.navigate_BANG_ = (function message_log_3$routes$navigate_BANG_(handler){
return message_log_3.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,message_log_3.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
message_log_3.routes.start_BANG_ = (function message_log_3$routes$start_BANG_(){
return message_log_3.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return message_log_3.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=message_log_3.routes.js.map
