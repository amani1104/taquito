(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(r,i,a){"use strict";var e=a(2),t=a(6),n=a(0),p=a.n(n),m=a(109),s=a.n(m),o=a(102),c=a(95),g=a(103),l=a(48),u=a.n(l);function d(r){var i=r.to,a=r.href,n=r.label,m=Object(t.a)(r,["to","href","label"]),s=Object(g.a)(i);return p.a.createElement(o.a,Object(e.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:s},m),n)}var P=function(r){var i=r.url,a=r.alt;return p.a.createElement("img",{className:"footer__logo",alt:a,src:i})};i.a=function(){var r=Object(c.a)().siteConfig,i=(void 0===r?{}:r).themeConfig,a=(void 0===i?{}:i).footer,e=a||{},t=e.copyright,n=e.links,m=void 0===n?[]:n,o=e.logo,l=void 0===o?{}:o,f=Object(g.a)(l.src);return a?p.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===a.style})},p.a.createElement("div",{className:"container"},m&&m.length>0&&p.a.createElement("div",{className:"row footer__links"},m.map((function(r,i){return p.a.createElement("div",{key:i,className:"col footer__col"},null!=r.title?p.a.createElement("h4",{className:"footer__title"},r.title):null,null!=r.items&&Array.isArray(r.items)&&r.items.length>0?p.a.createElement("ul",{className:"footer__items"},r.items.map((function(r,i){return r.html?p.a.createElement("div",{key:i,dangerouslySetInnerHTML:{__html:r.html}}):p.a.createElement("li",{key:r.href||r.to,className:"footer__item"},p.a.createElement(d,r))}))):null)}))),(l||t)&&p.a.createElement("div",{className:"text--center"},l&&l.src&&p.a.createElement("div",{className:"margin-bottom--sm"},l.href?p.a.createElement("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},p.a.createElement(P,{alt:l.alt,url:f})):p.a.createElement(P,{alt:l.alt,url:f})),t))):null}},215:function(r,i){},316:function(r,i){},318:function(r,i){},382:function(r,i){},384:function(r,i){},394:function(r,i){},396:function(r,i){},421:function(r,i){},423:function(r,i){},424:function(r,i){},430:function(r,i){},432:function(r,i){},450:function(r,i){},452:function(r,i){},464:function(r,i){},467:function(r,i){},602:function(r,i,a){"use strict";var e=a(2),t=a(6),n=a(95),p=a(297),m=a(144),s=a(487),o=a(214),c=a(555),g=a(557),l=a(3),u=a(109),d=a.n(u),P=a(288),f=a.n(P),D=a(0),I=a.n(D),h=a(563),A=a(58),E=a.n(A),R=function(r){function i(){var i;return(i=r.call(this)||this).onChange=function(r){i.code=r},i}Object(l.a)(i,r);var a=i.prototype;return a.UNSAFE_componentWillMount=function(){this.code=this.props.code},a.componentDidUpdate=function(){},a.run=function(){var r=this.props,i=r.scope,a=r.transformCode,e=r.noInline,t='\nlet _printlnBuffer = "";\n\nfunction println(value) {\n  _printlnBuffer += value + "\\n";\n\n  render(_printlnBuffer);\n}\n\nTezos.setProvider({ rpc: \'https://api.tez.ie/rpc/carthagenet\' });\n\n'+(this.props.wallet?'const option = {name:"exampleWallet"};\nconst wallet = new BeaconWallet(option);\nconst network = {type:"carthagenet"};\nwallet.requestPermissions({network})\n.then(permission => {\n  return Tezos.setWalletProvider(wallet);\n})\n.then(() => {\n  '+this.code+"\n});":"fetch('https://api.tez.ie/keys/carthagenet/', {\n  method: 'POST',\n  headers: { Authorization: 'Bearer taquito-example' },\n})\n.then(response => response.text())\n.then(privateKey => {\n  return Tezos.importKey(privateKey);\n })\n.then(() => {\n  "+this.code+"\n });")+'\n\n//contract used in example "estimate a contract origination"\nconst genericMultisigJSONfile = \n[ { "prim": "parameter","args":[ { "prim": "or","args":[ { "prim": "unit", "annots": [ "%default" ] },{ "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "nat","annots": [ "%counter" ] },{ "prim": "or","args":[ { "prim": "lambda","args":[ { "prim": "unit" },{ "prim": "list","args":[ { "prim":"operation" } ] } ],"annots":[ "%operation" ] },{ "prim": "pair", "args":[ { "prim": "nat","annots":[ "%threshold" ] },{ "prim": "list",\n"args":[ { "prim": "key" } ],"annots":[ "%keys" ] } ],"annots":[ "%change_keys" ] } ],"annots": [ ":action" ] } ],"annots": [ ":payload" ] },{ "prim": "list","args":[ { "prim": "option","args":[ { "prim": "signature" } ] } ],"annots": [ "%sigs" ] } ],"annots": [ "%main" ] } ] } ] },\n{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "nat","annots": [ "%stored_counter" ] },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%threshold" ] },{ "prim": "list","args": [ { "prim": "key" } ],"annots": [ "%keys" ] } ] } ] } ] },\n{ "prim": "code","args":[ [ [ [ { "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIP","args": [ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "IF_LEFT","args":[ [ { "prim": "DROP" },{ "prim": "NIL","args": [ { "prim": "operation" } ] },{ "prim": "PAIR" } ],[ { "prim": "PUSH","args":[ { "prim": "mutez" },{ "int": "0" } ] },{ "prim": "AMOUNT" },[ [ { "prim": "COMPARE" },{ "prim": "EQ" } ], { "prim": "IF","args":[ [],[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "SWAP" }, \n{ "prim": "DUP" },{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR" },{ "prim": "DIP","args":[ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "DUP" },{ "prim": "SELF" },{ "prim": "ADDRESS" },{ "prim": "PAIR" },{ "prim": "PACK" },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR","annots":[ "@counter" ] },{ "prim": "DIP","args":[ [ { "prim":"CDR" } ] ] } ] ],{ "prim": "DIP","args":[ [ { "prim": "SWAP" } ] ] } ] ] },{ "prim": "SWAP" } ] ] },\n[ [ { "prim": "DUP" },{ "prim": "CAR","annots": [ "@stored_counter" ] },{ "prim": "DIP","args": [ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },[ [ { "prim": "COMPARE" },{ "prim": "EQ" } ],{ "prim": "IF","args":[ [],[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },[ [ { "prim": "DUP" },{ "prim": "CAR","annots": [ "@threshold" ] },{ "prim": "DIP","args":[ [ { "prim": "CDR","annots": [ "@keys" ] } ] ] } ] ],\n{ "prim": "DIP","args":[ [ { "prim": "PUSH","args":[ { "prim": "nat" },{ "int": "0" } ],"annots": [ "@valid" ] },{ "prim": "SWAP" },{ "prim": "ITER","args":[ [ { "prim": "DIP","args":[ [ { "prim": "SWAP" } ] ] },{ "prim": "SWAP" },{ "prim": "IF_CONS","args":[ [ [ { "prim":"IF_NONE","args":[ [ { "prim":"SWAP" },{ "prim":"DROP" } ],[ { "prim":"SWAP" },{ "prim":"DIP","args":[ [ { "prim":"SWAP" },{ "prim":"DIP","args":[ { "int":"2" },[ [ { "prim":"DIP","args":[ [ { "prim":"DUP" } ] ] },{ "prim":"SWAP" } ] ] ] },\n[ [ { "prim":"DIP","args":[ { "int":"2" },[ { "prim":"DUP" } ] ] },{ "prim":"DIG","args":[ { "int":"3" } ] } ],{ "prim":"DIP","args":[ [ { "prim":"CHECK_SIGNATURE" } ] ] },{ "prim":"SWAP" },{ "prim":"IF","args":[ [ { "prim":"DROP" } ],[ { "prim":"FAILWITH" } ] ] } ],{ "prim":"PUSH","args":[ { "prim":"nat" },{ "int":"1" } ] },{ "prim":"ADD","annots":[ "@valid" ] } ] ] } ] ] } ] ],[ [ { "prim":"UNIT" },{ "prim":"FAILWITH" } ] ] ] },{ "prim": "SWAP" } ] ] } ] ] },[ [ { "prim": "COMPARE" },{ "prim": "LE" } ],{ "prim": "IF","args":[ [],\n[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "IF_CONS","args":[ [ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ],[] ] }, { "prim": "DROP" },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR" },{ "prim": "DIP","args":[ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "PUSH","args":[ { "prim": "nat" },{ "int": "1" } ] },{ "prim": "ADD","annots": [ "@new_counter" ] },{ "prim": "PAIR" } ] ] },{ "prim": "IF_LEFT","args":[ [ { "prim": "UNIT" },{ "prim": "EXEC" } ],[ { "prim": "DIP","args":[ [ { "prim": "CAR" } ] ] },\n{ "prim": "SWAP" },{ "prim": "PAIR" },{ "prim": "NIL","args":[ { "prim": "operation" } ] } ] ] },{ "prim": "PAIR" } ] ] } ] ] } ]\n\n//contract for the example "Contract origination with map in storage having initial values"\nconst contractMapTacoShop = \n[ { "prim": "parameter", "args": [ { "prim": "nat" } ] },\n{ "prim": "storage","args":[ { "prim": "map","args":[ { "prim": "nat" },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%current_stock" ] },{ "prim": "mutez", "annots": [ "%max_price" ] } ] } ] } ] },\n{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] }, { "prim": "CDR" },{ "prim": "DUP" }, { "prim": "DIG", "args": [ { "int": "2" } ] },{ "prim": "DUP" }, { "prim": "DUG", "args": [ { "int": "3" } ] },{ "prim": "GET" },{ "prim": "IF_NONE","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" },{ "string": "Unknown kind of taco." } ] },{ "prim": "FAILWITH" } ],[ { "prim": "DUP" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] },\n{ "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] }, { "prim": "CDR" },{ "prim": "EDIV" },{ "prim": "IF_NONE","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" }, { "string": "DIV by 0" } ] },{ "prim": "FAILWITH" } ], [] ] }, { "prim": "CAR" },{ "prim": "DUP" }, { "prim": "AMOUNT" }, { "prim": "COMPARE" },{ "prim": "NEQ" },{ "prim": "IF","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" },{ "string":"Sorry, the taco you are trying to purchase has a different price" } ] },\n{ "prim": "FAILWITH" } ],[ { "prim": "PUSH","args": [ { "prim": "unit" }, { "prim": "Unit" } ] } ] ] },{ "prim": "DIG", "args": [ { "int": "2" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "3" } ] },{ "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "1" } ] },{ "prim": "DIG", "args": [ { "int": "4" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "5" } ] }, { "prim": "CAR" },{ "prim": "SUB" }, { "prim": "ABS" }, { "prim": "SWAP" },{ "prim": "CDR" }, { "prim": "SWAP" }, { "prim": "PAIR" },{ "prim": "DIG", "args": [ { "int": "4" } ] }, { "prim": "DUP" },\n{ "prim": "DUG", "args": [ { "int": "5" } ] },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] },{ "prim": "DIG", "args": [ { "int": "7" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "8" } ] }, { "prim": "SWAP" },{ "prim": "SOME" }, { "prim": "SWAP" }, { "prim": "UPDATE" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP","args": [ [ { "prim": "DROP", "args": [ { "int": "7" } ] } ] ] } ] ] } ]\n\n\n//contract for the example of map wih pair key\nconst contractMapPairKey = \n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },\n{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address", "annots": [ "%theAddress" ] },\n{ "prim": "map","args":[ { "prim": "pair","args":[ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "pair","args":[ { "prim": "mutez", "annots": [ "%amount" ] },{ "prim": "int", "annots": [ "%quantity" ] } ] } ],"annots": [ "%theMap" ] } ] },{ "prim": "int", "annots": [ "%theNumber" ] } ] } ] },\n{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\n//contract for the example of map in storage with 8 nested pairs\nconst contractMap8pairs = \n[{ "prim": "parameter", "args": [{ "prim": "unit" }] },{"prim": "storage","args":[{prim: \'map\',args: [{prim: "pair", args: [{ prim: "int" },{prim: "pair", args: [{ prim: "nat" },{prim: "pair", args: [{ prim: "string" },{prim: "pair", args: [{ prim: "bytes" },{prim: "pair", args: [{ prim: "mutez" },{prim: "pair", args: [{ prim: "bool" },{prim: "pair", args: [{ prim: "key_hash" },{prim: "pair", args: [{ prim: "timestamp" },{ prim: "address" }]}]}]}]}]}]}]}]}, { prim: "int" }]},]},{"prim": "code","args":[[{ "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [{ "prim": "operation" }] },\n{ "prim": "PAIR" },{ "prim": "DIP", "args": [[{ "prim": "DROP" }]] }]]}]\n\n//contract for map and bigmap combined example\nconst contractMapBigMap = \n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "big_map","args":[ { "prim": "pair","args": [ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "int" } ], "annots": [ "%thebigmap" ] },{ "prim": "map","args":[ { "prim": "pair","args": [ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "int" } ], "annots": [ "%themap" ] } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\n//signer for example with complex storage/parameters\nconst emailExample = "zsjpcmui.oysiavbv@tezos.example.org"\nconst passwordExample = "4rW0D22yXt"\nconst mnemonicExample = "arrange ceiling whisper churn congress double step carpet empty rice prevent swallow silk casual champion"\nconst secretExample = "af552679c4943509bd77643b8ef3f8dcf42e61b3"\n\n//contracts for examples of storage with and without annotations\nconst contractStorageAnnot = \n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address", "annots": [ "%theAddress" ] },{ "prim": "bool", "annots": [ "%theBool" ] } ] },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%theNat" ] },{ "prim": "int", "annots": [ "%theNumber" ] } ] } ] },{ "prim": "mutez", "annots": [ "%theTez" ] } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\nconst contractStorageWithAndWithoutAnnot =\n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address"},{ "prim": "bool"} ] },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%theNat" ] },{ "prim": "int", "annots": [ "%theNumber" ] } ] } ] },{ "prim": "mutez" } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\nconst contractStorageWithoutAnnot =\n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address"},{ "prim": "bool"} ] },{ "prim": "pair","args":[ { "prim": "nat" },{ "prim": "int" } ] } ] },{ "prim": "mutez" } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\nconst managerCode = [{"prim": "parameter","args":[{"prim": "or","args":[{"prim": "lambda","args":[{ "prim": "unit" },{"prim": "list","args": [{ "prim": "operation" }]}],"annots": ["%do"]},{ "prim": "unit", "annots": ["%default"] }]}]},{ "prim": "storage", "args": [{ "prim": "key_hash" }] },{"prim": "code","args":[[[[{ "prim": "DUP" }, { "prim": "CAR" },{"prim": "DIP","args": [[{ "prim": "CDR" }]]}]],{"prim": "IF_LEFT","args":[[{"prim": "PUSH","args":[{ "prim": "mutez" },{ "int": "0" }]},{ "prim": "AMOUNT" },[[{ "prim": "COMPARE" },{ "prim": "EQ" }],{"prim": "IF","args":[[],[[{ "prim": "UNIT" },{ "prim": "FAILWITH" }]]]}],\n[{"prim": "DIP","args": [[{ "prim": "DUP" }]]},{ "prim": "SWAP" }],{ "prim": "IMPLICIT_ACCOUNT" },{ "prim": "ADDRESS" },{ "prim": "SENDER" },[[{ "prim": "COMPARE" },{ "prim": "EQ" }],{"prim": "IF","args":[[],[[{ "prim": "UNIT" },{ "prim": "FAILWITH" }]]]}],{ "prim": "UNIT" }, { "prim": "EXEC" },{ "prim": "PAIR" }],[{ "prim": "DROP" },{"prim": "NIL","args": [{ "prim": "operation" }]},{ "prim": "PAIR" }]]}]]}]\n\n';this.transpile({code:t,scope:i,transformCode:a,noInline:e})},i}(h.d);var U=function(r){var i=r.children,a=r.theme,n=r.transformCode,p=Object(t.a)(r,["children","theme","transformCode"]),m=Object(D.useState)(!1),s=m[0],o=m[1],c=Object(D.useRef)(null),g=Object(D.useRef)(null);return Object(D.useEffect)((function(){var r;return g.current&&(r=new f.a(g.current,{text:function(){return c.current.code}})),function(){r&&r.destroy()}}),[g.current,c.current]),I.a.createElement(R,Object(e.a)({ref:c,code:i,transformCode:n||function(r){return r+";"},theme:a},p),I.a.createElement("div",{className:E.a.playgroundEditorWrapper},I.a.createElement("div",{className:d()(E.a.playgroundHeader,E.a.playgroundEditorHeader)},"Live Editor"),I.a.createElement(h.a,null),I.a.createElement("button",{ref:g,type:"button","aria-label":"Copy code to clipboard",className:d()(E.a.button,E.a.copyButton),onClick:function(){window.getSelection().empty(),o(!0),setTimeout((function(){return o(!1)}),2e3)}},s?"Copied":"Copy")),I.a.createElement("div",{className:d()(E.a.playgroundHeader,E.a.playgroundPreviewHeader)},"Result",I.a.createElement("button",{type:"button","aria-label":"Execute example",className:d()(E.a.button,E.a.runButton),onClick:function(){c.current&&c.current.run()}},"Run code")),I.a.createElement("div",{className:E.a.playgroundPreview},I.a.createElement(h.c,null),I.a.createElement(h.b,null)))},b=a(597),C=a.n(b),N=a(298),y=a(598),v=a(59),S=a.n(v),O=/{([\d,-]+)}/;i.a=function(r){var i=r.children,a=r.className,l=r.live,u=r.metastring,P=Object(t.a)(r,["children","className","live","metastring"]),h=Object(n.a)().siteConfig.themeConfig.prism,A=void 0===h?{}:h,E=Object(D.useState)(!1),R=E[0],b=E[1],v=Object(D.useRef)(null),T=Object(D.useRef)(null),W=[];if(u&&O.test(u)){var k=u.match(O)[1];W=C.a.parse(k).filter((function(r){return r>0}))}if(Object(D.useEffect)((function(){var r;return T.current&&(r=new f.a(T.current,{target:function(){return v.current}})),function(){r&&r.destroy()}}),[T.current,v.current]),l){var _=new p.b("https://api.tez.ie/rpc/carthagenet");return I.a.createElement(U,Object(e.a)({scope:Object.assign({},I.a,{Tezos:_,validateAddress:m.o,validateChain:m.p,validateKeyHash:m.r,validateContractAddress:m.q,validatePublicKey:m.s,validateSignature:m.t,b58cencode:m.d,prefix:m.n,Prefix:m.a,MichelsonMap:p.a,BeaconWallet:s.a,InMemorySigner:o.a,LedgerSigner:c.b,DerivationType:c.a,TransportU2F:g.a}),code:i.trim(),theme:A.theme||y.a,transformCode:function(r){return r.replace(/import .*/g,"")}},P))}var w=a&&a.replace(/language-/,"");!w&&A.defaultLanguage&&(w=A.defaultLanguage);var L=function(){window.getSelection().empty(),b(!0),setTimeout((function(){return b(!1)}),2e3)};return I.a.createElement(N.a,Object(e.a)({},N.b,{theme:A.theme||y.a,code:i.trim(),language:w}),(function(r){var i=r.className,a=r.style,t=r.tokens,n=r.getLineProps,p=r.getTokenProps;return I.a.createElement("div",{className:S.a.codeBlockWrapper},I.a.createElement("pre",{ref:v,className:d()(i,S.a.codeBlock),style:a},t.map((function(r,i){var a=n({line:r,key:i});return W.includes(i+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),I.a.createElement("div",Object(e.a)({key:i},a),r.map((function(r,i){return I.a.createElement("span",Object(e.a)({key:i},p({token:r,key:i})))})))}))),I.a.createElement("button",{ref:T,type:"button","aria-label":"Copy code to clipboard",className:S.a.copyButton,onClick:L},R?"Copied":"Copy"))}))}}}]);