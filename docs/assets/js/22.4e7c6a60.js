(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{279:function(a,s,t){a.exports=t.p+"assets/img/come.ed5b8520.gif"},340:function(a,s,t){"use strict";t.r(s);var e=t(13),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"variables-de-entorno"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables-de-entorno"}},[a._v("#")]),a._v(" Variables de entorno")]),a._v(" "),s("p",[a._v("En todo sistema se usa información o claves que no cualquiera debería tener acceso, por ejemplo, una clave de acceso a alguna API, credenciales de autenticación, URLs, etc. Cualquier cosa que no quieras compartir puede entrar en esta categoría y la mejor manera de darle tratamiento es usando "),s("strong",[a._v("variables de entorno")]),a._v(".")]),a._v(" "),s("p",[a._v("Así que veamos cómo usarlas correctamente.")]),a._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:t(279),alt:"Come"}})]),a._v(" "),s("p",[a._v("Las "),s("strong",[a._v("variables de entorno")]),a._v(" son variables que "),s("strong",[a._v("se crean a nivel de sistema operativo")]),a._v(", por eso son tan seguras (no soy experto en ciberseguridad pero al menos es mucho mejor que "),s("a",{attrs:{href:"https://es.wikipedia.org/wiki/Hard_code",target:"_blank",rel:"noopener noreferrer"}},[a._v('"harcodearlas"'),s("OutboundLink")],1),a._v(").")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("Existe un conjunto de buenas prácticas para el desarrollo y despliegue de aplicaciones conocido como "),s("a",{attrs:{href:"https://12factor.net/es/",target:"_blank",rel:"noopener noreferrer"}},[a._v("The twelve-factor app"),s("OutboundLink")],1),a._v(". El tema de variables de entorno es el "),s("a",{attrs:{href:"https://12factor.net/es/config",target:"_blank",rel:"noopener noreferrer"}},[a._v("punto 3"),s("OutboundLink")],1),a._v(" pero te recomiendo leer los doce.")])]),a._v(" "),s("p",[a._v("Estas variables las podrías crear desde la terminal (dependiendo tu sistema operativo) así:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NUEVA_ENV_VAR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Hola\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NUEVA_ENV_VAR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Hola\n")])])]),s("p",[a._v("Pero sería muy complicado llevar un control sobre ellas de este modo. Así que una mejor opción es usar archivos "),s("code",[a._v(".env")]),a._v(" y la librería "),s("a",{attrs:{href:"https://www.npmjs.com/package/dotenv",target:"_blank",rel:"noopener noreferrer"}},[a._v("dotenv"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"usando-dotenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usando-dotenv"}},[a._v("#")]),a._v(" Usando "),s("code",[a._v("dotenv")])]),a._v(" "),s("p",[a._v("Lo primero que debes hacer es instalar la librería:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i dotenv\n")])])]),s("blockquote",[s("p",[a._v("Esto la agregará como dependencia a tu proyecto.")]),a._v(" "),s("p",[a._v("Previamente debe existir un "),s("code",[a._v("package.json")]),a._v(", si no es así, lo puedes crear ejecutando "),s("code",[a._v("npm init -y")]),a._v(".")]),a._v(" "),s("p",[s("code",[a._v("npm")]),a._v(" se instala junto con "),s("a",{attrs:{href:"https://nodejs.org/es/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node JS"),s("OutboundLink")],1),a._v(".")])]),a._v(" "),s("p",[a._v("Después debes crear un archivo "),s("code",[a._v(".env")]),a._v(" en la raíz de tu proyecto y dentro escribir las variables con el formato "),s("code",[a._v("CLAVE=VALOR")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEBUG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("cddw"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$324")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("sad/dsa"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("as/adsa\n")])])]),s("blockquote",[s("p",[a._v("La buena práctica es escribir el nombre de la variable en mayúsculas.")])]),a._v(" "),s("p",[a._v("Y en el archivo JS donde necesites las variables de entorno, necesitas escribir esta línea al inicio:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Sintaxis de Node")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dotenv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Módulos de ES6")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" dotenv "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dotenv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndotenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Finalmente, accedes a las variables de la siguiente manera:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DEBUG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> 'true'")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("API_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> 'cddw$324&sad/dsa&as/adsa'")]),a._v("\n")])])]),s("p",[a._v("Y eso es todo lo que debes hacer para trabajar con variables de entorno en tu proyecto 🤭.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("Todas las variables de entorno se crean como cadenas de texto, así que debes tener cuidado con valores booleanos.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Esto se evaluará como verdadero porque lo que se guarda es el string 'false'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEBUG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Esto se evaluará como falso porque será un string vacío ''")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEBUG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n")])])]),s("p",[a._v("Si te queda duda sobre los valores falsy/truthy revisa mi artículo "),s("RouterLink",{attrs:{to:"/js/bang-bang-operator/"}},[a._v('"Operador Bang Bang (Valores Falsy/Truthy)"')]),a._v(".")],1)]),a._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("DANGER")]),a._v(" "),s("p",[s("strong",[a._v("Nunca subas tu archivo "),s("code",[a._v(".env")]),a._v(" a tu repositorio de código")]),a._v(".")]),a._v(" "),s("p",[a._v("Mejor crea un archivo "),s("code",[a._v(".env.example")]),a._v(" con la estructura base pero sin ningún valor que pueda ser comprometido y sube este archivo a tu repo.")])]),a._v(" "),s("h2",{attrs:{id:"creando-un-archivo-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creando-un-archivo-config"}},[a._v("#")]),a._v(" Creando un archivo "),s("code",[a._v("config")])]),a._v(" "),s("p",[a._v("Aunque ya estás listo para trabajar con variables de entorno, te voy a mostrar una buena práctica para tener centralizadas las variables.")]),a._v(" "),s("p",[a._v("Crea un archivo llamado "),s("code",[a._v("config.js")]),a._v(" y dentro de él exporta un objeto con todas las variables de entorno que necesites.")]),a._v(" "),s("blockquote",[s("p",[a._v("El archivo se puede llamar como quieras pero este archivo lo podrías usar para la configuración general de tu proyecto.")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Sintaxis de Node")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dotenv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("debug")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DEBUG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("apiKey")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("API_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Módulos de ES6")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" dotenv "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dotenv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndotenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("debug")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DEBUG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("apiKey")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("API_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("Usamos el "),s("RouterLink",{attrs:{to:"/js/bang-bang-operator/"}},[a._v("operador Bang Bang")]),a._v(" para obtener un valor booleano en lugar del string.")],1)]),a._v(" "),s("p",[a._v("De esta manera, cuando necesites tus variables solo debes importar el archivo config y acceder a cada una como propiedades. Una forma más eficiente de programar 👌.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Sintaxis de Node")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./config.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> true")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Módulos de ES6")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./config.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("apiKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> 'cddw$324&sad/dsa&as/adsa'")]),a._v("\n")])])]),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[a._v("#")]),a._v(" Conclusión")]),a._v(" "),s("p",[a._v("Espero este artículo te ayude a tener una mejor organización en tus futuros proyectos con respecto al uso de información confidencial. Siempre procura seguir las buenas prácticas de desarrollo y despliegue para evitar la mayor cantidad de problemas posibles. Hay que hacerle caso a los gurús de la informática 🤓.")]),a._v(" "),s("p",[a._v("Nos vemos en la siguiente. Happy coding! 🥸")]),a._v(" "),s("Disqus")],1)}),[],!1,null,null,null);s.default=n.exports}}]);