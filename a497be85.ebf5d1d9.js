(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(90)),i={title:"Quick start",author:"Simon Boissonneault-Robert"},s={unversionedId:"quick_start",id:"quick_start",isDocsHomePage:!1,title:"Quick start",description:"Installing Taquito using npm",source:"@site/../docs/quick_start.md",slug:"/quick_start",permalink:"/docs/quick_start",version:"current",sidebar:"docs",next:{title:"Taquito boilerplate",permalink:"/docs/boilerplate"}},c=[{value:"Installing Taquito using npm",id:"installing-taquito-using-npm",children:[]},{value:"Import the library in your project",id:"import-the-library-in-your-project",children:[{value:"Import <code>TezosToolkit</code> from <code>@taquito/taquito</code> and instantiate it",id:"import-tezostoolkit-from-taquitotaquito-and-instantiate-it",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Changing the underlying signer",id:"changing-the-underlying-signer",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Get the current Tezos balance for an address",id:"get-the-current-tezos-balance-for-an-address",children:[]},{value:"Using the inMemory Signer and Importing a key",id:"using-the-inmemory-signer-and-importing-a-key",children:[]},{value:"Transfer",id:"transfer",children:[]},{value:"Interact with a smart contract",id:"interact-with-a-smart-contract",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installing-taquito-using-npm"},"Installing Taquito using npm"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For quick-start, you may also like to try out our template/boilerplate app ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ecadlabs/taquito-boilerplate"}),"here"))),Object(o.b)("p",null,"The following instructions assume you have a project already created, and you have ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," installed and operable."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @taquito/taquito\n")),Object(o.b)("h2",{id:"import-the-library-in-your-project"},"Import the library in your project"),Object(o.b)("h3",{id:"import-tezostoolkit-from-taquitotaquito-and-instantiate-it"},"Import ",Object(o.b)("inlineCode",{parentName:"h3"},"TezosToolkit")," from ",Object(o.b)("inlineCode",{parentName:"h3"},"@taquito/taquito")," and instantiate it"),Object(o.b)("p",null,"The constructor of the ",Object(o.b)("inlineCode",{parentName:"p"},"TezosToolkit")," class takes an RPC URL as a parameter. It can be a string or a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/rpc_package"}),"RpcClient")," object. A list of community-run nodes can be accessed ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/rpc_nodes#list-of-community-run-nodes"}),"here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\n\nconst tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');\n")),Object(o.b)("p",null,"In some case, it can be useful to make more than one instance of Taquito. Perhaps if you wanted to communicate with two different RPC nodes, or offer to different Signing options. You can new up separate instances with different providers or configuration per instance."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("h3",{id:"changing-the-underlying-signer"},"Changing the underlying signer"),Object(o.b)("p",null,"Taquito's Contract API supports different signers. There is no default signer configured. A signer is required if you intend to inject operations into the Tezos blockchain."),Object(o.b)("p",null,"You can set which signer you wish to use as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\nimport { TezBridgeSigner } from '@taquito/tezbridge-signer';\n\nconst tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');\ntezos.setProvider({ signer: new TezBridgeSigner() });\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"get-the-current-tezos-balance-for-an-address"},"Get the current Tezos balance for an address"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\nTezos.tz\n  .getBalance('tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY')\n  .then(balance => println(`${balance.toNumber() / 1000000} \ua729`))\n  .catch(error => println(JSON.stringify(error)));\n")),Object(o.b)("h3",{id:"using-the-inmemory-signer-and-importing-a-key"},"Using the inMemory Signer and Importing a key"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"InMemorySigner")," package is useful for development and testing. It's an easy way to get started with Tezos when you don't need to interact with a users wallet. The ",Object(o.b)("inlineCode",{parentName:"p"},"InMemorySigner")," is suitable for testing and development. Should you be writing code for production that deals with tokens of real value, it's strongly recommended that you use a RemoteSigner that is backed by a HSM."),Object(o.b)("p",null,"This will import your private key in memory and sign operations using this key."),Object(o.b)("h4",{id:"importing-a-private-key"},"Importing a Private key"),Object(o.b)("p",null,"If you have a private key, you can import it as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\nimport { InMemorySigner, importKey } from '@taquito/taquito-signer';\n\nconst Tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');\n\nTezos.setProvider({ signer: new InMemorySigner() });\nimportKey(Tezos, 'p2sk2obfVMEuPUnadAConLWk7Tf4Dt3n4svSgJwrgpamRqJXvaYcg1');\n")),Object(o.b)("h4",{id:"importing-a-faucet-key"},"Importing a Faucet Key"),Object(o.b)("p",null,'"Faucet Keys" allow you to get Tezos tokens on the various Tezos "testnets". You can download a faucet key from ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://faucet.tzalpha.net/"}),"https://faucet.tzalpha.net/"),"\nThe key is a JSON file, which you can use with Taquito as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\nimport { InMemorySigner, importKey } from '@taquito/taquito-signer';\n\nconst Tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');\nTezos.setProvider({ signer: new InMemorySigner() });\n\nconst FAUCET_KEY = {\n  mnemonic: [\n    'cart',\n    'will',\n    'page',\n    'bench',\n    'notice',\n    'leisure',\n    'penalty',\n    'medal',\n    'define',\n    'odor',\n    'ride',\n    'devote',\n    'cannon',\n    'setup',\n    'rescue',\n  ],\n  secret: '35f266fbf0fca752da1342fdfc745a9c608e7b20',\n  amount: '4219352756',\n  pkh: 'tz1YBMFg1nLAPxBE6djnCPbMRH5PLXQWt8Mg',\n  password: 'Fa26j580dQ',\n  email: 'jxmjvauo.guddusns@tezos.example.org',\n};\n\nimportKey(\n  Tezos,\n  FAUCET_KEY.email,\n  FAUCET_KEY.password,\n  FAUCET_KEY.mnemonic.join(' '),\n  FAUCET_KEY.secret\n);\n")),Object(o.b)("h3",{id:"transfer"},"Transfer"),Object(o.b)("p",null,"The transfer operation requires a configured signer. In this example we will use a private key that we fetch a key service, implemented for demonstration purposes. This key service should only be used for testing and development purposes."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"const amount = 2;\nconst address = 'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY';\n\nprintln(`Transfering ${amount} \ua729 to ${address}...`);\nTezos.contract.transfer({ to: address, amount: amount })\n  .then(op => {\n    println(`Waiting for ${op.hash} to be confirmed...`);\n    return op.confirmation(1).then(() => op.hash);\n  })\n  .then(hash => println(`Operation injected: https://carthagenet.tzstats.com/${hash}`))\n  .catch(error => println(`Error: ${error} ${JSON.stringify(error, null, 2)}`));\n")),Object(o.b)("h3",{id:"interact-with-a-smart-contract"},"Interact with a smart contract"),Object(o.b)("p",null,"Calling smart contract operations requires a configured signer, in this example we will use a faucet key. The Ligo source code for this smart contract ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://better-call.dev/carthage/KT1JVErLYTgtY8uGGZ4mso2npTSxqVLDRVbC/operations"}),"KT1JVErLYTgtY8uGGZ4mso2npTSxqVLDRVbC")," used in this example can be found in a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://ide.ligolang.org/p/CelcoaDRK5mLFDmr5rSWug"}),"Ligo Web IDE"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"Tezos.contract.at('KT1JVErLYTgtY8uGGZ4mso2npTSxqVLDRVbC')\n  .then(contract => {\n    const i = 7;\n\n    println(`Incrementing storage value by ${i}...`);\n    return contract.methods.increment(i).send();\n  })\n  .then(op => {\n    println(`Waiting for ${op.hash} to be confirmed...`);\n    return op.confirmation(1).then(() => op.hash);\n  })\n  .then(hash => println(`Operation injected: https://carthagenet.tzstats.com/${hash}`))\n  .catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")))}u.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);