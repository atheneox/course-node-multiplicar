const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(`${ archivo }`)))
            .catch(e => console.log(e))
        break;

    default:
        console.log('comando no encontrado');
        break;
}

// let argv2 = process.argv;

// console.log('base', argv.base);
// console.log('limite', argv.limite);
// console.log(argv2);

// let params = argv[2];
// let base = params.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e))