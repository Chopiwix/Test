document.addEventListener("DOMContentLoaded", function() {
    const logroForm = document.getElementById("logroForm");

    logroForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Obtener los valores del formulario
        const titulo = document.getElementById("titulo").value;
        const fecha = document.getElementById("fecha").value;
        const area = document.getElementById("area").value;
        const descripcion = document.getElementById("descripcion").value;
        const imagen = document.getElementById("imagen").files[0]; // Se obtiene el archivo de imagen

        // Aquí puedes realizar acciones adicionales, como validar los datos del formulario o enviarlos a un servidor

        // Por ejemplo, para mostrar los datos del formulario en la consola:
        console.log("Título:", titulo);
        console.log("Fecha:", fecha);
        console.log("Área:", area);
        console.log("Descripción:", descripcion);
        console.log("Imagen:", imagen);

        // Si deseas enviar los datos a un servidor, puedes utilizar AJAX o Fetch API
        // Por ejemplo, utilizando Fetch API para enviar los datos a un servidor en formato JSON:
        const formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("fecha", fecha);
        formData.append("area", area);
        formData.append("descripcion", descripcion);
        formData.append("imagen", imagen);

        fetch("tu-servidor.com/tu-ruta-de-guardar-logro", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert("¡Logro guardado exitosamente!");
                // Puedes redirigir al usuario a otra página después de guardar el logro si lo deseas
            } else {
                alert("Error al guardar el logro. Por favor, inténtalo de nuevo.");
            }
        })
        .catch(error => {
            console.error("Error al guardar el logro:", error);
            alert("Error al guardar el logro. Por favor, inténtalo de nuevo.");
        });
    });
});
