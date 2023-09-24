// Configuración de i18next
i18next.init({
  lng: 'en', // Idioma predeterminado
  resources: {
      en: {
          translation: {
              "titu_clave67": "Exploring sales performance with Looker Studio",
              "titu_clave68": "Tools: Excel and Looker Studio.",
              "titu_clave69": "I made a dashboard in Looker with the need for the business to have more detailed control over how its customers made payments and the amount of daily sales.",
              "titu_clave70": "On the dashboard, I included a date slicer, which allows sales to be broken down into specific time intervals. This is useful for identifying trends and patterns in sales over time.",
              "titu_clave71": "You can then see a donut chart that provides a visualization of the payment methods used by customers, helping us make informed decisions about how to manage and offer payment options.",
              "titu_clave78": "In addition to the donut chart, we have included a summary of the total sales amount. This allows us to have a clear idea of ​​the total billing during the selected period.",
              "titu_clave72": "In short, this dashboard in Looker Studio gives us a comprehensive view of our payment methods, total sales amount, and how sales vary over time. This information is essential to make strategic decisions and improve operational efficiency at the location.",     
              "titu_clave74": "Your interest means a lot!🚀.",
              "titu_clave75": "Thanks for visiting!",
              "titu_clave76": "Contact",
              "titu_clave77": "Ariana Spenza Portfolio",
            }
      },
      es: {
          translation: {             
              "titu_clave67": "Explorando el rendimiento de ventas con Looker Studio",
              "titu_clave68": "Herramientas: Excel y Looker Studio.",
              "titu_clave69": "Realicé un tablero en Looker con la necesidad de que el negocio pueda tener un control más detallado sobre cómo sus clientes realizaban los pagos y la cantidad de ventas diarias.",
              "titu_clave70": "En el tablero, incluí una segmentación por fecha, que permite desglosar las ventas en intervalos de tiempo específicos. Esto es útil para identificar tendencias y patrones en las ventas a lo largo del tiempo..",
              "titu_clave71": "Luego, se puede observar un gráfico de dona que proporciona una visualización de los métodos de pago utilizados por los clientes, lo que nos ayuda a tomar decisiones informadas sobre cómo administrar y ofrecer opciones de pago.",
              "titu_clave78": "Además del gráfico de dona, hemos incluido un resumen del importe total de las ventas. Esto nos permite tener una idea clara de la facturación total durante el período seleccionado.",
              "titu_clave72": "En resumen, este tablero en Looker Studio nos proporciona una visión integral de nuestros métodos de pago, el importe total de ventas y cómo varían las ventas a lo largo del tiempo. Esta información es esencial para tomar decisiones estratégicas y mejorar la eficiencia operativa en el local.",           
              "titu_clave74": "¡Tu interés significa mucho! 🚀",
              "titu_clave75": "¡Gracias por visitar!.",
              "titu_clave76": "Contacto",
              "titu_clave77": "Portafolio de Ariana Spenza",
         
            }
      }
  }
});

// Función para cambiar el idioma
function changeLanguage(language) {
    i18next.changeLanguage(language, (err, t) => {
        if (err) return console.log('Error al cambiar el idioma', err);
        // Traduce el contenido según el idioma seleccionado        
        document.getElementById('titu67').textContent = t('titu_clave67');
        document.getElementById('titu68').textContent = t('titu_clave68');
        document.getElementById('titu69').textContent = t('titu_clave69');
        document.getElementById('titu70').textContent = t('titu_clave70');
        document.getElementById('titu71').textContent = t('titu_clave71');
        document.getElementById('titu78').textContent = t('titu_clave78');
        document.getElementById('titu72').textContent = t('titu_clave72');      
        document.getElementById('titu74').textContent = t('titu_clave74');
        document.getElementById('titu75').textContent = t('titu_clave75');
        document.getElementById('titu76').textContent = t('titu_clave76');
        document.getElementById('titu77').textContent = t('titu_clave77');
    
       
       
       


       


       // document.getElementById('about').textContent = t('about');
      //  document.getElementById('contact').textContent = t('contact');
    });
}