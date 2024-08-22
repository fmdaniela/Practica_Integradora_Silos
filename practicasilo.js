// Defino los silos
const silos = {
    soja: {
        capacidadMaxima: 15000, // en toneladas
        stockActual: 0 // en toneladas
    },
    maiz: {
        capacidadMaxima: 10000, // en toneladas
        stockActual: 0 // en toneladas
    }
};

function ingresarCamion() {
    // Solicito al usuario el tipo de cereal
    const tipoCereal = prompt("Ingrese el tipo de cereal (soja o maiz):").toLowerCase(); // convierte todos los caracteres de una cadena de texto a minúsculas. Esto es útil cuando se quiere comparar cadenas de texto de manera insensible a mayúsculas y minúsculas.
    
    // Valido tipo de cereal ingresado
    if (tipoCereal !== 'soja' && tipoCereal !== 'maiz') {
        alert("Tipo de cereal no válido. Intente nuevamente.");
        return;
    }
    
    // Solicito el peso de la carga
    const pesoCarga = parseFloat(prompt("Ingrese el peso de la carga (en toneladas):"));
    
    // Valido peso de la carga
    if (isNaN(pesoCarga) || pesoCarga <= 0) {
        alert("Peso de la carga no es válido. Intente nuevamente.");
        return;
    }

    // Determino el silo correspondiente
    const silo = silos[tipoCereal];
    const espacioDisponible = silo.capacidadMaxima - silo.stockActual;

    // Verifico si hay suficiente espacio en el silo
    if (silo.stockActual + pesoCarga <= silo.capacidadMaxima) {
        // Actualizo el stock del silo
        silo.stockActual += pesoCarga;
        alert(`Camión ingresado. Nuevo stock de ${tipoCereal}: ${silo.stockActual} toneladas.`);
    } else {
        // Silo lleno, no se puede ingresar la carga
        alert(`No hay suficiente espacio en el silo de ${tipoCereal}. 
        Capacidad máxima: ${silo.capacidadMaxima} toneladas. 
        Stock actual: ${silo.stockActual} toneladas. 
        Espacio disponible: ${espacioDisponible} toneladas. 
        Carga no ingresada: ${pesoCarga} toneladas.`);
    }
}