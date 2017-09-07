##TP resuelto: Próximo Bus

En este TP se detectaron y corrigieron las fallas tanto arquitecturales como de implementación, para ello podía optarse por usar tanto cps como promises.

## Descripción del dominio

Se tiene un sistema que permite a los usuarios conocer el estado de líneas de colectivos, si están funcionando y cuándo llega el práximo colectivo a una estación.

Los clientes son en sí nodos que sólo tienen acceso a estas dos llamadas, y que solamente harán esta consulta al servidor que deberá devolver el resultado.

Con respecto al servicio, éste está provisto por un servidor que hace petición a las consultas, y sobre éste es usuario de un servicio externo que posee el estado y la información actual de los colectivos.

El servicio tiene este comportamiento:

- Cada 55 segundos se actualizan el estado de las líneas.
- Cada 30 segundos se actualiza el estado de cuándo llegan los colectivos a destino.
- Cuando se hace la solicitud del servidor que da respuesta a los clientes, el tiempo de respuesta puede ser de hasta 5 segundos.

Los dos servidores que brindan el servicio a los usuarios están conectados a un supervisor, con el que mantienen un canal para comunicar que ambos servidores están conectados y vivos.


Se pide:
- Detectar errores de espera, o de funcionamiento no esperado
- Mejorar el código en algunos lados del servidor
- Ver si la arquitectura es la adecuada, qué sucede si se cae un servidor.
- Si se opta por usar el supervisor, ver que se use adecuadamente.
