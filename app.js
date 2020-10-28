const argv = require('./config/yargs').argv
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log("Tarea Creada");
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            if (!tarea.completado) {
                console.log('=======Por Hacer========='.red);
                console.log(tarea.descripcion);
                console.log(`Estaod: ${tarea.completado}`);
                console.log("=========================".red);
            } else {
                console.log('=======Completada========='.green);
                console.log(tarea.descripcion);
                console.log(`Estaod: ${tarea.completado}`);
                console.log("=========================".green);
            }
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;

    default:
        console.log("El comando no es reconocido");
}