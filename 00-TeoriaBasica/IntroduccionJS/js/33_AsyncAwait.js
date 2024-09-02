// Async / await

function descargaNuevosClientes() {
  return new Promise( resolve => {
    console.log("Descargando clientes... Espere...");

    setTimeout( () => {
      resolve("Los CLientes fueron Descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise( resolve => {
    console.log("Descargando Pedidos... Espere...");

    setTimeout( () => {
      resolve("Los Pedidos fueron Descargados");
    }, 3000);
  });
}

async function app() {
    try {
      // const clientes = await descargaNuevosClientes();
      // const pedidos = await descargarUltimosPedidos();
      // console.log(clientes);
      // console.log(pedidos);

      const resultado = await Promise.all([ descargaNuevosClientes(), descargarUltimosPedidos() ]);
      // console.log(resultado);  
      console.log(resultado[0]);  
      console.log(resultado[1]);  
    } catch (error) {
        console.log(error);        
    }
}
app();
