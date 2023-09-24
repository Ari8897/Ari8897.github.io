// Configuración de i18next
i18next.init({
  lng: 'en', // Idioma predeterminado
  resources: {
      en: {
          translation: {
              "titu_clave66": "10-step guide to evaluate the impact of an advertising campaign.",
              "titu_clave67": "Tools: Meta Business Suite, Excel, Power Query and Power BI.",
              "titu_clave68": "The world of marketing and advertising is a dynamic mix of creativity and analysis. In the following project, I had the opportunity to explore the effect of an advertising campaign using a combination of tools.",
              "titu_clave69": "Organization of critical data: I started by creating a dedicated folder for this project, where I centralized the CSV report provided by Meta Business Suite.",
              "titu_clave70": "Data extraction: Used Power Query from a folder to import the data and perform transformations.",
              "titu_clave71": "Initial cleaning: I eliminated empty columns that did not provide relevant information for our analysis.",
              "titu_clave72": "Data refinement: I identified and eliminated columns with useless or redundant data, keeping only the essential.",
              "titu_clave73": "Null Data Management: Detected and handled null values ​​in the data to ensure the integrity of the analysis.",
              "titu_clave74": "Number formatting: Adjusted the formats of the numeric data to ensure accuracy.",
              "titu_clave75": "Deleting totalizer rows: I identified and deleted totalizer rows that were not relevant to our analysis.",
              "titu_clave76": "Date Table Creation: In the data model, I created a critical date table to analyze trends over time.",
              "titu_clave77": "Established relationships: Established relationships between the report tables and the date tables in the data model to allow for more complete analysis.",
              "titu_clave78": "Data Visualization: Finally, I used Power BI to create charts and visualizations that revealed the impact of the advertising campaign effectively.",
              "titu_clave79": "As can be seen in the graph presented, our data analysis tool allows you to filter the information by date, which provides a clear view of the effectiveness of the advertising campaign over time.",
              "titu_clave80": "It stands out that the majority of impressions come from the demographic group of people between 25 and 34 years old.",
              "titu_clave81": "The campaign had a relatively short duration, just 3 days, during which we managed to obtain a total of 88 clicks on the link of the page we wanted to promote. This shows genuine interest on the part of users.",
              "titu_clave82": "One of the key indicators we evaluate is the conversion rate, which represents the proportion of users reached by the advertising who ultimately clicked on the link. This data is essential to measure the effectiveness of the campaign and, in this case, shows a positive rate.",
              "titu_clave83": "Besides, the graph provides us with the sum of clicks on the link broken down by gender, where it stands out that the majority of clicks come from men, representing 56.82% of the total.",
              "titu_clave84": "This data gives us a comprehensive view of the campaign and helps us make informed decisions for future advertising strategies.",
              "titu_clave86": "Your interest means a lot! 🚀",
              "titu_clave87": "Thanks for visiting!",
              "titu_clave88": "Contact",
              "titu_clave89": "Ariana Spenza Portfolio"
            }
      },
      es: {
          translation: {             
              "titu_clave66": "Guía de 10 pasos para evaluar el impacto de una campaña publicitaria.",
              "titu_clave67": "Herramientas: Meta Business Suite, Excel, Power Query y Power BI.",
              "titu_clave68": "El mundo del marketing y la publicidad es una mezcla dinámica de creatividad y análisis. En el siguiente proyecto, tuve la oportunidad de explorar el efecto de una campaña publicitaria utilizando una combinación de herramientas.",
              "titu_clave69": "Organización de datos fundamentales: Comencé creando una carpeta dedicada para este proyecto, donde centralicé el informe CSV proporcionado por Meta Business Suite.",
              "titu_clave70": "Extracción de datos: Utilicé Power Query desde una carpeta para importar los datos y llevar a cabo transformaciones.",
              "titu_clave71": "Limpieza inicial: Eliminé las columnas vacías que no aportaban información relevante para nuestro análisis.",
              "titu_clave72": "Refinamiento de datos: Identifiqué y eliminé columnas con datos sin utilidad o redundantes, manteniendo solo lo esencial.",
              "titu_clave73": "Gestión de datos nulos: Detecté y manejé los valores nulos en los datos para garantizar la integridad del análisis.",
              "titu_clave74": "Formateo de números: Ajusté los formatos de los datos numéricos para garantizar la precisión.",
              "titu_clave75": "Eliminación de filas totalizadoras: Identifiqué y eliminé filas totalizadoras que no eran relevantes para nuestro análisis.",
              "titu_clave76": "Creación de tabla de fechas: En el modelo de datos, creé una tabla de fechas fundamental para analizar las tendencias a lo largo del tiempo.",
              "titu_clave77": "Establecimiento de relaciones: Establecí relaciones entre las tablas del informe y las tablas de fechas en el modelo de datos para permitir un análisis más completo",
              "titu_clave78": "Visualización de datos: Finalmente, utilicé Power BI para crear gráficos y visualizaciones que revelaron el impacto de la campaña publicitaria de manera efectiva.",
              "titu_clave79": "Como se puede observar en el gráfico presentado, nuestra herramienta de análisis de datos permite filtrar la información por fecha, lo que brinda una visión clara de la efectividad de la campaña publicitaria a lo largo del tiempo.",
              "titu_clave80": "Destaca que la mayoría de las impresiones provienen del grupo demográfico de personas entre 25 y 34 años.",
              "titu_clave81": "La campaña tuvo una duración relativamente corta, de tan solo 3 días, durante los cuales logramos obtener un total de 88 clics en el enlace de la página que deseábamos promocionar. Esto demuestra un interés genuino por parte de los usuarios.",
              "titu_clave82": "Uno de los indicadores clave que evaluamos es la tasa de conversión, que representa la proporción de usuarios alcanzados por la publicidad que finalmente realizaron clic en el enlace. Este dato es fundamental para medir la eficacia de la campaña y, en este caso, muestra una tasa positiva.",
              "titu_clave83": "Además, el gráfico nos proporciona la suma de clics en el enlace desglosados por género, donde destaca que la mayoría de los clics provienen de hombres, representando un 56.82% del total.",
              "titu_clave84": "Estos datos nos ofrecen una visión integral de la campaña y nos ayudan a tomar decisiones informadas para futuras estrategias de publicidad.",
              "titu_clave86": "¡Tu interés significa mucho! 🚀",
              "titu_clave87": "¡Gracias por visitar!",
              "titu_clave88": "Contacto",
              "titu_clave89": "Portafolio de Ariana Spenza"
            }
      }
  }
});

