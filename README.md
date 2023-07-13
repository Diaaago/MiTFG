# README



### Dado que la aplicación web en este proyecto es solo un proyecto local y aún no se puede acceder a través de una URL pública, para que sus funciones sean examinadas, es necesario desplegarla localmente. A continuación se presentan los pasos para el despliegue:



### Paso 1: Descargar las aplicaciones necesarias

Antes del despliegue, es necesario asegurar que los siguientes programas estén instalados:

|                     Nombre de aplicación                     |     Versión     |
| :----------------------------------------------------------: | :-------------: |
| [Visual Studio Code](https://code.visualstudio.com/download) |     1.80.0      |
|      [Node.js](https://nodejs.org/es/download/releases)      | 16.5.1(16.20.1) |
| [MongoDB](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.8-signed.msi) |  6.0.4(6.0.8)   |
| [MongoDB Compass](https://www.mongodb.com/products/compass)  |     1.35.0      |





### Paso 2: Descargar el proyecto

​																												**Code -> Download ZIP**

![image-20230713181525694](https://github.com/Diaaago/img/blob/main/image-20230713181525694.png)





### Paso 3: Importar los datos al MongoDB

Dentro de la carpeta descomprimida, "datos_1" y "datos_2" contienen cuatro ficheros de tipo JSON en total, que coinciden las  cuatro colecciones de la base de datos. 



**Conectar al base de datos en MongoDB Compass**

![image-20230713182554459](https://github.com/Diaaago/img/blob/main/image-20230713182554459.png)



**Crear una base de datos denominada "openFood"**

![image-20230713220241140](https://github.com/Diaaago/img/blob/main/image-20230713220241140.png)



**Crear las cuatro colecciones con mismo nombre de su fichero **

![image-20230713220415391](https://github.com/Diaaago/img/blob/main/image-20230713220415391.png)



**Importar los datos correspondientes de JSON**

![image-20230713220834245](https://github.com/Diaaago/img/blob/main/image-20230713220834245.png)



**Una vez finalizada la importación, la vista de openFood debería tener el siguiente aspecto:**

![image-20230713221548008](https://github.com/Diaaago/img/blob/main/image-20230713221548008.png)





### Paso 4: Importar el proyecto y instalar las dependencias

**Importar el proyecto en el Visual Studio Code**

![image-20230713222650220](https://github.com/Diaaago/img/blob/main/image-20230713222650220.png)





**Crear dos terminales, uno para backend y otro para frontend**

Usando siguientes comandos:

```shell
cd backend
```

```shell
cd frontend
```

![image-20230713224722106](https://github.com/Diaaago/img/blob/main/image-20230713224722106.png)



**Instalar las dependencias**

Usando el siguiente comando:

```shell
npm install
```

O el siguiente

```shell
npm install -force
```

![image-20230713224644186](https://github.com/Diaaago/img/blob/main/image-20230713224644186.png)





### Paso 5: Arrancar el proyecto

**Introducir los comandos correspondientes**

En backend:

```shell
npx nodemon src/index.js
```

En frontend:

```shell
npm start
```

![image-20230713224448944](https://github.com/Diaaago/img/blob/main/image-20230713224448944.png)



**Después de unos segundos, se aparecerá la página inicial**

![image-20230713225047346](https://github.com/Diaaago/img/blob/main/image-20230713225047346.png)
