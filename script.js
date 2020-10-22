const app = Vue.createApp({
    data: ()=>({
        texto: "Pdp",
        nombre: "Esteban",
        productos: [
            {nombre: "Cerveza",cantidad: 10},
            {nombre: "Vino",cantidad: 2},
            {nombre: "Agua",cantidad: 28},
        ],
        productoNuevo: "", 
        total: 0,
    }),

    methods:{
        agregarProducto(){
            this.productos.push(
                {nombre: this.productoNuevo,cantidad: 0}
            )
            this.productoNuevo="";
        }
    },
    computed:{
        sumarCantidad(){
            this.total=0;
            for(productos of this.productos){
                this.total=this.total+productos.cantidad;
            }
            return this.total;
        },
        voltearTexto(){
            return this.productoNuevo.split("").reverse().join("")
        }
    }



})
const vm=app.mount('#app')

