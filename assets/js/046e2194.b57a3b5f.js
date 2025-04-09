"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={description:"Installing Couchbase Lite for Dart",related_content:[{name:"General Concepts",url:"/general-concepts"},{name:"Supported Platforms",url:"/supported-platforms"}]},o="Install",l={unversionedId:"install",id:"install",title:"Install",description:"Installing Couchbase Lite for Dart",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/install",draft:!1,editUrl:"https://github.com/cbl-dart/cbl-dart/tree/main/docs/docs/install.mdx",tags:[],version:"current",frontMatter:{description:"Installing Couchbase Lite for Dart",related_content:[{name:"General Concepts",url:"/general-concepts"},{name:"Supported Platforms",url:"/supported-platforms"}]},sidebar:"sidebar",previous:{title:"Overview",permalink:"/"},next:{title:"General Concepts",permalink:"/general-concepts"}},s={},p=[{value:"Flutter",id:"flutter",level:2},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Standalone Dart",id:"standalone-dart",level:2},{value:"Verify Installation",id:"verify-installation",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install"},"Install"),(0,r.kt)("metaheader",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Couchbase Lite for Dart supports most platforms, including Android, iOS, macOS,\nWindows, and Linux. To learn more about supported platforms and supported\nversions, see ",(0,r.kt)("a",{parentName:"p",href:"/supported-platforms"},"Supported platforms"),".")),(0,r.kt)("p",null,"If you want to use Couchbase Lite in a standalone Dart app, such as a CLI or\nserver, jump to ",(0,r.kt)("a",{parentName:"p",href:"#standalone-dart"},"Standalone Dart"),"."),(0,r.kt)("h2",{id:"flutter"},"Flutter"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to add the ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_flutter/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl_flutter"))," packages as dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub add cbl cbl_flutter\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose between the Community and Enterprise edition."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Community edition is free and open source. The Enterprise edition is free\nfor development and testing, but requires a license for production use. To\nlearn more about the differences between the Community and Enterprise\neditions, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.couchbase.com/products/editions#cmobile"},"Couchbase Lite editions"),".")),(0,r.kt)("p",{parentName:"li"},"To use the ",(0,r.kt)("strong",{parentName:"p"},"Community edition"),", run the following command to add the\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_flutter_ce/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl_flutter_ce"))," package as a dependency:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub add cbl_flutter_ce\n")),(0,r.kt)("p",{parentName:"li"},"To use the ",(0,r.kt)("strong",{parentName:"p"},"Enterprise edition"),", run the following command to add the\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_flutter_ee/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl_flutter_ee"))," package as a dependency"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub add cbl_flutter_ee\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure that you have set the required\n",(0,r.kt)("a",{parentName:"p",href:"/supported-platforms"},"minimum target versions")," in the build systems of\nthe platforms you want to support.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize Couchbase Lite before using it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:cbl_flutter/cbl_flutter.dart';\n\nFuture<void> main() async {\n  await CouchbaseLiteFlutter.init();\n  runApp(MyApp());\n}\n")))),(0,r.kt)("h3",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("p",null,"You can use Couchbase Lite in Flutter unit tests but you need to use\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_dart/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl_dart"))," in them. In integration tests, ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_flutter/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl_flutter"))," works\njust fine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_dart/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl_dart"))," as a development dependency."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub add --dev cbl_dart\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your unit tests initialize Couchbase Lite through\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_dart/latest/cbl_dart/CouchbaseLiteDart/init.html"},(0,r.kt)("inlineCode",{parentName:"a"},"CouchbaseLiteDart.init"))," instead of\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_flutter/latest/cbl_flutter/CouchbaseLiteFlutter/init.html"},(0,r.kt)("inlineCode",{parentName:"a"},"CouchbaseLiteFlutter.init")),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:io';\n\nimport 'package:cbl/cbl.dart';\nimport 'package:cbl_dart/cbl_dart.dart';\nimport 'package:flutter_test/flutter_test.dart';\n\nvoid setupCouchbaseLiteForUnitTests() {\n  setUpAll(() async {\n    // If no `filesDir` is specified when initializing CouchbaseLiteDart, the\n    // working directory is used as the default database directory.\n    // By specifying a `filesDir` here, we can ensure that the tests don't\n    // create databases in the project directory.\n    final tempFilesDir = await Directory.systemTemp.createTemp();\n    await CouchbaseLiteDart.init(\n      edition: Edition.enterprise,\n      filesDir: tempFilesDir.path,\n    );\n  });\n}\n\nvoid main() {\n  setupCouchbaseLiteForUnitTests();\n\n  test('use a database', () async {\n    final db = await Database.openAsync('test');\n    // ...\n  });\n}\n")))),(0,r.kt)("h2",{id:"standalone-dart"},"Standalone Dart"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to add the ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_dart/latest/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"cbl_dart")),"\npackages as dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub add cbl cbl_dart\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize Couchbase Lite before using it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:cbl_dart/cbl_dart.dart';\n\nFuture<void> main() async {\n  await CouchbaseLiteDart.init(edition: Edition.enterprise);\n  // Start using Couchbase Lite ...\n}\n")),(0,r.kt)("p",{parentName:"li"},"As part of initializing Couchbase Lite you need to select an edition."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Community edition is free and open source. The Enterprise edition is free\nfor development and testing, but requires a license for production use. To\nlearn more about the differences between the Community and Enterprise\neditions, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.couchbase.com/products/editions#cmobile"},"Couchbase Lite editions"),".")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_dart/latest/cbl_dart/CouchbaseLiteDart/init.html"},(0,r.kt)("inlineCode",{parentName:"a"},"CouchbaseLiteDart.init"))," downloads the needed native libraries\nif they have not already been cached.")))),(0,r.kt)("h2",{id:"verify-installation"},"Verify Installation"),(0,r.kt)("p",null,"To verify that Couchbase Lite is installed correctly, add the following code to\nyour app and call ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," after initializing Couchbase Lite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:cbl/cbl.dart';\n\nFuture<void> run() async {\n  // Open the database (creating it if it doesn\u2019t exist).\n  final database = await Database.openAsync('database');\n\n  // Create a collection, or return it if it already exists.\n  final collection = await database.createCollection('components');\n\n  // Create a new document.\n  final mutableDocument = MutableDocument({'type': 'SDK', 'majorVersion': 2});\n  await collection.saveDocument(mutableDocument);\n\n  print(\n    'Created document with id ${mutableDocument.id} and '\n    'type ${mutableDocument.string('type')}.',\n  );\n\n  // Update the document.\n  mutableDocument.setString('Dart', key: 'language');\n  await collection.saveDocument(mutableDocument);\n\n  print(\n    'Updated document with id ${mutableDocument.id}, '\n    'adding language ${mutableDocument.string(\"language\")!}.',\n  );\n\n  // Read the document.\n  final document = (await collection.document(mutableDocument.id))!;\n\n  print(\n    'Read document with id ${document.id}, '\n    'type ${document.string('type')} and '\n    'language ${document.string('language')}.',\n  );\n\n  // Create a query to fetch documents of type SDK.\n  print('Querying Documents of type=SDK.');\n  final query = await database.createQuery('''\n    SELECT * FROM components\n    WHERE type = 'SDK'\n  ''');\n\n  // Run the query.\n  final result = await query.execute();\n  final results = await result.allResults();\n  print('Number of results: ${results.length}');\n\n  // Close the database.\n  await database.close();\n}\n")))}c.isMDXComponent=!0}}]);