# Appempleados

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

Esta prueba está diseñada con el Framework Angular 14, Lenguajes HTML, CSS, JavaScript, TypeScript, PHP para el proceso de Crud junto con el framework para PHP Flight y MySQL || phpMyAdmin, utilicé el servidor de localhost XAMP para alojar los datos introducidos en la app ademas de alojar el PHP. Por añadidura le agregue la biblioteca de BootsTrap 5 para decorar.

La prueba consiste en un crud con servicios creados en PHP para agregar, actualizar, eliminar y traer los elementos que se crearon, cuenta con 4 campos (ID, Cedula, Nombres, Apellidos), este PHP contiene headers para permitir el trafico de datos ya que hay una politica en los navegadores que no deja tranferir y manejar datos por ser http, despues de agregado la interfaz muestra un boton para agregar un empleado, cuando se da click ahí se podrá agregar un empleado, cada vista o interfaz tendra un boton para salir, en la pagina pricipal tambien se puede visualizar una tabla donde se podra dar click a la persona que se quiere modificar, cuando se da click redirecciona a una vista donde se podrá editar el empleado seleccionar ademas de poder eliminar el usuario.

Se sube la app web a una instancia de EC2 correctamente pero no se logra conectar muy bien a la base de datos que tambien subí a la instancia, no logré hallar el problema exacto, me pide que tiene que ser un https y no un http, otro problema que tuve fue CORPS.

Recomiendo si se va a probar la app se pruebe con localhost y XAMP poner la carpeta api en htdocs, adicionalmente crear una base de datos llamada api_crud y una tabla llamada empleados con 4 campos 

create table empleados(
id int(20) not null auto_increment primary key,
cedula int(20) not null,
nombres_Emp varchar(255) not null,
apellidos_Emp varchar(255) not null);

Metodos utilizados GET, POST, DELETE, PUT.

igualmente la instancia está activada y funcionado para que se puede visualizar desde los link:

http://ec2-3-90-83-7.compute-1.amazonaws.com

Entrando a Angular agregué un servicio para consumir la api creada en PHP, dos templates un header que contiene un navbar y el logo de la empresa T&T Interactiva y un footer con mi nombre, contiene 3 views un el dashboard que es la pagina principal "home", un edit-empleado la vista que edita los datos y new-empleado que ayuda a crear un nuevo empleado.

Cada componente/Vista contiene su respectiva información.

Muchas gracias por la Atención prestada.

Created By: Juan Felipe Rodríguez Rendón

## Development server

Run `ng serve --o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
