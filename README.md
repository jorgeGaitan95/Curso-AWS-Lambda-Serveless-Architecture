# Curso-AWSLambdaAndServelessArchitecture
 Repositorio de proyectos y conocimientos adquiridos en el curso de AWS de Udemy

## Información Importante obtenida del curso

###### Lanzamiento Lambda via AWS CLI

1. Generar archivo zip con el codigo que desea asignar a la función lambda
2. Abrir la linea de comandos y ejecutar las siguientes instrucciones utilizando aws cli
```{r, engine='sh', count_lines}
 aws s3 cp [zip-name.zip] s3://[bucket-name]/[zip-name].zip
 aws lambda update-function-code --function-name [funtion-name] --s3-bucket [bucket-name] --s3-key [zip-name.zip] --publish --region [region]
```
