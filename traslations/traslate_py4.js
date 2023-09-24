// Configuración de i18next
i18next.init({
  lng: 'en', // Idioma predeterminado
  resources: {
      en: {
          translation: {
              "titu_clave67": "Sales dashboard: empowering decisions with Power BI.",
              "titu_clave68": "Tools: Excel, Power Query and Power BI.",
              "titu_clave69": "In this project, I created a video game sales dashboard using the Power BI tool. The main objective of this dashboard is to provide a complete and detailed view of video game sales data, allowing users to make informed and strategic decisions.",
              "titu_clave70": "Average Sales by Region: represents the average sales of video games broken down by geographic regions.",
              "titu_clave71": "Sum of Sales and Region Count by Platform: Provides a detailed view of total sales and region count based on gaming platforms.",
              "titu_clave72": "Sum of Sales and Region Count by Genre: Allows users to explore total sales and the number of regions served by video game genre.",
              "titu_clave73": "Annual Sales by Game: Provides a detailed analysis of the annual sales of specific video games",
              "titu_clave74": "Sum of Sales and Region Count by Year: This component provides a global view of total sales and geographic coverage for each year.",
              "titu_clave75": "Custom Segmentation: I have added a segmentation functionality that allows users to filter the data based on the year, gender and region of their choice.",          
              "titu_clave77": "Your interest means a lot! 🚀.",
              "titu_clave78": "Thanks for visiting!",
              "titu_clave79": "Contact",
              "titu_clave80": "Ariana Spenza Portfolio",
            }
      },
      es: {
          translation: {             
              "titu_clave67": "Dashboard de ventas: potenciando las decisiones con Power BI.",
              "titu_clave68": "Herramientas:  Excel, Power Query y Power BI.",
              "titu_clave69": "En este proyecto, realicé un dashboard de ventas de videojuegos utilizando la  herramienta Power BI. El objetivo principal de este dashboard es proporcionar una visión completa y detallada de los datos de ventas de videojuegos, permitiendo a los usuarios tomar decisiones informadas y estratégicas.",
              "titu_clave70": "Promedio de Ventas por Región: representa el promedio de ventas de videojuegos desglosado por regiones geográficas.",
              "titu_clave71": "Suma de Ventas y Recuento de Regiones por Plataforma: Ofrece una visión detallada de las ventas totales y el recuento de regiones en función de las plataformas de juego.",
              "titu_clave72": "Suma de Ventas y Recuento de Regiones por Género: Permite a los usuarios explorar las ventas totales y el número de regiones atendidas por género de videojuego.",
              "titu_clave73": "Ventas Anuales por Juego: Proporciona un análisis detallado de las ventas anuales de videojuegos específicos.",
              "titu_clave74": "Suma de Ventas y Recuento de Regiones por Año: Este componente ofrece una vista global de las ventas totales y la cobertura geográfica para cada año.",
              "titu_clave75": "Segmentación Personalizada: He agregado una funcionalidad de segmentación que permite a los usuarios filtrar los datos según el año, género y región de su elección.",        
              "titu_clave77": "¡Tu interés significa mucho! 🚀",
              "titu_clave78": "¡Gracias por visitar!",
              "titu_clave79": "Contacto",
              "titu_clave80": "Portafolio de Ariana Spenza",
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
        document.getElementById('titu72').textContent = t('titu_clave72');
        document.getElementById('titu73').textContent = t('titu_clave73');
        document.getElementById('titu74').textContent = t('titu_clave74');
        document.getElementById('titu75').textContent = t('titu_clave75');      
        document.getElementById('titu77').textContent = t('titu_clave77');
        document.getElementById('titu78').textContent = t('titu_clave78');
        document.getElementById('titu79').textContent = t('titu_clave79');
        document.getElementById('titu80').textContent = t('titu_clave80');
    
       
       
       


       


       // document.getElementById('about').textContent = t('about');
      //  document.getElementById('contact').textContent = t('contact');
    });
}