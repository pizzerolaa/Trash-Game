# Game Review Web Application

En este proyecto se desarrolló una aplicaicón web para hacer reseñas y comentarios a reseñas, de una variedad de juegos registrados en la página. Después de crear una cuenta e iniciar sesión, podrás acceder a estas funcionallidades y leer cada uno de las entradas hechas por diferentes usuarios.

## Requerimientos

Para poder iniciar y correr lo contenido en este repositorio, será necesario contar ciertos programas y dependencias, los cuales se enlistan a continuación...

### Node JS

Es necesario contar con Node JS instalado en su equipo para iniciar tanto la visualización de la página como el servidor de esta. Para ello accede a la siguiente dirección [Download Node JS](https://nodejs.org/en/download/package-manager), y después de elegir de las distintas opciones la que más te convenga, sigue las instrucciones ahí descritas.

### Servicio local de Base de Datos 

También es necesario contar con algún servicio o sistema de gestión de bases de datos, alojado localmente en tu equipo. En caso de este proyecto, será necesario que puede correr MySQL. Para esto nosotros recomendamos XAMPP que se puede encontrar en el siguiente enlace: [XAMPP Installers and Downloads](https://www.apachefriends.org/es/index.html).

## Ejecutar el Proyecto

### Clonar el repositorio locamente

Como primer paso debemos clonar este repositorio localmente con la ayuda del comando...

- `git clone https://github.com/pizzerolaa/Aplicacion-MVC.git`

..., ejecutándolo en la terminal de tu preferencia, dentro el directorio donde quieras que se ubiquen alojados los archivos de la aplicación. 

### Configurar la Base de Datos

Después de haber clonado el repositorio, necesitamos importar la base de datos al sistema de gestión. Para ello primero abre XAMPP o la aplicación de tu predferencia y asegúrate de que los servicios de Apache y MySQL se encuentren en correcto funcionamiento, como se muestra en la imagen:

![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/a82ba355-6b8a-4f82-a11c-e194d3ff97a9)

Posteriormente, ingresamos al panel de administración de MySQL, mediante el botón 'Admin' resaltado. Dentro, en el panel del lateral izquierdo seleccionamos la opción de "Nueva" y por nombre le daremos 'appmvc'. Luego daremos click en "Crear".

![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/cfff52c9-9356-4c28-acf6-313d595aace4)

Una vez creada, en la barra superior seleccionamos "Importar" y seleccionamos el archivo 'appMVC.sql' ubicado en la carpeta SRC del repositorio recién clonado.

![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/bc38ded2-8de6-4da6-9825-9ae9b1c477b5)

Por último, damos en "Importar" al final de la página.

![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/a1fc1d23-d6eb-4cd7-8a24-b64d7571ba54)

### Correr localmente la aplicación

Completo lo anterior, en la terminal de tu preferencia ubícate en la carpeta fuente del repositorio clonado y ejecuta los siguientes comandos:

- `npm i`: Instala las dependencias externas del proyecto.

- `npm start`: Inicia la aplicación de REACT.


Por último, entra a la carpeta de 'backend' con ayuda `cd .\backend\` y ejecuta:

- `npm i`: Instala las dependencias internas del proyecto.

- `node index.js`: Inicia el servidor de Express.


Terminado esto, la página estará lista para su uso.

## HAPPY PATH

A continuación, se muestra una guía rápida donde se exponen las distintas páginas y funcionalidades de la aplicación.

### Landing Page

En esta primera vista, nos podemos dar una buena idea de lo que esta aplicación tiene que ofrecernos. 

![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/7e47e83f-6f8c-406e-9750-9aeb98d92f38)
![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/03f4ba6b-84bd-46f1-a8d4-667696ce2531)

Podemos observar en el navbar el nombre de la página, botones de navegación hacia 'games' y 'reviews' y opciones para hacer login y/o registrar un nuevo usuario. Posteriormente, un banner de presentación, con opciones para ver los juegos registrados en la página y para escribir una reseña tu mismo y, más abajo, un muestreo de las últimas 4 reseñas cargadas por los usuarios. Por último, un footer que nos muestra distintos sitios de información relevante para el usuario y categorías relacionadas con el giro de la aplicación web (solo de ejemplo).

### Games Page

![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/ebf764d5-41dd-4e6e-91ab-5ff3ea66765b)

Aquí se encuentran alojados aquellos juegos, junto con sus portadas y descripciones, que son recomendados por 'TrashGame' para que el videojugador viva y sea parte de la experiencia.

### Reviews Page

![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/f0e43d94-523a-489e-ab82-f0730eb70dc6)

En esta página, podemos encontrar un listado de todas las reseñas escritas por los usuarios del sitio, expresando sus diferentes opiniones para diversos títulos. Asimismo, en cuentión de funcionalidad se incluye la posibilidad de eliminar en cualquier momento alguna referencia que haya sido realizada por el usuario logeado en el momento (como se observa en la imagen, la 'x' para borrar una reseña solo aparece en aquellos casos donde el usuario que escribió coincide con el usuario ingresado actualmente).



![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/7e661918-9674-4861-afbc-90a425e3637b)
![image](https://github.com/pizzerolaa/Aplicacion-MVC/assets/128638772/2a5cd2a1-3da2-40cf-9e65-fb467417cb6a)

