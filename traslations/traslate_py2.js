// Configuración de i18next
i18next.init({
  lng: 'en', // Idioma predeterminado
  resources: {
      en: {
          translation: {
              "titu_clave67": "Analysis of the Mental Health of university students",
              "titu_clave68": "Tools: SQL, DB browser, Python, Jupyter Notebook, Jupyter Lab.",
              "titu_clave69": "In this project, I dove into the analysis of a dataset downloaded from Kaggle that provided detailed information about college students in the United States.",
              "titu_clave70": "The table included data on the presence of anxiety, depression and panic attacks in the students, as well as information on whether they received specialized treatment. Additionally, it included details about the course level, major, age, and gender of the students.",
              "titu_clave71": "I started by downloading the CSV file from Kaggle, which contained all the necessary information. Next, I used Python in a Jupyter Notebook environment to open the CSV file and load the data into an SQLite database. This allowed me to run SQL queries on the data to get relevant information.",
              "titu_clave72": "Analysis with SQL: I calculated the number of students who have depression, anxiety and panic attacks.",
              "titu_clave73": "Analysis with SQL: the average age by gender.",
              "titu_clave74": "Analysis with SQL: I calculated the average CGPA (Grade Point Average) by gender.",
              "titu_clave75": "Analysis with SQL: the number of students with special treatment, grouped by year of study.",
              "titu_clave76": "Analysis with SQL: average age of students with specialized treatments by gender.",
              "titu_clave77": "After running the SQL queries and getting the results, I moved the data to a Jupyter Lab environment.",
              "titu_clave78": "I used data visualization libraries like Matplotlib to create informative and representative graphs. First generate a graph to visualize the number of students who have depression.",
              "titu_clave79": "And then, I generated bar graphs to show the number of students with anxiety, depression, depression, and panic attacks.",
              "titu_clave80": "This project allowed me to explore in depth the situation of university students in relation to anxiety, depression and specialized treatments.",
              "titu_clave81": "Additionally, I was able to analyze key statistics, such as average age and academic performance. Combining SQL queries and visualizations in Jupyter Lab provided a complete view of the data and helped identify important patterns and trends. This analysis can be useful to educational institutions in identifying needs and implementing additional supports for students.",
              "titu_clave82": "See next project",
              "titu_clave83": "Your interest means a lot! 🚀",
              "titu_clave84": "Contact",
              "titu_clave85": "Thanks for visiting!",
              "titu_clave86": "Ariana Spenza Portfolio",
            }
      },
      es: {
          translation: {             
              "titu_clave67": "Análisis sobre la Salud Mental de estudiantes universitarios",
              "titu_clave68": "Herramientas: SQL, DB browser, Python, Jupyter Notebook, Jupyter Lab.",
              "titu_clave69": "En este proyecto, me sumergí en el análisis de un conjunto de datos descargado desde Kaggle que proporcionaba información detallada sobre estudiantes universitarios en los Estados Unidos.",
              "titu_clave70": "La tabla comprendía datos sobre la presencia de ansiedad, depresión y ataques de pánico en los estudiantes, así como información sobre si recibían tratamiento especializado. Además, incluía detalles sobre el nivel del curso, la especialización, la edad y el género de los estudiantes.",
              "titu_clave71": "Comencé por descargar el archivo CSV desde Kaggle, que contenía toda la información necesaria. Luego, utilicé Python en un entorno Jupyter Notebook para abrir el archivo CSV y cargar los datos en una base de datos SQLite. Esto me permitió realizar consultas SQL en los datos para obtener información relevante.",
              "titu_clave72": "Análisis con SQL: calculé la cantidad de estudiantes que tienen depresión, ansiedad y ataques de pánico.",
              "titu_clave73": "Análisis con SQL: el promedio de edad por género.",
              "titu_clave74": "Análisis con SQL: calculé el promedio de CGPA (Grade Point Average) por género.",
              "titu_clave75": "Análisis con SQL: la cantidad de estudiantes con un tratamiento especial, agrupado por año de estudio.",
              "titu_clave76": "Análisis con SQL: edad promedio de estudiantes con tratamientos especializados por género.",
              "titu_clave77": "Luego de realizar las consultas SQL y obtener los resultados, trasladé los datos a un entorno Jupyter Lab.",
              "titu_clave78": "Utilicé bibliotecas de visualización de datos como Matplotlib para crear gráficos informativos y representativos.En primer lugar genere un gráfico para visualizar la cantidad de alumnos que tienen depresión.",
              "titu_clave79": "Y luego, generé gráficos de barras para mostrar la cantidad de estudiantes con ansiedad, depresión, depresión y ataques de pánico.",
              "titu_clave80": "Este proyecto me permitió explorar en profundidad la situación de los estudiantes universitarios en relación con la ansiedad, la depresión y los tratamientos especializados.",
              "titu_clave81": "Además, pude analizar estadísticas clave, como la edad promedio y el desempeño académico. La combinación de consultas SQL y visualizaciones en Jupyter Lab proporcionó una visión completa de los datos y ayudó a identificar patrones y tendencias importantes. Este análisis puede ser útil para las instituciones educativas en la identificación de necesidades y la implementación de apoyos adicionales para los estudiantes",
              "titu_clave82": "Ver siguiente proyecto",
              "titu_clave83": "¡Tu interés significa mucho! 🚀",
              "titu_clave84": "Contacto",
              "titu_clave85": "¡Gracias por visitar!",
              "titu_clave86": "Portafolio de Ariana Spenza",
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
        document.getElementById('titu76').textContent = t('titu_clave76');
        document.getElementById('titu77').textContent = t('titu_clave77');
        document.getElementById('titu78').textContent = t('titu_clave78');
        document.getElementById('titu79').textContent = t('titu_clave79');
        document.getElementById('titu80').textContent = t('titu_clave80');
        document.getElementById('titu81').textContent = t('titu_clave81');
        document.getElementById('titu82').textContent = t('titu_clave82');
        document.getElementById('titu83').textContent = t('titu_clave83');
        document.getElementById('titu84').textContent = t('titu_clave84');
        document.getElementById('titu85').textContent = t('titu_clave85');
        document.getElementById('titu86').textContent = t('titu_clave86');
       
       
       


       


       // document.getElementById('about').textContent = t('about');
      //  document.getElementById('contact').textContent = t('contact');
    });
}