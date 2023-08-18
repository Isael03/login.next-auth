import  {Schema, model, models} from 'mongoose'


const  userSchema = new Schema({ 
    email: {
        type: String,
        unique:true,
        required:[true, "El email es requerido"],
        match:[/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,  "El email no es válido"]
    },
    password: {
        type:String,
        required:[true, "La contraseña es requerida"],
        select:false

    },
    fullname:{
        type:String,
        require:[true, "Nombre es requerido"],
        minLength:[3, "Debe contener mínimo 3 caracteres"],
        maxLength:[50, "Máximo son 50 caracteres"]
    }
})


 const User = models.User ||  model("User", userSchema)

 export default User