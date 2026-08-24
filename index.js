console.log ("Comenzando Trabajo Práctico 01");
const nombre = process.argv[2] ?? "Estudiante";
const versionNode = process.version;
const plataforma = process.platform;

const videojuego = {
    titulo: "Tomb Raider",
    estudio: "Crystal Dynamics",
    anio: 2025,
    plataformas: ["PS5", "Xbox Series X"],
    multijugador: true
};
const plataformasComoTexto = videojuego.plataformas.join(", ");
const estadoMultijugador = videojuego.multijugador ? "Sí" : "No";
const ficha = `
FICHA DE VIDEOJUEGO
===================
Estudiante: ${nombre}
Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasComoTexto}
¿Es multijugador?: ${estadoMultijugador}
version Node:${versionNode};
plataforma: ${plataforma}

`;
console.log (ficha);

const path = require("node:path");
const fs = require("node:fs");

const carpetaSalida = path.join(__dirname, "salida");
fs.mkdirSync(carpetaSalida, { recursive: true });
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");
fs.writeFileSync (rutaArchivo,ficha,"utf8");



console.log(`archivo generado ${rutaArchivo}`);

