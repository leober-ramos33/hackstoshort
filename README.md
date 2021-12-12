**Esta extensión ya no funciona por qué el sitio de Hackstore.net esta fuera del aire debido a una denuncia de Copyright**.

<p align="center">
    <img
        alt="Hackstoshort"
        src="https://raw.githubusercontent.com/yonaikerlol/hackstoshort/master/docs/logo.png"
    />
</p>

Esta es una extensión hecha para saltar los anuncios que se encuentran en los enlaces de descarga de [Hackstore.net](https://hackstore.net).

## ¿Cómo usarlo?

Solo debes de abrir un enlace de descarga en el que quieras saltar la publicidad:

![Hackstore.net links](https://raw.githubusercontent.com/yonaikerlol/hackstoshort/master/docs/hackstore.net-links.png)

Esto te llevara a un sitio que tenga por dominio: `hackshort.me` y lucirá como este:

![Hackshort.me](https://raw.githubusercontent.com/yonaikerlol/hackstoshort/master/docs/hackshort.me.png)

Haz click sobre la extensión y te generara el enlace directo de la descarga:

![Enlace generado](https://raw.githubusercontent.com/yonaikerlol/hackstoshort/master/docs/link-generated.png)

## Pirateria

Desde ya me abstengo de cualquier uso que se le de a esta extensión, no intento que este proyecto sea usado con fines de la pirateria, simplemente la cree como una manera de aprender un concepto nuevo como el de desarrollar extensiones de navegador.

## Tecnologias Usadas

-   [Parcel.js](https://parceljs.org/)
-   [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
-   [GibberishAES](https://github.com/mdp/gibberish-aes)

## Compilación

Para compilar este proyecto necesitas tener una copia de este (ya sea con Git o descargando el tarball/zipball), luego ejecutar el siguiente comando para instalar las dependencias:

```bash
npm install
```

Luego para hacer una compilación hecha para producción puedes ejecutar:

```bash
npm run build
```

## Desarrollo

En caso de que quieras desarrollar para el proyecto, puedes utilizar el siguiente comando para que cada cambio que hagas en el código se compile automáticamente:

```bash
npm run watch
```

## Licencia

Este proyecto esta bajo los términos de la licencia de [MIT](https://github.com/yonaikerlol/hackstoshort/blob/master/LICENSE).
