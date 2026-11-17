document.getElementById('btnCalcular').addEventListener('click', function() {
    // Capturar y limpiar valores
    let nombre = document.getElementById('nombre').value.trim();
    let c1 = parseFloat(document.getElementById('cal1').value);
    let c2 = parseFloat(document.getElementById('cal2').value);
    let c3 = parseFloat(document.getElementById('cal3').value);

    // A. Validación de información
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (isNaN(c1) || isNaN(c2) || isNaN(c3)) {
        alert("Todas las calificaciones deben ser un número válido.");
        return;
    }

    if (c1 < 0 || c1 > 10 || c2 < 0 || c2 > 10 || c3 < 0 || c3 > 10) {
        alert("Las calificaciones deben estar en un rango de 0 a 10.");
        return;
    }

    // B. Calcular el promedio
    let promedio = (c1 + c2 + c3) / 3;

    // C. Determinar el resultado (Aprobado / Reprobado)
    let estado = "";
    if (promedio >= 6) {
        estado = "APROBADO";
    } else {
        estado = "REPROBADO";
    }

    // D. Mostrar una observación según la tabla
    let observacion = "";
    if (promedio >= 9 && promedio <= 10) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8 && promedio < 9) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7 && promedio < 8) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6 && promedio < 7) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // 4. Presentar los resultados dentro de la página web
    document.getElementById('resNombre').textContent = "Estudiante: " + nombre;
    document.getElementById('resCalificaciones').textContent = "Calificaciones: " + c1 + ", " + c2 + ", " + c3;
    document.getElementById('resPromedio').textContent = "Promedio obtenido: " + promedio.toFixed(2);
    document.getElementById('resEstado').textContent = "Estado: " + estado;
    document.getElementById('resObservacion').textContent = "Observación: " + observacion;

    // Mostrar el contenedor de resultados visualmente
    document.getElementById('resultado').style.display = "block";
});
