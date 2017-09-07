0. Levantar el server y el cliente
1. Responder: Que modelo de procesos tiene node-schedule
        Un modelo de planificación basado en tiempo, no en intervalos.
2. Hay dos o tres promises. Ninguna anda, pero una es innecesaria. Borrar la que no corresponde y usar adecuadamente la otra
3. En el modulo get.js hay que implementar una promise, ahora ta con continuaciones.
4. Implementar timeouts. si se cuelga que falle. bluebird, para implementar promises.
5. Catchear los errores. si la promise falla, que devuelva un mensaje de error.
6. Levantar con cluster. difícil. para aprovechar multicore.
7. Despues usar la implementacion promisfy. interfaz de bluebird para promisificar (?) una función que usa continuaciones.
