import React from "react";
import {data} from "@/app/data";
import Swal from 'sweetalert2';
export const ProductList = ({
allProducts,
setAllProducts,
countProducts,
setCountProducts,
total,
setTotal,
}) => {
const onAddProduct = product => {
if (allProducts.find(item => item.id === product.id)) {
const products = allProducts.map(item =>
item.id === product.id
? { ...item, quantity: item.quantity + 1 }
: item
);
setTotal(total + product.price * product.quantity);
setCountProducts(countProducts + product.quantity);
return setAllProducts([...products]);
}
setTotal(total + product.price * product.quantity);
setCountProducts(countProducts + product.quantity);
setAllProducts([...allProducts, product]);
};

const onResumen = product => {
    let resumen = "";
    if(product.id === 1){
         resumen = "Cien años de soledad, escrita por Gabriel García Márquez, es una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. La novela explora temas como el amor, la soledad, la guerra y el destino, mezclando lo fantástico con lo cotidiano. A través de los personajes, se refleja la historia y las luchas de América Latina. El libro destaca por su estilo narrativo único y su rica simbología";
    }
    else if(product.id === 2){
         resumen = "El Señor de los Anillos,escrito por J.R.R. Tolkien, es una épica saga de fantasía que sigue las aventuras de Frodo Bolsón, un hobbit encargado de destruir el Anillo Único, un objeto de gran poder y maldad. Junto a la Compañía del Anillo, formada por diversos personajes de diferentes razas, Frodo debe viajar a Mordor para arrojar el anillo en los fuegos del Monte del Destino.";
    }
    else if(product.id === 3){
        resumen = "Cuentos de Barro, escrito por Salarrué, es una colección de relatos que capturan la vida y el folclore rural de El Salvador. A través de un lenguaje vívido y poético, los cuentos retratan las experiencias cotidianas de los campesinos, con un enfoque en su conexión con la naturaleza y sus creencias populares.";
   }
   else if(product.id === 4){
    resumen = "Tierra de Infancia, de Claudia Lars es una evocadora colección de poemas que explora los recuerdos y emociones de la niñez en El Salvador. A través de versos líricos y nostálgicos, Lars rememora su hogar, la naturaleza, y las tradiciones locales. La obra destaca la belleza y simplicidad de la vida rural, así como el profundo arraigo a la tierra natal. Con un lenguaje delicado y emocional, los poemas transmiten una sensación de amor y añoranza por la infancia perdida. La colección es una celebración poética de la memoria y la identidad cultural.";
    }
  else if(product.id === 5){
        resumen = "La serie Harry Potter, escrita por J.K. Rowling, sigue las aventuras del joven mago Harry Potter y sus amigos Hermione Granger y Ron Weasley en la Escuela de Magia y Hechicería de Hogwarts. Harry descubre su verdadera identidad como mago y su conexión con el oscuro mago Lord Voldemort, quien mató a sus padres. A lo largo de siete libros, Harry enfrenta diversos desafíos y peligros mientras intenta derrotar a Voldemort y proteger el mundo mágico";
   }
Swal.fire({
  text: `${resumen}`,
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
}

return (
    <div className='container-items'>
    {data.map(product => (
    <div className='item' key={product.id}>
    <figure>
    <img src={product.urlImage} alt={product.title} onClick={() => onResumen(product)}/>
    </figure>
    <div className='info-product'>
    <h2>{product.nameProduct}</h2>
    <p className='price'>${product.price}</p>
    <button onClick={() => onAddProduct(product)}>
    Añadir al carrito
    </button>
    </div>
    </div>
    ))}
    </div>
    );
    };