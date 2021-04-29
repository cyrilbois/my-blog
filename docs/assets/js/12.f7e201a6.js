(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(e,a,s){e.exports=s.p+"assets/img/babel-example.74f4beac.png"},389:function(e,a,s){"use strict";s.r(a);var t=s(43),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[e._v("#")]),e._v(" Babel")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel"),t("OutboundLink")],1),e._v(" es una herramienta de Javascript que nos permite transpilar el código de versiones modernas del lenguaje a código que cualquier plataforma (navegador/"),t("a",{attrs:{href:"https://nodejs.org/es/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node"),t("OutboundLink")],1),e._v(") pueda entender. Te muestro un ejemplo sacado de la documentación oficial:")]),e._v(" "),t("p",[t("img",{attrs:{src:s(358),alt:"Babel example"}})]),e._v(" "),t("blockquote",[t("p",[e._v("De lado izquierdo es el código de ECMAScript2020 usando el "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator",target:"_blank",rel:"noopener noreferrer"}},[e._v("nullish coalescing operator "),t("OutboundLink")],1),e._v(" y de lado derecho el código transpilado por Babel.")])]),e._v(" "),t("p",[e._v("Aunque el código generado no es tan legible para humanos, la verdad es que no interesa porque ese código es para el intérprete, no para nosotros. Babel nos da la oportunidad de escribir código legible y él se encargará de generar el código que sea necesario para que corra donde sea.")]),e._v(" "),t("p",[e._v("Hoy te mostraré una pequeña configuración que utilizó para mis proyectos backend en Node. Para el frontend te recomiendo usar algún framework como "),t("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://es.reactjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("React"),t("OutboundLink")],1),e._v(" o "),t("a",{attrs:{href:"https://svelte.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Svelte"),t("OutboundLink")],1),e._v(", ellos ya se encargan de la configuración por ti.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Usé la palabra "),t("strong",[e._v('"transpilar"')]),e._v(" porque a pesar de que se hace una compilación de código, la diferencia es que la transformación se aplica entre lenguajes de similar nivel de abstracción (en este caso versiones diferentes de JS). Si conoces "),t("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typescript"),t("OutboundLink")],1),e._v(", podríamos decir que también "),t("strong",[e._v("transpila")]),e._v(" el código porque sigue siendo JS. Por el contrario, el código de Java se "),t("strong",[e._v("compila")]),e._v(" a lenguaje máquina.")]),e._v(" "),t("p",[e._v("Te dejo unos links que espero despejen tus dudas:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://es.wikipedia.org/wiki/Transpilador",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transpilador"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://es.quora.com/Cu%C3%A1les-son-las-diferencias-entre-compilar-y-transpilar",target:"_blank",rel:"noopener noreferrer"}},[e._v("¿Cuáles son las diferencias entre compilar y transpilar?"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"requerimientos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requerimientos"}},[e._v("#")]),e._v(" Requerimientos")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://nodejs.org/es/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node"),t("OutboundLink")],1),e._v(" (versión 12+)")]),e._v(" "),t("li",[e._v("npm (versión 6+)")])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("npm")]),e._v(" se instala junto con Node.")])]),e._v(" "),t("h2",{attrs:{id:"creacion-del-proyecto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creacion-del-proyecto"}},[e._v("#")]),e._v(" Creación del proyecto")]),e._v(" "),t("ol",[t("li",[e._v("Crea una carpeta para el proyecto y entra en ella.")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" babel-prueba\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" babel-prueba\n")])])]),t("blockquote",[t("p",[e._v("Si te quieres ver pro, puedes ejecutar "),t("code",[e._v("mkdir babel-prueba && cd $_")]),e._v(". Solo funciona en UNIX.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Puedes abrir este proyecto en tu editor de código preferido. En lo personal, yo uso "),t("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("ol",[t("li",[e._v("Inicia un proyecto con "),t("strong",[e._v("npm")]),e._v(".")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" init -y\n")])])]),t("blockquote",[t("p",[t("code",[e._v("-y")]),e._v(" nos evita ingresar manualmente la configuración y utiliza todos los valores por defecto.")])]),e._v(" "),t("h2",{attrs:{id:"instalacion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalacion"}},[e._v("#")]),e._v(" Instalación")]),e._v(" "),t("p",[e._v("Necesitamos 3 librerías base de Babel:")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/@babel/core",target:"_blank",rel:"noopener noreferrer"}},[e._v("@babel/core"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Funcionalidad base de Babel")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/@babel/cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("@babel/cli"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Interfaz de comandos de Babel")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/@babel/preset-env",target:"_blank",rel:"noopener noreferrer"}},[e._v("@babel/preset-env"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Los "),t("a",{attrs:{href:"https://babeljs.io/docs/en/presets/",target:"_blank",rel:"noopener noreferrer"}},[e._v("presets"),t("OutboundLink")],1),e._v(" de Babel ayudan a agregar funcionalidad a la base de Babel. Este preset ayuda a compilar código de ES2015")])])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Puedes usar -D como atajo para --save-dev")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Puedes usar `i` como atajo para `install`")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i -D @babel/core @babel/cli @babel/preset-env\n")])])]),t("p",[e._v("Las instalamos como dependencias de desarrollo porque son necesarias para generar el código de producción pero no para que funcione.")]),e._v(" "),t("h2",{attrs:{id:"uso"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uso"}},[e._v("#")]),e._v(" Uso")]),e._v(" "),t("p",[e._v("Ahora crearemos una carpeta "),t("code",[e._v("src")]),e._v(" en la que guardaremos todo el código de la aplicación.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" src\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" src\n")])])]),t("p",[e._v("Y dentro crearemos un archivo "),t("code",[e._v("index.js")]),e._v(" con el siguiente contenido:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// src/index.js")]),e._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hola Mundo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Para que Babel compile nuestros archivos, necesitaremos crear un archivo "),t("code",[e._v("babel.config.json")]),e._v(" en la raíz del proyecto (fuera de "),t("code",[e._v("src")]),e._v(") y agregar un script en el "),t("code",[e._v("package.json")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// babel.config.json")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"presets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@babel/env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ...\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"babel src --out-dir dist"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  ...\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("En el primer archivo le estamos indicando a Babel que queremos que use un "),t("strong",[e._v("preset")]),e._v(" adicional para que entienda la sintaxis de ES6+. En el "),t("code",[e._v("build")]),e._v(" le indicamos que "),t("code",[e._v("src")]),e._v(" es la única carpeta que queremos que compile y que el resultado lo guarde en un directorio "),t("code",[e._v("dist")]),e._v(".")]),e._v(" "),t("p",[e._v("Ahora nos movemos a la ruta donde esté el "),t("code",[e._v("package.json")]),e._v(" para ejecutar el comando para la compilación:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# En caso de que estuvieramos en `src`, subimos un directorio.")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),t("p",[e._v("Cuando termine la ejecución de este comando, verás que se crea un nuevo directorio "),t("code",[e._v("dist")]),e._v(" y dentro un archivo "),t("code",[e._v("index.js")]),e._v(" con este contenido:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// dist/index.js")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'use strict'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hola Mundo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Hasta aquí no se ve realmente un cambio significativo, solo le agregó una línea al código original 🙃. Pero es porque el "),t("code",[e._v("console.log")]),e._v(" está más que soportado por todas las plataformas.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Si quieres saber más del modo estricto, hablé sobre él en mi artículo de "),t("RouterLink",{attrs:{to:"/best-practices/#modo-estricto"}},[e._v('"Buenas prácticas"')]),e._v(".")],1)]),e._v(" "),t("p",[e._v("Pero agreguemos algo interesante en nuestro "),t("code",[e._v("src/index.js")]),e._v(" para que veamos el poder de Babel. Crearemos una pequeña app con "),t("a",{attrs:{href:"https://expressjs.com/es/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express"),t("OutboundLink")],1),e._v(", así que primero instalemos la librería:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Se agregará como dependencia de producción.")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i express\n")])])]),t("p",[e._v("Y copia este código en tu index. Sin entrar en tanto detalle, se levanta un pequeño servidor que escuchará las peticiones en el puerto 3000, y cuando entres a "),t("code",[e._v("http://localhost:3000")]),e._v(' te responderá con un "Hola Mundo".')]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// src/index.js")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" express "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'express'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("main")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("async")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("express")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hola Mundo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Servidor escuchando en http://localhost:3000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Siempre modifica los archivos de "),t("code",[e._v("src")]),e._v(", nunca los de "),t("code",[e._v("dist")]),e._v(" ya que estos últimos serán sobreescritos en cada compilación.")])]),e._v(" "),t("p",[e._v("Ejecuta "),t("code",[e._v("npm run build")]),e._v(" para compilar los nuevos archivos. Si ahora revisas el "),t("code",[e._v("dist/index.js")]),e._v(", verás un código muy raro y difícil de entender, pero es la versión del código que cualquier plataforma (navegador/Node) puede entender. Para correr el programa, simplemente ejecuta:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ node dist/index.js\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Si al correr el programa obtienes el siguiente error, sigue estos pasos para solucionarlo:")]),e._v(" "),t("p",[t("strong",[e._v("ReferenceError: regeneratorRuntime is not defined")])]),e._v(" "),t("ol",[t("li",[e._v("Instala el plugin de Babel "),t("a",{attrs:{href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("@babel/plugin-transform-runtime"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i -D @babel/plugin-transform-runtime\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Agrega el plugin en el archivo de configuración de Babel.")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"presets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@babel/env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@babel/plugin-transform-runtime"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Vuelve a compilar el proyecto.")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),t("p",[e._v("Después de esto ya no deberías tener ningún problema 😉.")])]),e._v(" "),t("h2",{attrs:{id:"aliases-bonus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases-bonus"}},[e._v("#")]),e._v(" Aliases (Bonus)")]),e._v(" "),t("p",[e._v("Hasta aquí ya puedes trabajar sin ningún problema en tu proyecto con JS moderno, pero te daré un tip que lo tomé de los proyectos de Vue y es el uso de "),t("strong",[e._v("aliases")]),e._v(". En realidad, es una configuración de "),t("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack"),t("OutboundLink")],1),e._v(" que viene por defecto cuando creas un proyecto con la "),t("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue CLI"),t("OutboundLink")],1),e._v(" pero en este caso lo haremos con Babel.")]),e._v(" "),t("ol",[t("li",[e._v("Primero debemos instalar un plugin de Babel llamado "),t("a",{attrs:{href:"https://www.npmjs.com/package/babel-plugin-module-resolver",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel-plugin-module-resolver"),t("OutboundLink")],1),e._v(" (como dependencia de desarrollo):")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i -D babel-plugin-module-resolver\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Modificamos el "),t("code",[e._v("babel.config.json")]),e._v(" para agregar la configuración del plugin:")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// babel.config.json")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// otros plugins")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"module-resolver"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"root"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"alias"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./src/"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Si estás en "),t("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode"),t("OutboundLink")],1),e._v(", agrega un archivo "),t("code",[e._v("jsconfig.json")]),e._v(" en la raíz del proyecto.")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// jsconfig.json")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"baseUrl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"paths"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@/*"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./src/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Supongamos que tienes la siguiente estructura en tu proyecto:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("babel-prueba\n|- babel.config.json\n|- jsconfig.json\n|- package.json\n|- src/\n   |- index.js\n   |- modelos/\n      |- carro-compras/\n         |- Item.js\n   |- servicios/\n      |- carro-compras/\n         |- item.js\n")])])]),t("p",[e._v("Ahora dentro de "),t("code",[e._v("servicios/item.js")]),e._v(" puedes importar el modelo "),t("code",[e._v("Item")]),e._v(" de esta forma:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Item "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@/modelos/carro-compras/Item'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Y evitar el uso de las rutas relativas usando los puntos "),t("code",[e._v("../../")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Item "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'../../modelos/carro-compras/Item'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Con esta configuración ahora podrás importar desde cualquier archivo de una manera más fácil y obtener ayudas del "),t("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/intellisense",target:"_blank",rel:"noopener noreferrer"}},[e._v("intellisense de VSCode"),t("OutboundLink")],1),e._v(". También evitas tener que modificar tus importaciones si mueves tu archivo a un lugar diferente dentro de la estructura de tu proyecto.")]),e._v(" "),t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusión")]),e._v(" "),t("p",[e._v("Espero te haya gustado esta útil herramienta del ecosistema de Javascript, te recomiendo que comiences a usarla para que siempre puedas aplicar las nuevas características del lenguaje sin tener que preocuparte por si el código será soportado por navegadores viejos o versiones antiguas de Node.")]),e._v(" "),t("p",[e._v("Happy coding! 🥸")]),e._v(" "),t("Disqus")],1)}),[],!1,null,null,null);a.default=n.exports}}]);