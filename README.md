# Spectral Hackers Guild

**Spectral Hackers Guild** es un sitio web estático dedicado a la difusión de información sobre el club de hacking ético y ciberseguridad, así como a la publicación de recursos educativos y documentos relevantes.

Este sitio está alojado en **GitHub Pages** y utiliza tecnologías modernas como **Bootstrap** y **Tailwind CSS** para asegurar un diseño atractivo, responsivo y escalable.

## 1. Descripción General del Proyecto

El sitio tiene como objetivo proporcionar una plataforma para aprender sobre ciberseguridad, acceder a recursos de aprendizaje y descargar documentos relacionados con hacking ético.

### Tecnologías Utilizadas

- **GitHub Pages**: Para alojar el sitio web estático.
- **HTML5**: Estructura del contenido del sitio.
- **CSS**: Personalización de estilos con **Tailwind CSS** y **Bootstrap**.
- **Bootstrap 5.3**: Para crear un diseño responsivo.
- **Tailwind CSS**: Para estilos personalizados y optimización visual.
- **Formspree**: Para la gestión de formularios sin backend.

---

## 2. Estructura del Proyecto

### Estructura de Archivos y Directorios

El proyecto sigue la siguiente estructura de archivos y carpetas:

  ```
    / (Raíz del Repositorio)
    ├── index.html              # Página principal
    ├── learning.html           # Página de Aprendizaje
    ├── docs.html               # Página de PDFs
    ├── /Docs                   # Carpeta para los documentos PDF
    |   └── /file=
    |       └── /PDF
    │           ├── UNAM.pdf
    │           └── Infografia_UNAM.pdf
    |
    ├── styles.css              # Archivo CSS personalizado
    └── img                     # Carpeta para imágenes y favicon
        └── favicon.png         # Favicon del sitio
```

### Descripción de los Archivos

- **index.html**: Página principal del sitio con información general sobre el club.
- **learning.html**: Página de recursos educativos.
- **docs.html**: Página donde los usuarios pueden descargar documentos PDF.
- **styles.css**: Archivo CSS personalizado para ajustes de diseño.
- **/Docs/file=/PDF**: Carpeta que contiene los archivos PDF disponibles para descarga.
- **/img**: Carpeta para imágenes, incluyendo el favicon del sitio.

---

## 3. Páginas del Proyecto

### 3.1. Página Principal (`index.html`)

- **Objetivo**: Proporcionar información general sobre el club y sus proyectos.
- **Secciones Clave**:
  - **Navbar**: Barra de navegación con enlaces a las demás páginas.
  - **Hero Section**: Banner principal con el nombre del club y su lema.
  - **Proyectos y Retos**: Descripción de los proyectos en curso.
  - **Blog**: Resumen de artículos.
  - **Formulario de Contacto**: Gestionado por **Formspree** para enviar información sin backend.

### 3.2. Página de Aprendizaje (`learning.html`)

- **Objetivo**: Ofrecer tutoriales y recursos educativos sobre hacking ético y ciberseguridad.
- **Contenido**: Listado de guías y recursos para el aprendizaje, con enlaces a tutoriales.

### 3.3. Página de PDFs (`docs.html`)

- **Objetivo**: Permitir la descarga de documentos PDF.
- **Contenido**: Listado de archivos PDF con enlaces de descarga directa desde la carpeta `/Docs/file=/PDF`.

---

## 4. Estilos y Diseño

### 4.1. Colores Utilizados

- **Morado oscuro** (`#5A189A`): Color principal para los encabezados y botones.
- **Blanco** (`#FFFFFF`): Color de fondo.
- **Gris claro** (`#F3F4F6`): Para mejorar la legibilidad del texto.

### 4.2. Tipografía

- **Open Sans**: Fuente utilizada en todo el sitio.

### 4.3. Diseño Responsivo

- **Bootstrap** se utiliza para hacer que el sitio sea completamente adaptativo a diferentes pantallas.

### 4.4. Estilos Personalizados

- **Tailwind CSS** se utiliza para personalizar márgenes, paddings, colores y tipografía.

---

## 5. Configuración del Formulario sin Backend

### 5.1. Integración con Formspree

El formulario en `index.html` está gestionado a través de **Formspree** para recoger datos sin necesidad de backend.

- El formulario se configura con:
  ```html
  <form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
  ```
  
Formspree procesa el formulario y envía los datos al correo electrónico configurado.

---

## 6. Mantenimiento y Escalabilidad

- **Nuevas Páginas:** Para añadir nuevas páginas, crea un nuevo archivo HTML y enlázalo en el menú de navegación.
- **Documentos PDF:** Los nuevos documentos pueden añadirse a la carpeta `/Docs/file=/PDF`  y enlazarse desde la página `docs.html`.
