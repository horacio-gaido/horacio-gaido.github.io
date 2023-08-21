document.addEventListener("DOMContentLoaded", function () {
  const categories = [
    "Actuá como un programador experto en los siguientes lenguajes de programación o librerías",
    "Escribe",
    "El output debe ser ",
    "Estilo de escritura",
    "La ultima pregunta es ",
    "Estructura de comandos ",
    "Redes sociales "



    // ... agregar más categorías aquí
  ];

  const subtopics = [
    [
      "⁕ Python 3.9.12",
      "⁕ Pandas 2.0.2",
      "⁕ Selenium 4",
      "⁕ Numpy",
      "⁕ Seaborn",
      "⁕ Matplotlib",
      "⁕ Excel",
      "⁕ Power BI",
      "⁕ Power Query",
      "⁕ Lenguaje M, Power Query",
      "⁕ Explícame de forma detallada el siguiente código",
      "⁕ Escribe una descripción para documentar el siguiente código",
      "⁕ Convierte el siguiente objeto JSO en XML",
      "⁕ HTML to Text (Web Scraping). Convierte el siguiente HTML en TEXTO ",
      "⁕ Depuración de código Python. Quiero que seas un programador de Python, aquí hay un fragmento de código de Python que contiene {problema} — {insertar código}"
      
    ],
    [
      "⁕ Que INFORMACIÓN te tengo que dar o que preguntas te tengo que responder para que me des la mejor respuesta respecto de lo que te estoy consultando ",
    "⁕ Un PROMT para pedirle a una inteligencia artificial la creación de imágenes que me genere: ",
    "⁕ Un RESUMEN del siguiente texto: ",
    "⁕ 10 IDEAS creativas sobre el siguiente tema: ",
    "⁕ De una forma más SENCILLA el siguiente tema: ",
    "⁕ Una EXPLICACIÓN simplificada para el siguiente tema y me podráis dar ejemplos por favor: ",
    "⁕ Mejora la REDACCIÓN del siguiente texto: ",
    "⁕ Redacta el siguiente texto de una forma que sea más fácil de entender: "
    ],
    [
      "⁕ Complejo niver MBA",
      "⁕ Complejo nivel doctorado Phd",
      "⁕ Para el CEO de la empresa",
      "⁕ Simple nivel niño de 8 años"
    ],
    [
      "⁕ Escribre un mail y su asunto sobre: ",
      "⁕ Formal",
      "⁕ Informal",
      "⁕ Persuasiva",
      "⁕ Descriptiva",
      "⁕ Narrativa",
      "⁕ Inspiracional",
      "⁕ Cercana",
      "⁕ Emotiva",
      "⁕ Amable",
      "⁕ Técnica",
      "⁕ Respetuoso",
      "⁕ Irónico",
      "⁕ Convierte el siguiente texto en títulos y subtítulos",
      "⁕ Incluye emojis al final de cada oración",
      

    ],
    [
      "⁕ ¿Cómo debería haber escrito el primer promt para que me hubiera obtenido una respuesta como la que obtuve?",
       "⁕ Pensé que tenías más sabiduría y conocimientos, ¿Podrías hacer un último esfuerzo para mejorar lo que te he pedido?",
       "⁕ Dame ejemplos de casos de uso reales de estudio sobre este tema",
       "⁕ Hola ChatGPT, ¿puedes proporcionar una respuesta detallada e informativa sobre .............., incluida cualquier información relevante, ejemplos y fuentes? ¡Gracias de antemano!",
       "⁕ Muestra la respuesta en el formato de una tabla",
       "⁕ Muestra la respuesta en formato markdown",
       "⁕ Muestra la respuesta en párrafos resumidos",
       "⁕ Muestra la respuesta como una lista",
       "5.5",
       "5.5",
    ],
    [
       "⁕ Rol, Tarea, Formato",
       "⁕ Contexto, Taream Formato",
       "⁕ ConEjemplos, Rol, Tarea, Formato"
    ],
    [
       "⁕ Escribre un blog sobre: ",
       "⁕ Escribre un tweet sobre: ",
       "⁕ ConEjemplos, Rol, Tarea, Formato"
    ]
    // ... agregar más subtemas aquí
  ];

  const themeForm = document.getElementById("themeForm");
  const generatePromptButton = document.getElementById("generatePrompt");
  const clearFormButton = document.getElementById("clearForm");
  const resultTextarea = document.getElementById("result");

  categories.forEach((category, index) => {
    const label = document.createElement("label");
    label.classList.add("d-block"); // Añade esta clase para alinear hacia la izquierda
    label.textContent = category + ": ";

    const select = document.createElement("select");
    select.name = `category-${index}[]`; // Usamos un array para seleccionar múltiples opciones
    select.classList.add("form-select", "mb-3");
    select.multiple = true; // Permitimos selección múltiple

    subtopics[index].forEach((subtopic) => {
      const option = document.createElement("option");
      option.value = subtopic;
      option.textContent = subtopic;
      select.appendChild(option);
    });

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.name = `category-${index}-text`;
    textInput.placeholder = "Escribe una opción personalizada...";
    textInput.classList.add("form-control", "mb-3");

    textInput.style.display = "none";

    label.appendChild(select);
    label.appendChild(textInput);

    themeForm.appendChild(label);
  });

  generatePromptButton.addEventListener("click", function (event) {
    event.preventDefault();
    const formData = new FormData(themeForm);
    let result = "";

    categories.forEach((category, index) => {
      const selectedOptions = formData.getAll(`category-${index}[]`); // Obtener todas las opciones seleccionadas
      const customOption = formData.get(`category-${index}-text`);

      if (selectedOptions.length > 0) {
        result += `${category}: ${selectedOptions.join(", ")}\n`;
      } else if (customOption) {
        result += `${category}: ${customOption}\n`;
      }
    });

    resultTextarea.value = result.trim();
    resultTextarea.select();
    document.execCommand("copy"); // Copiar el texto al portapapeles
  });

  clearFormButton.addEventListener("click", function (event) {
    event.preventDefault();
    themeForm.reset();
    resultTextarea.value = "";
    const textInputs = document.querySelectorAll('input[type="text"]');
    textInputs.forEach(input => input.style.display = "none");
  });
});