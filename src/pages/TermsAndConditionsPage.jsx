import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import DisabledSite from '../components/DisabledSite';

const TermsAndConditionsPage = () => {
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite.enabled ?
                <main className='w-full min-h-[100svh]'>
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-10 mt-20 w-fit mx-auto'>
                        Términos y condiciones
                    </h1>
                    <p>
                    TÉRMINOS Y CONDICIONES DE USO DEL SITIO WEB “Tienda Má”


 
Gracias por visitar la página de términos y condiciones (los “Términos y Condiciones”) del sitio web Tienda Má Pañalera online CUIT 27- 34140695-7, con domicilio legal en Vera Mujica 939 Ciudad Rosario, Santa Fe; teléfono servicio al cliente Tienda Má (0341) 15 6630000. El acceso y uso del sitio web, https://tienda-ma.com está sujeto a los siguientes Términos y Condiciones y a las leyes y demás normativa aplicable. Al acceder y navegar en el presente sitio, usted acepta estos Términos y Condiciones sin limitación o condición alguna y a las modificaciones que Tienda Má publique periódicamente. Ciertos servicios y otras ofertas disponibles en el Sitio web pueden tener términos y condiciones adicionales aplicables. Tienda Má podrá realizar cambios en precios, políticas de cambios y en los Términos y Condiciones cuando sea pertinente por lo que le recomendamos revisarlos periódicamente antes de usar el Sitio web. 
 
Todo el material del Sitio web Tienda Ma se proporciona únicamente para fines lícitos. 

Los usuarios serán responsables de todo el contenido que publiquen o comuniquen a través del Sitio web, en particular deberán garantizar su originalidad, precisión, adecuación y legalidad. Los usuarios no deberán realizar ninguna acción ni publicar ningún contenido en el Sitio web que pueda causar daños o generar responsabilidad a los demás usuarios de esos sitios, a Tienda Má o a cualquier tercero. 
 
Declaración de Limitación de Responsabilidad 
 
El Sitio web se ofrece “tal como está” y “según esté disponible”. Tienda Ma no garantiza que el uso del Sitio web será sin interrupciones o estará libre de errores. Tienda Ma se reserva el derecho de modificar, eliminar y/o dejar sin efecto en cualquier momento cualquier ofrecimiento de productos efectuado en el Sitio web, a su exclusiva discreción. Con la mayor extensión permitida por las leyes aplicables


 Privacidad 
 Somos conscientes de que los usuarios se preocupan sobre cómo va a usarse la información que proporcionan en línea a través del Sitio web Tienda Ma. 
Por ello, queremos llevar tranquilidad a las familias que los datos ingresados no serán divulgados, ni utilizados para base de datos, ni se requerirán información sensible a la intimidad. 



Compra de productos en el Sitio. 
 


 Tienda Ma vende sus productos en el Sitio Web exclusivamente a consumidores finales, en forma minorista. Por ello solo se podrán comprar por este medio productos a precio público. Para venta Mayorista por favor comunicarse por whatsapp al 3416630000 o completando formulario.

Una vez seleccionados los productos que desee adquirir, serán incluidos en el carrito de compra. 
 
Al final del proceso de selección, hará clic en el botón “Carrito” para acceder a la página de resumen del carrito de compras, donde podrá identificar y corregir posibles errores de información referentes a su compra. Al final de la página de resumen del pedido del carrito de compra, deberá hacer clic en el botón “Formulario de compra” para proceder a completar los datos de entrega. Hecho esto, deberá hacer clic en el botón “Enviar Orden”. Una vez enviada la orden al proveedor, se confirmará primeramente el stock disponible para luego confirmar la compra en su totalidad o con modificaciones de stock. Luego Tienda Ma se comunicará con el comprador, para acordar formas de pago y ultimar detalles del envío.  

Condiciones de Pago 
 
Se podrá pagar con efectivo al momento de la entrega, transferencia (una vez impactado el pago) o tarjetas bancarias (tarjeta de crédito, o débito) habilitadas. El pago mediante tarjeta de crédito es seguro. La totalidad de la transacción se realiza de forma cifrada a través de nuestras plataformas financieras. 
 
El pago mediante tarjeta de crédito es totalmente seguro. La totalidad de la transacción se realiza de forma cifrada a través de un servidor de validación bancaria, así pues, el número de su tarjeta de crédito y la fecha de la caducidad quedan instantáneamente encriptados en su ordenador antes de ser enviados al protocolo SSL. 
 
Tiempos de Entrega 
 


 
Tienda Ma realizará la entrega en el domicilio dentro de la ciudad de Rosario registrado por el comprador a esos efectos durante el proceso de compra. Sólo se podrá realizar la entrega en domicilios que se encuentren dentro del área acordado con el cliente. Las entregas se realizarán al día siguiente de haber tomado el pedido, días hábiles en el horario de 10hs a 16hs. No se toman pedidos con horario exacto, todos pueden varían en el rango horario establecido y acordado con Tienda Ma.  Todas las entregas irán acompañadas de un acuse de recibo. Los tiempos de entrega son de entre 1 a 3 horas una vez confirmado el envío como despachado. 
Todos los envíos tienen costo adicional. Los cadetes, tienen una espera máxima estipulada de 10 minutos luego de dicho excedente se cobra como un envío extra. 


Entrega fallida 
 
Si el primer envío falla por no encontrarse el cliente en el domicilio pactado, se cobrará al cliente la segunda vuelta del cadete. Si por algún error u omisión de Tienda Ma no es posible la entrega de los productos, Tienda Ma se hace cargo de los costos de la cadeteria.

Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de Argentina, sin referencia a sus disposiciones en materia de conflictos de ley. Si cualquier parte de estos Términos y Condiciones deviene ilegal, inválida o no aplicable, dicha parte será separada y no afectará la validez y cumplimiento de las disposiciones restantes. Tienda Má puede modificar estos Términos y Condiciones en cualquier momento mediante la actualización de esta publicación.
                    </p>
                </main>
            :
                <DisabledSite />
        }
        </>
    )
};

export default TermsAndConditionsPage;
