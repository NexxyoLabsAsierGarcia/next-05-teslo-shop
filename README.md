## Next.js Teslo Shop App
Para lanzar la app en local, se necesita la base de datos.
```
docker-compose up -d
```

* El -d significa __detached__


## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

* MongoDB URL Local:
```
mongodb://localhost:27017/teslodb
```

*Reconstruir los módulos d node y levantar Next
```
npm install
npm run dev
```


## Llenar la base de datos con información de pruebas
Llamar a:
```
http://localhost:3000/api/seed
```