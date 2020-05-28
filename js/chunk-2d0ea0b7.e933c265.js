(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ea0b7"],{"8fb5":function(e,a,o){"use strict";o.r(a);var s=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("section",[o("h1",[o("p",{attrs:{align:"center"}},[e._v("Aprendiendo Testing Unitario")])]),o("p",{attrs:{align:"center"}},[e._v(" No he vuelto a estar tan emocionado por codificar desde el campamento de entrenamiento ")]),o("p",{attrs:{align:"center"}},[o("img",{attrs:{alt:"GIF of cannonball pool scene from film The Sandlot",src:"https://media.giphy.com/media/3ohzdLFxnwyFeNhtTO/giphy.gif"}})]),o("hr"),o("blockquote",[o("p",[o("em",[e._v("RPV")])])]),o("blockquote",[o("p",[o("em",[e._v("aprende a cocinar un huevo correctamente, ama tus tests unitarios, y en el proceso encuentra tu voz")])])]),o("hr"),o("h2",[e._v("Trasfondo")]),o("p",[e._v("Eso puede sonar como un pedazo de ciberanzuelo, pero la euforia es real, damas y caballeros de los medios sociales.")]),o("p",[e._v("Tan pronto como me despidieron de Boeing tras el golpe del coronavirus, me dispuse a mejorar mi pagina de curriculum vitae y mi presencia en la red. Ha sido un gran viaje de descubrimiento, tanto de uno mismo como del código. Ese código comenzó como un "),o("a",{attrs:{href:"https://codeburst.io/how-i-created-seo-friendly-portfolio-cv-website-and-hosted-it-on-github-d5c4da43cf2f"}},[e._v("diseño simple")]),e._v(". Como los desarrolladores suelen hacer, se añadieron "),o("a",{attrs:{href:"https://dev.to/amruthpillai/ever-dreamed-of-a-free-and-open-source-resume-builder-that-doesn-t-store-your-data-meet-reactive-resume-1dpl"}},[e._v("características")]),e._v(" e incluso elementos de diseño encontrados al mirar los "),o("a",{attrs:{href:"https://html2canvas.hertzen.com/"}},[e._v("documentos")]),e._v(" tecnicos de dichas características.")]),o("p",[e._v("Eventualmente fue alojado en Azure. Para mantenerme dentro de los límites de mi presupuesto (¡el alojamiento es caro!), tuve que ser creativo para poder tener tanto entornos de "),o("a",{attrs:{href:"https://https://shortpoet-test.azurewebsites.net/"}},[e._v("prueba")]),e._v(" como de "),o("a",{attrs:{href:"https://shortpoet.azurewebsites.net/"}},[e._v("producción")]),e._v(", así como "),o("a",{attrs:{href:"https://shortpoet.com"}},[e._v("mi URL")]),e._v(" que en realidad está alojada en páginas GitHub y simplemente apunta al la terminal de la API de datos servida por la aplicación en Azure.")]),o("p",[e._v("Cientos de "),o("a",{attrs:{href:"https://github.com/shortpoet/Shortpoet/commits/dev"}},[e._v("commit")]),e._v(" después, entrada en vivo. Una simple aplicación, pero con muchos puntos de posible fracaso, y yo sólo había experimentado unos pocos. Entra las fase del testing unitario. Finalmente empecé a entender las cosas después de arremangarme y escribir algunas de mis primeras funciones de fabrica de pruebas de unidades.")]),o("p",[e._v("Y fue en ese momento que me inspiré a poner pensamientos en el teclado y armé el marco de este artículo.")]),o("p",[e._v("Darme cuenta de que he escrito código que me impide cambiar arbitrariamente los nombres de los métodos hace que vuelva al patio el niño al que le gustaba jugar contando las líneas saltadas con cada pie.")]),o("p",[e._v("Estoy escribiendo por 3 razones:")]),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores"}},[e._v("SEO")]),e._v(" (posicionamiento en buscadores) de "),o("a",{attrs:{href:"https://www.linkedin.com/in/carlos-soriano-49aaa97/"}},[e._v("LinkedIn")])])]),o("li",[o("p",[e._v("Así recuerdo lo feliz que te hace sentir el éxito la próxima vez que esté listo para rendirme al aprender algo nuevo")])]),o("li",[o("p",[e._v("Ofrecer una o dos pepitas de sabiduría al futuro Carlos u otros buscadores de información")])])]),o("hr"),o("p",[e._v("Con la mirada perdida en el esqueleto de un borrador, perdido en la desesperación, pensando")]),o("blockquote",[o("p",[e._v("Por eso me empezó a desagradar la escuela, grrr, ¡¡Odio escribir!!!")])]),o("p",[e._v('Argh, y también, un poco patético lol. Estoy seguro de que todos sufrimos de bloqueo de escritor. Es una forma de miedo escénico, en realidad. Una sensación que, como antiguo "actor", no me es desconocida. Todos hemos escuchado el consejo - imagina a tu público en ropa interior. No estoy seguro de que sea menos intimidatorio, pero si hay algo de sabiduría que sonsacar. Como siempre, es todo una cuestión de perspectiva.')]),o("p",[e._v("Bueno, eso es más fácil si tú:")]),o("ol",[o("li",[e._v("tienes un público")]),o("li",[e._v("puedes dirigirte a ellos directamente a voluntad")])]),o("p",[e._v("Por suerte, en esta situación, me di cuenta en la ducha, tengo ambas cosas. Oh espera, olvidé mencionar...")]),o("p",[e._v("Así que hice lo que uno debe hacer cuando sufre de bloqueo de escritor - me duché y me preparé para una cita en un supermercado - amor en tiempos de corona eh. Fue entonces que se me ocurrio..")]),o("p",[e._v("Sólo tengo que decidir quién es mi público, ¡obvio! 🙄 Bueno. Ahora, ¿recuerdame, quien eres?")]),o("ul",[o("li",[o("p",[e._v("¿Son mis amigos cercanos y mi familia que (sólo se puede esperar) leerán para apoyar?")])]),o("li",[o("p",[e._v("¿Otro reclutador 'random' enviando solicitudes para trabajos con requisitos específicos que no coinciden con mis habilidades, preguntándome si tengo tiempo para conectar?")])]),o("li",[o("p",[e._v("¿Eres alguien que tambien está buscando de forma activa el SEO en "),o("a",{attrs:{href:"https://www.linkedin.com/in/carlos-soriano-49aaa97/"}},[e._v("LinkedIn")]),e._v(" , y aquí te encuentras?")])]),o("li",[o("p",[e._v("Quién sabe realmente. Tal vez buscaste en Google los tests unitarios y esperabas encontrar el santo grial que hace de tu código una bestia con constitución de "),o("a",{attrs:{href:"https://es.wikipedia.org/wiki/Adamantium"}},[e._v("adamantium")]),e._v(".")])])]),o("p",[e._v("En cualquier caso, si una cosa parece segura, es que sería una tontería intentar complacerlos a todos.")]),o("p",[e._v("Así que aquí estoy, encontrando eso, que supongo que estoy escribiendo para mí mismo:")]),o("ul",[o("li",[e._v("El yo del pasado que no lo hizo")]),o("li",[e._v("El yo de ahora que quiere zanjar con esto")]),o("li",[e._v("Y el yo del futuro que sin duda se avergonzará, pero se dará cuenta de que el viaje valió la pena")])]),o("p",[e._v("Bueno, ya que voy a publicar esto, la esperanza es inspirar a otros nodos de conocimiento que deseen expandir su alcance.")]),o("hr"),o("h2",[e._v("Tests Unitarios")]),o("p",[e._v("Bien, vayamos al grano. Entonces, ¿qué son los tests unitarios y por qué me encantan?")]),o("ol",[o("li",[o("p",[e._v("Escribes un código que hace una cosa.")])]),o("li",[o("p",[e._v("Escribes otro código que hace otra cosa.")])]),o("li",[o("p",[e._v("Sigues haciendo esto hasta que hay tantas cosas, a menudo dependiendo unas de otras, que eventualmente una nueva cosa lo rompe todo.")])])]),o("p",[e._v("Piensa en el castillo de naipes. Sí, más software del que te gustaría saber se parece a un castillo de naipes. Bueno, las pruebas de unidad son comprobaciones, piensa en ello como pegamento, que mantienen las cosas unidas. Un contrato que haces con el yo del futuro (o colaboradores) que esta UNIDAD de código hace una cosa y sólo esa cosa.")]),o("p",[e._v("La cosa de la unidad es la parte difícil y también la belleza. Tuve que refactorizar gran parte de mi código en unidades más definidas para ser fácilmente comprobable. Esto me hizo aprender tanto, que como un desarollador en gran parte autodidacta, me había saltado por el camino.")]),o("p",[e._v("La mayoría podría hervir un huevo. El día que te aburras y decidas sacar el cronómetro (el que tienes en el teléfono te servirá de sobra si tienes el tiempo en tus manos 😉). Aprendes exactamente la diferencia que puede hacer un minuto, o quizás el empezar con agua fría u hirviendo. Las variaciones podrían ser interminables, como con el código. Así que pruebas, encuentras tu preferencia, y estableces un contrato con tu futuro yo para hacerlo bien. Eventualmente, se convierte en una segunda naturaleza. La memoria, como sabemos, es tanto física como metafísica.")]),o("hr"),o("p",[e._v("Una anécdota - en una versión de mis métodos, el código que causaba que el navegador se colgara se debía a que no se había detectado una diferencia en las extensiones de los archivos. Lógicamente, el PNG estaba ocupando mucho más espacio que el JPEG y, por tanto, el colgado. Me habia imaginado que se debía a las dependencias, o tal vez a una mala configuración por mi parte. No. Sólo una extensión de archivo. Bueno, en el futuro, ese test me mantendrá cuerdo.")]),o("p",[e._v("Para el yo del "),o("a",{attrs:{href:"https://www.shortpoet.com"}},[e._v("futuro")]),e._v(" (¡porque por fin esto parece un post sólido!)...")]),o("p",[e._v("Esa extensión de archivo es una gran oportunidad para practicar lo que se conoce como "),o("a",{attrs:{href:"https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas"}},[e._v("TDD")]),e._v(" o el desarrollo guiado por pruebas. Básicamente, uno escribiría un test que comprobaría un método permitiendo a la API cambiar entre las extensiones de archivo - ¡que tan característica! Y la forma en que eso funcionará (¡futuro Carlos!) es que se escribirá el caso de prueba que debe pasar (el huevo hierve a temperatura perfecta) y luego se escribirá el código que asegure esa acción (la prueba pasa - un huevo perfecto).")]),o("p",[e._v("Así que en conclusión, aprende a cocinar un huevo correctamente, ama tus pruebas de unidad, y en el proceso encuentra tu "),o("a",{attrs:{href:"https://www.shortpoet.com/blog"}},[e._v("voz")]),e._v(".")])])}],n=o("2877"),t={},i=Object(n["a"])(t,s,r,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0ea0b7.e933c265.js.map