// Función para cambiar el idioma
function changeLanguage(language) {
    i18next.changeLanguage(language, (err, t) => {
        if (err) return console.log('Error al cambiar el idioma', err);
        // Traduce el contenido según el idioma seleccionado
        document.getElementById('titu66').textContent = t('titu_clave66');
        document.getElementById('titu67').textContent = t('titu_clave67');
        document.getElementById('titu68').textContent = t('titu_clave68');
        document.getElementById('titu69').textContent = t('titu_clave69');
        document.getElementById('titu70').textContent = t('titu_clave70');
        document.getElementById('titu71').textContent = t('titu_clave71');
        document.getElementById('titu72').textContent = t('titu_clave72');
        document.getElementById('titu73').textContent = t('titu_clave73');
        document.getElementById('titu74').textContent = t('titu_clave74');
        document.getElementById('titu75').textContent = t('titu_clave75');
        document.getElementById('titu76').textContent = t('titu_clave76');
        document.getElementById('titu77').textContent = t('titu_clave77');
        document.getElementById('titu78').textContent = t('titu_clave78');
        document.getElementById('titu79').textContent = t('titu_clave79');
        document.getElementById('titu80').textContent = t('titu_clave80');
        document.getElementById('titu81').textContent = t('titu_clave81');
        document.getElementById('titu82').textContent = t('titu_clave82');
        document.getElementById('titu83').textContent = t('titu_clave83');
        document.getElementById('titu84').textContent = t('titu_clave84');
        document.getElementById('titu86').textContent = t('titu_clave86');
        document.getElementById('titu87').textContent = t('titu_clave87');
        document.getElementById('titu88').textContent = t('titu_clave88');
        document.getElementById('titu89').textContent = t('titu_clave89');


       


       // document.getElementById('about').textContent = t('about');
      //  document.getElementById('contact').textContent = t('contact');
    });
}