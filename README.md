# Curso-AWSLambdaAndServelessArchitecture
Repositorio de proyectos y conocimientos adquiridos en el curso de AWS de Udemy

## Información Importante obtenida del curso

###### Lanzamiento función Lambda via AWS CLI
1. Generar archivo zip con el código que desea asignar a la función lambda
2. Abrir la línea de comandos y ejecutar las siguientes instrucciones utilizando aws cli
```{r, engine='sh', count_lines}
aws s3 cp [zip-name.zip] s3://[bucket-name]/[zip-name.zip]
aws lambda update-function-code --function-name [funtion-name] --s3-bucket [bucket-name] --s3-key [zip-name.zip] --publish --region [region]
```
---
###### Limites de AWS Lambda
Información extraída de la documentación oficial de AWS
<https://docs.aws.amazon.com/lambda/latest/dg/limits.html>
**Asignación de memoria:** Desde 128MG hasta 3008MB, en incrementos de 64MG
**Almacenamiento Temporal en disco (/tmp):** 512MG
**Tiempo de espera:** 900 segundos o 15 minutos
**Cuerpo de invocación (body):** 6MG para invocaciones síncronas y 256KB para invocaciones asíncronas
**Tamaño del paquete de implementación:** 50MG Comprimido, 256MG descomprimido, 3MB en el editor en línea de AWS
**Máximo tamaño de funciones en una región:** 75GB
**Concurrencia:** 1000 Ejecuciones concurrentes por región que serán distribuidas para todas las funciones lambda contenidas en la misma. Se puede reservar una determinada concurrencia para una función lambda pero esto puede afectar a las demás funciones de la región, las cuales solo dispondrán de la concurrencias restante disponible.