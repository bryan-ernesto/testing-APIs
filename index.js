const axios = require('axios');

const endpoints = [
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/compras/Get_Compras_OdcEstado',
        body: {
            int_id_odc_estado: 0,
            str_nombre: "",
            int_orden: 0,
            int_estado: 2
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/compras_presupuesto/GetPresupuestoEstado',
        body: {
            nombre:"",
            creado_por:0,
            actualizado_por:0,
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/recepciones_documento/Get_Documento_Delta',
        body: {
            str_empresa: "",
            str_cuenta_sugerida: ""
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/compras/Get_Compras_OdcEstado',
        body: {
            int_id_odc_estado: 0,
            str_nombre: "",
            int_orden: 0,
            int_estado: 2
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/compras/Get_Compras_Odc',
        body: {
            int_id_cat_empresa: 0,
            str_nombre_empresa: "",
            int_id_cat_usuario: 0,
            str_nombre_usuario: "",
            int_id_odc_estado: 0,
            str_nombre_odc_estado: "",
            str_nombre_proveedor: "",
            str_nit_proveedor: "",
            str_forma_pago: "",
            int_id_categoria: "",
            str_nombre_categoria: "",
            str_estado_presupuesto: "",
            str_tipo: "",
            int_id_moneda: 0,
            str_nombre_moneda: "",
            int_apro1_id_usuario: 0,
            str_apro1_nombre: "",
            int_apro2_id_usuario: 0,
            str_apro2_nombre: "",
            int_apro3_id_usuario: 0,
            str_apro3_nombre: "",
            int_apro4_id_usuario: 0,
            str_apro4_nombre: "",
            int_estado: 2
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/compras/Get_Compras_OdcProductoProveedor',
        body: {
            int_id_odc: 0,
            int_estado: 2
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/compras/Get_Compras_OdcEtapa',
        body: {
            int_id_cat_odc: 0,
            int_id_cat_odc_estado: 0,
            str_nombre_estado: "",
            int_estado: 2
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/compras/Get_Compras_OdcComentario',
        body: {
            int_id_cat_odc: 1,
            int_estado: 2
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/compras/Get_Compras_OdcAdjunto',
        body: {
            int_id_det_odc_adjunto: 0,
            int_id_cat_odc: 0,
            str_nombre: "",
            int_id_adjunto: 0,
            int_estado: 2
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/general/Get_Documento_Moneda',
        body: {
            str_simbolo: "",
            str_nombre: ""
        }
    },
    {
        method: 'POST',
        url: 'http://192.168.0.8:3000/api/general/Get_Documento_Pais',
        body: {
            str_nombre: ""
        }
    },
];

async function checkEndpoint(endpoint) {
    try {
        const response = await axios({
            method: endpoint.method,
            url: endpoint.url,
            data: endpoint.body
        });

        if (response.status === 200) {
            return { url: endpoint.url, status: 'OK' };
        } else {
            return { url: endpoint.url, status: 'Error', details: response.data };
        }
    } catch (error) {
        return { url: endpoint.url, status: 'Error', details: error.message };
    }
}

async function checkAllEndpoints() {
    const results = [];

    for (let endpoint of endpoints) {
        const result = await checkEndpoint(endpoint);
        results.push(result);
    }

    return results;
}

checkAllEndpoints().then(results => {
    for (let result of results) {
        if (result.status === 'OK') {
            console.log(`${result.url} está funcionando correctamente.`);
        } else {
            console.log(`${result.url} tiene un error: ${result.details}`);
        }
    }
});
