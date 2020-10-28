const descripcion = {
    demand: true,
    alias: 'd',
}

const completado = {
    alias: 'c',
    default: true,
}

const optAct = {
    descripcion: descripcion,
    completado: completado
}

const optCrear = {
    descripcion: descripcion
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', optAct)
    .command('crear', 'Crea un elemento por hacer', optCrear)
    .command('borrar', "Borrara una tarea de la lista", {
        descripcion: descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}