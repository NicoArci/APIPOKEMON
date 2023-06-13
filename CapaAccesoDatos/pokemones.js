const mongoose = require("mongoose"); //Eldocumento en total, es la capa de acceso de datos

mongoose.connect("mongodb://Nicolas:1234@127.0.0.1:27017/pokemon",{useNewUrlParser:true, useUnifiedTopology:true //metodo para poder realizar una conexion con mongo useNewUrlParser: poder realizar  nuevas cadenas de conexion, analiza la url del controlador,poder conectar de mongoose a mongo useUnifiedTopology:monitorisa la tecnologia del controlador del mongo                        
})
.then(() => console.log("conexion exitosa de bd"))
.catch(err => console.log("error al conectar bd", err));

const pokemonSchema = new mongoose.Schema( //define el esquema de los documentos que se van a almacenar en la coleccion 
    {
        nombre: String,
        tipo: String,
        nivel: Number,
    }
);

const pokemonModel = mongoose.model("pokemones", pokemonSchema); //se llama la coleccion y luego el esquema

const nuevoPokemon = new pokemonModel({ 
    nombre: "Charmander",
    tipo: "Fuego",
    nivel: 25

});

nuevoPokemon.save()
.then(() => console.log("se creo el pokemon"))
.catch(err => console.log("error crear al pokemon", err));

//Leer todos los registros 
pokemonModel.find()
.then(datos => console.log("Estos son todos los pokemones: ", datos))//Datos trae la informacion de la coleccion debido a que se guardan en el
.catch(err => console.log("Se produjo un error al mostrar los pokemones", err));

// mongoose.disconnect()

