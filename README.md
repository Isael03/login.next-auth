# Proyecto prueba de Next Auth

## Getting Started

1. Clonar repositorio

2. Instalar dependencias
```
yarn install 
``` 
3. Desplegar y ejecutar base de datos (MongoDB)
```
docker-compose up -d
```

4. Clonar el archivo ```.env.example``` y renombrar la copia a ```.env``` 
   
5. Llenar las varaibles de entorno definidos en el ```.env``` 

6. Ejecutar proyecto en modo desarrollo
```
yarn dev
```

## Requisitos
* Node version >= 18.15.0
* Docker

## Uso

1. Registrar previamente un usuario en la base de datos, por medio de:
```
http://localhost:3000/register
```

2. Para cerrar sesión
```
http://localhost:3000/api/auth/signout
```
