//PRIMERO PARA TRABAJAR UN ELEMENTO HAY QUE CAPTURARLO A TRAVES DE UNA VARIABLE O CONSTANTE:

    //Declaro una constante o variable o let:
    const parrafo/*parrafo es el nombre que le asigne a la const o variable*/ = document.querySelector('.parrafo'/*nombre del id o clase*/)
    parrafo.textContent = '<b> texto que quiero poner con JS</b>'//no aplica estilo bold, lo imprime como texto
    parrafo.innerHTML = ' <b>texto que quiero poner con innerHTML</b>'//aplica el estilo bold 
    //-> primero le ordena hacer lo que pide el js y despues hace lo del innerHTML

    parrafo.classList.add('h3-danger','otraClase')//permite agregar clases al elemento declarado y agregar otras
    
    //seguir por: https://www.youtube.com/watch?v=DMGiOhH8jcQ CREATE ELEMENT / https://www.youtube.com/watch?v=kUpx6ovPILc FRAGMENT / https://www.youtube.com/watch?v=bC8Ed2mpewo TEMPLATE HTML:

    
    //guardo en const para poder acceder: 
/*   
        const lista = document.getElementById('lista');
        console.log(lista);    

    //crear elementos de una lista del html:
        //const li = document.createElement('li');//creamos un elemento: ejem: 'p' o 'h1'
        //li.textContent='Primer elemento';// al 'li' de arriba le da contenido de texto    
        //lista.appendChild(li);//le dice a 'lista' que su hijo es 'li'
    
    //crear array y mostrarlo en la lista del html:
        const arrayElement = ['primero elem','segundo elem','tercer elem','cuarto elem'];
    

        arrayElement.forEach(item=> {
            //console.log(item); 
            //crear elementos de una lista del html con "createElement" y "text content" puede provocar Reflow:
                //const li = document.createElement('li');//crearmos un li
                li.textContent='Primer elemento';// cambio a todos los items del array a 'Primer elemento'  
                li.textContent=item;//cambia el contenido al contenido del array:'Primer elemento' a 'primero elem'
                lista.appendChild(li);//le dice a 'lista' que su hijo es 'li'

            //crear elementos de una lista del html con "innerHTML" pero puede provocar Reflow: 
                //lista.innerHTML += `<li>${item}</li>`//con ` ` puede crear a los elementos de las etiquetas e invocar los datos
      })
*/


        //crear con FRAGMENT -> evita el Reflow por lo que no tiene que cargar toda la pagina cada vez que carga un elemento: 
/*        
        const fragment = document.createDocumentFragment()
        //const fragment = new DocumentFragment() es lo mismo que el de arriba
        arrayElement.forEach(item=>{
            //agregar a un FRAGMENT:
            const li = document.createElement('li')
            li.classList.add('list')// le agrega una clase(para ejemplo createElement)
            //li.textContent = item//le dice que el contenido de li son los item del array
            //fragment.appendChild(li)//pushea el li a fragment -> queda: primero, seg, terc, cuarto
            
            //Ejemplo fragment sin createElement:
            //const childNode = fragment.firstChild;//declara cual fue el primer hijo para despues cargar uno delante de otro
            //console.log(item, childNode);//imprime el item y si tiene hijos
            //fragment.insertBefore(li, childNode)//inserta el li en la posicion anterior al ultimo elemento insertado -> queda: cuarto, terc, seg, primero

            //para createElement(ver como debe ser la estructura comentada en 'notas.html'):
            const b = document.createElement('b');//crear <b>
            b.textContent = 'Nombre: ';//contenido del <b>            
            const span = document.createElement('span');//crear <span>
            span.classList.add('text-danger')//agregar clase 'text-danger'
            span.textContent = item//agregar contenido al <span>, en este caso items del array
            li.appendChild(b)//asignar b como hijo de li
            li.appendChild(span)//asignar span como hijo de li
            fragment.appendChild(li)//asignar li como hijo de un fragmento

            //console.log(fragment);// imprime por consola #document-fragment
        })

        lista.appendChild(fragment);//pushea al fragmento a lista para el ejemplo sin y con createElement


*/        
    //mas facil que createElement: HAY ALTERNATIVA QUE USA EL INNER HTML PARA HACER MENOS CODIGO PERO QUE NO ADMITE EL FRAGMENT POR ESO LO DECLARA COMO VARIABLE https://www.youtube.com/watch?v=bC8Ed2mpewo min. 8.30:

        //let fragment = '';// declara una variable que se llama fragment en vez de usar un fragmento
        //arrayLista.forEach(item =>{
        //    fragment += `
        //    <li class="list">
        //        <b>Nombre: </b><span class="text-danger">${item}</span></b>                
        //    </li>
        //    `
        //})
        //lista.innerHTML = fragment
    
//TEMPLATE HMTL: Son para hacer fragmentos. Defino algunas cosas nuevas para que no se pise con el anterior ejemplo. ES RECOMENDABLE QUE EL TEMPLATE SIEMPRE VAYA AL FINAL DEL HTML POR ENCIMA DEL SCRIPT!
        //const nuevaLista = document.querySelector('#nuevalista');
        const arrayNuevaLista = ['cosa 1', 'cosa 2', 'cosa 3', 'cosa 4', 'cosa 5'];
        const template = document.querySelector('#template-li').content;// con el content podemos acceder directamente a sus elementos: *1
        
        const fragment = document.createDocumentFragment()

        arrayNuevaLista.forEach(item =>{
            //con *1(content) puedo acceder a los elementos aqui abajo:
            //template.querySelector('.list span').textContent = item; //mejor para desarrollos mas complejos
            //template.querySelector('.text-danger').textContent = item; //otra version 
            template.querySelector('span').textContent = item; //otra version. eLEGIMOS EL SPAN, CAMBIAMOS EL CONTENIDO, ELEGIMOS EL CONTENIDO ITEM
            const clone = template.cloneNode(true);//crea una constante que clone el template que creamos
            fragment.appendChild(clone)//agregamos clone a fragment
        })
        lista.appendChild(fragment);//agrega fragment a lista que es id de <ul>