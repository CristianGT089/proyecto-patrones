# Call Center App

## Descripción

**Call Center App** es una aplicación diseñada para gestionar las operaciones de un centro de llamadas. Permite manejar agentes, clientes y llamadas de manera eficiente, proporcionando una solución integral para la administración de un call center.

## Funcionalidades

- Gestión de agentes: creación, edición y eliminación de agentes.
- Gestión de clientes: registro y actualización de información de clientes.
- Manejo de llamadas: asignación de llamadas a agentes disponibles.
- Reportes: generación de estadísticas sobre el rendimiento del call center.

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Base de datos compatible (por ejemplo, MySQL o MongoDB)

## Instalación

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/call-center-app.git
    cd call-center-app
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Configura las variables de entorno en un archivo `.env`:

    ```env
    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=call_center
    PORT=3000
    ```

4. Inicializa la base de datos (si es necesario):

    ```bash
    npm run db:init
    ```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

Para ejecutar en modo de producción:

```bash
npm start
```

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Añadir nueva funcionalidad"`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para cualquier consulta o sugerencia, puedes contactar al desarrollador:

- **Nombre:** [Cristian Stiven Guzman Tovar]
- **Correo:** [tu-email@ejemplo.com](mailto:cristiansgt089@gmail.com)
- **LinkedIn:** [linkedin.com/in/cristian-stiven-guzman-tovar-668655217/](https://www.linkedin.com/in/cristian-stiven-guzman-tovar-668655217/)

