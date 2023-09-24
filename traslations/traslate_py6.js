// Configuración de i18next
i18next.init({
  lng: 'en', // Idioma predeterminado
  resources: {
      en: {
          translation: {
              "titu_clave67": "Optimizing restaurant performance: analysis and strategies with Tableau.",
              "titu_clave68": "Tools: Excel and Tableau.",
              "titu_clave69": "In this project, I conducted an analysis of a restaurant, searching for answers to its operational challenges. Through detailed data visualizations, I explored various facets of the business to reveal patterns and trends. This project was carried out with Tableau Public.",
              "titu_clave70": "In the following graph, you can see wine sales over the months in relation to other restaurant products. The purple color signifies wine sales per month, where in September, wine sales experienced a significant decrease. While the other categories remained stable.",
              "titu_clave71": "Next, I examined wine sales by customer type. While the number of new customers remained relatively stable over time, repeat customers experienced a notable decline in their purchases starting in September.",
              "titu_clave72": "As for the waiters, it can be seen that one of them, Mauricio, had a late start in his performance, but quickly became the leader in sales. This stood out even more because all the other waiters maintained a more or less constant performance.",
              "titu_clave73": "Another important aspect was the tips per waiter, again Mauricio demonstrated that he was the waiter who received the most generous tips for wine sales. This suggested that he was not only an effective salesperson, but also offered exceptional service.",
              "titu_clave74": "In summary, my analysis in Tableau provided a comprehensive view of the challenges and opportunities facing the restaurant.",
              "titu_clave75": "Volatility in wine sales stood out, in contrast to other product categories that maintained stable sales. The drop in wine sales in September raised questions about possible areas for improvement.",
              "titu_clave76": "A significant decrease in wine purchases by repeat customers was observed beginning in September.",
              "titu_clave77": "It was identified that the performance of the waiters was affected by the arrival of a new team member, which generated a decrease in the sales of other waiters",
              "titu_clave78": "To avoid losses in September and optimize business performance, improvements such as staff training and support, customer loyalty program, diversification of offers and promotions during September can be considered.",   
              "titu_clave80": "Your interest means a lot! 🚀",
              "titu_clave81": "Thanks for visiting!",
              "titu_clave82": "Contact",
              "titu_clave83": "Ariana Spenza Portfolio",
           
            }
      },
      es: {
          translation: {             
              "titu_clave67": "Optimización del rendimiento de un restaurante: análisis y estrategias con Tableau.",
              "titu_clave68": "Herramientas:  Excel y Tableau.",
              "titu_clave69": "En este proyecto, realicé un análisis de un restaurante, en busca de respuestas a sus desafíos operativos. A través de visualizaciones con datos detallados, exploré diversas facetas del negocio para revelar patrones y tendencias. Este proyecto fue realizado con Tableau Public.",
              "titu_clave70": "En el siguiente gráfico, se puede observar las ventas de vino a lo largo de los meses en relación con otros productos del restaurante. El color morado siginifica la venta de vino por mes, donde en septiembre, las ventas de vino experimientaron una disminución significativa. Mientras que las otras categorías se mantuvieron estables.",
              "titu_clave71": "Luego, examiné las ventas de vino según el tipo de cliente. Mientras que el número de clientes nuevos se mantuvo relativamente estable a lo largo del tiempo, los clientes repetidos experimentaron un notable descenso en sus compras a partir de septiembre.",
              "titu_clave72": "En cuanto a los meseros, se puede visualizar que  uno de ellos, Mauricio, había tenido un inicio tardío en su desempeño, pero rápidamente se convirtió en el líder en ventas. Esto destacaba aún más porque todos los demás meseros mantenían un rendimiento más o menos constante.",
              "titu_clave73": "Otro aspecto importante fueron las propinas por mesero, nuevamente Mauricio demostró que era el mesero que recibía las propinas más generosas por ventas de vino. Esto sugería que no solo era un vendedor efectivo, sino que también ofrecía un servicio excepcional.",
              "titu_clave74": "En resumen, mi análisis en Tableau proporcionó una visión integral de los desafíos y las oportunidades que enfrenta el restaurante.",
              "titu_clave75": "Se destacó la volatilidad en las ventas de vino, en contraste con otras categorías de productos que mantuvieron ventas estables. La caída en las ventas de vino en septiembre planteó preguntas sobre posibles áreas de mejora.",
              "titu_clave76": "Se observó una disminución significativa en las compras de vino por parte de los clientes repetidos a partir de septiembre.",
              "titu_clave77": "Se identificó que el desempeño de los meseros se vio afectado por la llegada de un nuevo integrante del equipo, lo que generó una disminución en las ventas de otros meseros.",
              "titu_clave78": "Para evitar pérdidas en septiembre y optimizar el rendimiento del negocio, se pueden considerar mejoras como capacitación y apoyo al personal, programa de fideliación de clientes, diversificación de ofertas y promociones durante septiembre.",     
              "titu_clave80": "¡Tu interés significa mucho! 🚀",
              "titu_clave81": "¡Gracias por visitar!",
              "titu_clave82": "Contacto",
              "titu_clave83": "Portafolio de Ariana Spenza",
          
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
        document.getElementById('titu80').textContent = t('titu_clave80');
        document.getElementById('titu81').textContent = t('titu_clave81');
        document.getElementById('titu82').textContent = t('titu_clave82');
        document.getElementById('titu83').textContent = t('titu_clave83');
        
    
       
       
       


       


       // document.getElementById('about').textContent = t('about');
      //  document.getElementById('contact').textContent = t('contact');
    });
}