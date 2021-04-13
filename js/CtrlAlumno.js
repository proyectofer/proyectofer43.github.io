<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width,
       initial-scale=1.0">
  <title>Alumno</title>
  <script
    src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js">
    </script>
  <script
    src="https://www.gstatic.com/firebasejs/8.2.3/firebase-auth.js">
    </script>
  <script
    src="https://www.gstatic.com/firebasejs/8.2.3/firebase-firestore.js">
    </script>
  <script src="js/init.js">
  </script>
  <script type="module"
    src="cmp/mi-nav.js">
    </script>
  <script type="module"
    src="cmp/mi-footer.js">
    </script>
  <link rel="stylesheet"
    href="css/estilos.css">
</head>
<body>
  <form name="forma">
    <mi-nav></mi-nav>
    <header>
      <h1>Alumno</h1>
      <div class="herramientas">
        <a href="alumnos.html">
          Cancelar</a>
        <button>Guardar</button>
        <button name="eliminar"
          type="button">
          Eliminar
        </button>
      </div>
    </header>
    <p>
      <label>
        Matricula
        <input name="matricula"
          type="text" required>
      </label>
    </p>
    <p>
      <label>
        Nombre
        <input name="nombre"
          type="text" required>
      </label>
    </p>
    <p>
      <label>
        Teléfono
        <input name="telefono"
          type="text" required>
      </label>
    </p>
    <p>
      <label>
        Grupo
        <input name="grupo"
          type="text" required>
      </label>
    </p>
    <p>
      <label>
        Fecha
        <input name="fecha" type="date" required>
      </label>
    </p>
    <mi-footer></mi-footer>
  </form>
  <script type="module"
    src="js/CtrlAlumno.js">
    </script>
</body>
</html>
