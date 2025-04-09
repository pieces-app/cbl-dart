"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={description:"General Concepts in the API and How to Work With Them"},o="General Concepts",l={unversionedId:"general-concepts",id:"general-concepts",title:"General Concepts",description:"General Concepts in the API and How to Work With Them",source:"@site/docs/general-concepts.mdx",sourceDirName:".",slug:"/general-concepts",permalink:"/general-concepts",draft:!1,editUrl:"https://github.com/cbl-dart/cbl-dart/tree/main/docs/docs/general-concepts.mdx",tags:[],version:"current",frontMatter:{description:"General Concepts in the API and How to Work With Them"},sidebar:"sidebar",previous:{title:"Install",permalink:"/install"},next:{title:"Databases",permalink:"/databases"}},i={},c=[{value:"Synchronous and Asynchronous APIs",id:"sync-and-async-apis",level:2},{value:"Change Listeners",id:"change-listeners",level:2},{value:"Change Streams",id:"change-streams",level:2},{value:"Closing Resources",id:"closing-resources",level:2}],u={toc:c},h="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-concepts"},"General Concepts"),(0,r.kt)("metaheader",null),(0,r.kt)("h2",{id:"sync-and-async-apis"},"Synchronous and Asynchronous APIs"),(0,r.kt)("p",null,"The whole Couchbase Lite API comes in both a synchronous and asynchronous\nversion. The synchronous version is more efficient and slightly more convenient\nto use, but has the downside that it blocks the current\n",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/dart-isolate/Isolate-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Isolate")),"."),(0,r.kt)("p",null,"In UI applications, such as Flutter apps, this is problematic. Blocking the UI\nisolate for too long causes janky animations, or worse, makes the app\nunresponsive. With only a synchronous API available, the solution would be to\noffload the work to a worker isolate. That is what the asynchronous API does in\na transparent way."),(0,r.kt)("p",null,"Unless you are noticing the performance impact of the overhead of the\nasynchronous API, use the asynchronous API."),(0,r.kt)("p",null,"To support writing code that works with both synchronous and asynchronous APIs,\nsynchronous and asynchronous APIs always extend from a common base class that\nuses ",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/dart-async/FutureOr-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"FutureOr"))," wherever a result could be synchronous or\nasynchronous."),(0,r.kt)("p",null,"Take for example this simplified version of the ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/cbl/Query-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Query"))," API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"abstract class Query {\n  // The common base class leaves open whether the results are returned\n  // synchronously or asynchronously.\n  FutureOr<ResultSet> execute();\n}\n\nabstract class SyncQuery extends Query {\n  // The synchronous version of `Query` returns results directly.\n  ResultSet execute();\n}\n\nabstract class AsyncQuery extends Query {\n  // The asynchronous version of `Query` returns results in a `Future`.\n  Future<ResultSet> execute();\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/dart-async/FutureOr-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"FutureOr"))," can be awaited just like a ",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/dart-async/Future-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Future")),", so\nby programming against ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/cbl/Query-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Query"))," your code works with both the synchronous and\nasynchronous API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"/// Runs a query that returns a result set with one row and one column and\n/// returns its value.\nFuture<int> runCountQuery(Query query) {\n  final resultSet = await query.execute();\n  final results = await resultSet.allResults();\n  // Returns the first column of the first row.\n  return result[0].integer(0);\n}\n")),(0,r.kt)("h2",{id:"change-listeners"},"Change Listeners"),(0,r.kt)("p",null,"Certain objects allow you to register change listeners. In the case of\nsynchronous APIs, all changes are delivered to the listeners as soon as they are\nregistered."),(0,r.kt)("p",null,"With asynchronous APIs, changes are only guaranteed to be delivered once the\n",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/dart-async/Future-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Future"))," returned from the registration call is completed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Await the future returned from the registration call.\nawait database.addChangeListener((change) {\n  print('Ids of changed documents: ${change.documentIds}'):\n});\n\n// The listener is guaranteed to be notified of this change.\nawait database.saveDocument(MutableDocument.withId('Hey'));\n")),(0,r.kt)("p",null,"To stop receiving notifications, call ",(0,r.kt)("inlineCode",{parentName:"p"},"removeChangeListener")," with the token that\nwas returned from the registration call. Regardless of the whether the API is\nsynchronous or asynchronous, listeners will stop receiving notifications\nimmediately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final token = await database.addChangeListener((change) { });\n\n// Some time goes by...\n\nawait database.removeChangeListener(token);\n")),(0,r.kt)("h2",{id:"change-streams"},"Change Streams"),(0,r.kt)("p",null,"Streams are a convenient alternative to listen for changes. Similarly to change\nlisteners, change streams returned from synchronous APIs are receiving changes\nas soon as the stream is subscribed to."),(0,r.kt)("p",null,"Streams returned from asynchronous APIs start to listen asynchronously.\nUnfortunately it's not possible to return a ",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/dart-async/Future-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Future"))," from\n",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/dart-async/Stream/listen.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Stream.listen"))," to signal to subscribers the point in time after\nwhich the the stream will observe events. Instead, asynchronous APIs return\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/cbl/AsyncListenStream-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AsyncListenStream")),"s, which expose a ",(0,r.kt)("a",{parentName:"p",href:"https://api.dart.dev/dart-async/Future-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Future"))," in\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/cbl/AsyncListenStream/listening.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AsyncListenStream.listening"))," that completes when the stream is fully\nlistening:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final stream = database.changes();\n\nstream.listen((change) {\n  print('Ids of changed documents: ${change.documentIds}'):\n});\n\n// Await the Future exposed by the stream.\nawait stream.listening;\n\n// The stream is guaranteed to be notified of this change.\nawait database.saveDocument(MutableDocument.withId('Hey'));\n")),(0,r.kt)("p",null,"If you only ever open the same database file once at any given time, you don't\nneed to await the ",(0,r.kt)("inlineCode",{parentName:"p"},"listening")," future. In this case the stream will always\nobserve all subsequent events."),(0,r.kt)("p",null,"To stop listening to changes just cancel the subscription, like with any other\nstream."),(0,r.kt)("h2",{id:"closing-resources"},"Closing Resources"),(0,r.kt)("p",null,"Some types implement ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/cbl/ClosableResource-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ClosableResource")),". At the moment these are\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/cbl/Database-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Database"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/cbl/Replicator-class.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Replicator")),". Once you are done with an instance of these\ntypes, call its ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/cbl/ClosableResource/close.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ClosableResource.close"))," method. This will free resources\nused by the object, as well as remove listeners, close streams and close child\nresources. For example closing a database will also close any associated\nreplicators."))}p.isMDXComponent=!0}}]);