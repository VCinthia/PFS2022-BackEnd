import { Contenido } from "./contenido";
import Tienda from "./tienda";

let genshinImpact : Contenido = new Contenido('videojuego','Genshin Impact','01/01/01','Videojuego de mundo abierto, gratuito, disponible para consolas y pc', 'https://media.vandal.net/i/1280x720/75962/genshin-impact-202092819311747_1.jpg')
let cupHead : Contenido = new Contenido('videojuego','Cup Head','29/09/17','Cuphead es un videojuego perteneciente al género de corre y dispara, publicado por la empresa canadiense StudioMDHR. Fue lanzado al mercado el 29 de septiembre de 2017 para Microsoft Windows, Xbox One y Steam, ​en 2018 para macOS, en 2019 para Nintendo Switch y en 2020 para PlayStation 4.', 'https://image.api.playstation.com/vulcan/img/cfn/11307fllh6D-IvbpCa18N0vRggVeRYWA06paTNCj3DENJMScAzW2f3ry4IwFcXBAt9kWXdZGpGoOGjxJ_e9MdordMVAosNhZ.png')

let notion : Contenido = new Contenido('aplicacion','Notion','02/02/02','Notion es un software de gestión de proyectos y para tomar notas. Está diseñado para ayudar a los miembros de una empresa u organización a coordinar plazos, objetivos y tareas en aras de la eficiencia y la productividad.', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png')
let trello : Contenido = new Contenido('aplicacion','Trello','01/01/11','Trello es un software de administración de proyectos con interfaz web y con cliente para iOS y android para organizar proyectos.', 'https://herramientasenlanube.com/wp-content/uploads/2019/08/gestion-proyectos-trello.jpg')

let miTienda : Tienda = new Tienda('Tienda de Cinthia');

miTienda.createContenido(genshinImpact);
miTienda.createContenido(notion);
miTienda.createContenido(trello);

miTienda.findContenido(genshinImpact);
miTienda.updateContenido(cupHead, 0);

console.log(miTienda.readVideoJuegos()); 

miTienda.deleteContenido(genshinImpact,0);//elimina la posicion aunque no se corresponda con el nombre del contenido

console.log(miTienda.readVideoJuegos());
console.log(miTienda.readAplicaciones());

console.log(miTienda.readVideoJuegosTxt());
console.log(miTienda.readAplicacionesTxt());
