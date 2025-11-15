PelículasApp 

Aplicación móvil hecha con Ionic + Angular que permite ver películas recientes, populares, buscarlas, ver sus detalles y marcarlas como favoritas, consumiendo la API de TheMovieDB y almacenando datos en el storage local.

 Descripción General
PelículasApp es una app móvil estilo catálogo de películas que incluye:
- Listado de películas recientes, populares y en cartelera.
- Sistema de búsqueda con spinner y resultados instantáneos.
- Vista de detalle con información completa, calificación, géneros y cast.
- Sistema de favoritos persistidos localmente.
- Agrupación de favoritos por género.
- Despliegue como PWA usando Firebase Hosting.

 Tecnologías y Dependencias Utilizadas
 Frontend
- Ionic Framework 6
- Angular
- Typescript
- Ionic Storage

 Backend / API
- TheMovieDB API (TMDB)
Se usan endpoints para:
•	Películas recientes
•	Populares
•	Detalles
•	Cast
•	Búsqueda


 Pipes personalizados
•	imagen – Construye URL de imagen y aplica placeholder.
•	filtroImagen – Filtra películas sin imagen.
•	pares – Agrupa en pares para slides de 2 columnas.

 Servicios
•	MoviesService – Maneja las peticiones HTTP y paginación.
•	DataLocalService – Maneja favoritos en el storage local + toasts.

Estructura de la app
├───app
│   ├───components
│   │   ├───detalle
│   │   ├───slideshow-backdrop
│   │   ├───slideshow-pares
│   │   └───slideshow-poster
│   ├───explore-container
│   ├───interfaces
│   ├───pipes
│   ├───services
│   ├───tab1
│   ├───tab2
│   ├───tab3
│   └───tabs
├───assets
│   └───icon
├───environments
└───theme
 Instalación y Ejecución Local
1. Clonar el repositorio:
   git clone https://github.com/KiBouToujou/peliculasApp.git
2. Instalar dependencias:
   npm install
3. Configurar API Key en environment.ts
	export const environment = {
  production: false,
  url: 'https://api.themoviedb.org/3',
  apiKey: 'TU_API_KEY',
  imgPath: 'https://image.tmdb.org/t/p'
};

4. Ejecutar:
   ionic serve
5. Build de producción:
   ionic build

 Publicación como PWA
1. ionic build
2. npm install -g firebase-tools
3. firebase init hosting
4. firebase deploy

 Créditos
Proyecto desarrollado por:
Morales Paz Antonio Everardo
Materia: Diseño de Aplicaciones Móviles
Profesor: Méndez Sánchez Luis Yael
Periodo: Otoño 2025
