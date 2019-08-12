# Curso-AWSLambdaAndServelessArchitecture
Repositorio de proyectos y conocimientos adquiridos en el curso de AWS de Udemy

## Información Importante obtenida del curso

#### Lanzamiento función Lambda via AWS CLI
1. Generar archivo zip con el código que desea asignar a la función lambda
2. Abrir la línea de comandos y ejecutar las siguientes instrucciones utilizando aws cli
```{r, engine='sh', count_lines}
aws s3 cp [zip-name.zip] s3://[bucket-name]/[zip-name.zip]
aws lambda update-function-code --function-name [funtion-name] --s3-bucket [bucket-name] --s3-key [zip-name.zip] --publish --region [region]
```
#### Limites de AWS Lambda
Información extraída de la documentación oficial de AWS [Limites Aws Lambda](<https://docs.aws.amazon.com/lambda/latest/dg/limits.html>)

   **Asignación de memoria:** Desde 128MG hasta 3008MB, en incrementos de 64MG  
   **Almacenamiento Temporal en disco (/tmp):** 512MG  
   **Tiempo de espera:** 900 segundos o 15 minutos  
   **Cuerpo de invocación (body):** 6MG para invocaciones síncronas y 256KB para invocaciones asíncronas  
   **Tamaño del paquete de implementación:** 50MG Comprimido, 256MG descomprimido, 3MB en el editor en línea de AWS  
   **Máximo tamaño de funciones en una región:** 75GB  
   **Concurrencia:** 1000 Ejecuciones concurrentes por región que serán distribuidas para todas las funciones lambda contenidas en la misma. Se puede reservar una determinada concurrencia para una función lambda pero esto puede afectar a las demás funciones de la región, las cuales solo dispondrán de la concurrencias restante disponible.  

#### Limites de AWS Lambda
Información extraída de la documentación oficial de AWS [Costos Aws Lambda](<https://aws.amazon.com/lambda/pricing/>)
    
   Lambda dispone de un modelo sencillo de precios basándose en la facturación por tiempo y recursos consumidos en la ejecución de la función.  
   Lambda cobra por el numero de peticiones y el tiempo de computo in GB * Segundos

   **La Capa gratuita de Lambda** ofrece 1'000,000 peticiones/mes y 400,000 GB-Segundo/mes. Despues de superar este rango lambda factura $0,2 USD por millón de peticiones y $0,00001667 USD por GB-Segundo. El valor total es la suma de las peticiones realizadas y el consumo obtenido por todas las funciones lambda de la cuenta.

   ###### Ejemplo:  
   Vamos a suponer que solo tenemos dos funciones lambda en nuestra cuenta para hacer el ejemplo mas practico y entendible:  

   **Función 1** Con 128MB de memoria, en el mes logra 2'000,000 de peticiones y un tiempo de ejecución de 200ms en cada petición  
   **Función 1** Con 512MB de memoria, en el mes logra 3'000,000 de peticiones y un tiempo de ejecución de 300ms en cada petición  

   _Numero total de peticiones facturables_ = 2'000,000 + 3'000.000 - 1'000.000(free) = 4'000.000  
   **_Cargos por peticiones_** = 4'000,000 * $0,2 = $0,8 USD  

   _Segundos computados Función 1_ = 2 Millones * 0.2 segundos = 0.4 Millones de segundos  
   _Segundos computados Función 2_ = 3 Millones * 0.3 segundos = 0.9 Millones de segundos  
   _GB-Segundos para la Función 1_ = (128/1024) GB * 0,4 Millones de segundos =  50,000 GB-Segundos  
   _GB-Segundos para la Función 2_ = (512/1024) GB * 0,9 Millones de segundos = 450,000 GB-Segundos  
   _Recursos computacionales usados_ = 50,000 + 450,000 - 400,000(free) = 100,000 GB-Segundos  
   **_Cargos por recursos usados_** = 100,000 * $0,00001667 = $1,67 USD  

   **_Total Facturado lambda_**= $0,8 + 1,67 = 2,47 USD
   