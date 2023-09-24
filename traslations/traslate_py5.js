// Configuración de i18next
i18next.init({
  lng: 'en', // Idioma predeterminado
  resources: {
      en: {
          translation: {
              "titu_clave67": "Analyzing customer behavior and sales with Power BI.",
              "titu_clave68": "Tools: Excel, Power Query and Power BI.",
              "titu_clave69": "This report provides a comprehensive analysis of sales and customer behavior to provide valuable insights to support more informed business decisions.",
              "titu_clave70": "The sum of sales per year was calculated and a significant decrease in sales was identified during 2019.",
              "titu_clave71": "Date segmentation filters were applied to explore sales trends over time.",
              "titu_clave72": "Total sales and a segmentation by city are presented.",
              "titu_clave73": "A pie chart is used to visualize the payment methods preferred by customers, highlighting that 33% opt for deferred payment.",
              "titu_clave74": "A Top Ten of the best-selling products is presented.",
              "titu_clave75": "Conclusions",
              "titu_clave76": "Sales Trend: The analysis reveals a significant drop in sales during 2019. This could be attributed to external factors such as the next pandemic or changes in the company's strategy.",
              "titu_clave77": "Sales Segmentation: Variation in sales is observed by city, suggesting opportunities to focus marketing and sales efforts on areas with high potential.",
              "titu_clave78": "Payment Methods: The majority of customers choose deferred payment (33%), which could indicate a preference for flexible payment options. The company could consider adjusting its payment strategy to better serve this customer segment.",
              "titu_clave79": "In short, this analysis provides valuable insights into sales and customer behavior. Conclusions highlight areas of opportunity and strategic recommendations aim to improve profitability and customer satisfaction. The company can use this knowledge to make informed decisions and plan its future strategy.",
              "titu_clave81": "Your interest means a lot! 🚀",
              "titu_clave82": "Thanks for visiting!",
              "titu_clave83": "Contact",
              "titu_clave84": "Ariana Spenza Portfolio",
          
          
      
            }
      },
      es: {
          translation: {             
              "titu_clave67": "Analizando el comportamiento del cliente y las ventas con Power BI.",
              "titu_clave68": "Herramientas: Excel, Power Query y Power BI.",
              "titu_clave69": "En el presente informe, se expone un análisis exhaustivo de las ventas y el comportamiento de los clientes, con el objetivo de proporcionar información valiosa que respalde la toma de decisiones más fundamentadas por parte del negocio.",
              "titu_clave70": "Se calculó la suma de ventas por año y se identificó una disminución significativa en las ventas durante el año 2019.",
              "titu_clave71": "Se aplicaron filtros de segmentación de fecha para explorar las tendencias de ventas a lo largo del tiempo.",
              "titu_clave72": "Se presentan las ventas totales y una segmentación por ciudad.",
              "titu_clave73": "Se utiliza un gráfico de torta para visualizar las formas de pago preferidas por los clientes, donde se destaca que el 33% opta por el pago aplazado.",
              "titu_clave74": "Se presenta un Top Ten de los productos más vendidos.",
              "titu_clave75": "Conclusiones.",
              "titu_clave76": "Tendencia de Ventas: El análisis revela una caída significativa en las ventas durante el año 2019. Esto podría atribuirse a factores externos como la proxima pandemia o cambios en la estrategia de la empresa.",
              "titu_clave77": "Segmentación de Ventas: Se observa una variación en las ventas por ciudad, lo que sugiere oportunidades para centrar los esfuerzos de marketing y ventas en áreas con un alto potencial.",
              "titu_clave78": "Formas de Pago: La mayoría de los clientes elige el pago aplazado (33%), lo que podría indicar una preferencia por opciones de pago flexibles. La empresa podría considerar ajustar su estrategia de pago para atender mejor a este segmento de clientes.",
              "titu_clave79": "En resumen, este análisis proporciona información valiosa sobre las ventas y el comportamiento de los clientes. Las conclusiones destacan áreas de oportunidad y las recomendaciones estratégicas apuntan a mejorar la rentabilidad y la satisfacción del cliente. La empresa puede utilizar estos conocimientos para tomar decisiones informadas y planificar su estrategia futura.",
              "titu_clave81": "¡Tu interés significa mucho! 🚀",
              "titu_clave82": "¡Gracias por visitar!",
              "titu_clave83": "Contacto",
              "titu_clave84": "Portafolio de Ariana Spenza",
           
           
            }
         
            }
      }
  }
);

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
        document.getElementById('titu76').textContent = t('titu_clave76');
        document.getElementById('titu77').textContent = t('titu_clave77');
        document.getElementById('titu78').textContent = t('titu_clave78');
        document.getElementById('titu79').textContent = t('titu_clave79');       
        document.getElementById('titu81').textContent = t('titu_clave81');
        document.getElementById('titu82').textContent = t('titu_clave82');
        document.getElementById('titu83').textContent = t('titu_clave83');
        document.getElementById('titu84').textContent = t('titu_clave84');
    
       
       
       


       


       // document.getElementById('about').textContent = t('about');
      //  document.getElementById('contact').textContent = t('contact');
    });
}