<template>
  <main class="flex-1">
    <div class="w-full max-w-screen-lg mx-auto mb-5 overflow-x-auto px-4">
      <table
        class="w-full border-collapse shadow-lg text-base text-primary"
        cellpadding="0"
        cellspacing="0"
      >
        <thead>
          <tr class="bg-white">
            <th
              colspan="2"
              class="px-4 py-3 bg-primary/90 text-white font-bold uppercase text-center"
            >
              Recursos y Avisos
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Primera Fila -->
          <tr class="bg-white flex flex-col md:table-row">
            <td
              class="px-4 py-3 text-center flex-1 md:w-1/2 border-b border-gray-300"
            >
              <ResourceItem
                title="Protocolo de Violencia de Género"
                image="https://www.prepa1.uady.mx/imagenes/protocol31_p.png"
                link="https://uady.mx/protocolo-violencia-de-genero"
                alt="Protocolo de Violencia de Género"
                class="mt-2 text-sm text-gray-600 text-center"
              />
            </td>
            <td
              class="px-4 py-3 text-center flex-1 md:w-1/2 border-b border-gray-300"
            >
              <ResourceItem
                title="Ley General para el Control del Tabaco"
                image="https://www.prepa1.uady.mx/imagenes/ltabaco.png"
                link="http://www.prepa1.uady.mx/documentos/LGCT2022.pdf"
                alt="Ley General para el Control del Tabaco"
                imageWidth="50%"
                class="mt-2 text-sm text-gray-600 text-center"
              />
            </td>
          </tr>

          <!-- Segunda Fila -->
          <tr class="bg-white flex flex-col md:table-row">
            <td
              class="px-4 py-3 text-center flex-1 md:w-1/2 border-b border-gray-300"
            >
              <ResourceItem
                title="UADY Virtual EMS"
                image="https://www.prepa1.uady.mx/UADYEMS.jpg"
                link="http://ems.uadyvirtual.uady.mx/course/index.php?categoryid=3"
                alt="UADY Virtual EMS"
                class="mt-2 text-sm text-gray-600 text-center"
              />
            </td>
            <td
              class="px-4 py-3 text-center flex-1 md:w-1/2 border-b border-gray-300"
            >
              <ResourceItem
                title="Sistema Inalámbrico Universitario"
                image="https://www.prepa1.uady.mx/wifi_front.jpg"
                link="https://siu-prepa1.uady.mx:8090/"
                alt="Sistema Inalámbrico Universitario"
                class="mt-2 text-sm text-gray-600 text-center"
              />
            </td>
          </tr>

          <!-- Curso EXANI -->
          <tr
            class="bg-secondary text-white font-bold uppercase text-lg flex md:table-row"
          >
            <td colspan="2" class="text-center py-3">
              CURSO DE ENTRENAMIENTO PARA PRESENTAR EL EXANI I 2025
            </td>
          </tr>
          <tr class="bg-white flex flex-col md:table-row">
            <td colspan="2" class="text-center px-4 py-3">
              <a
                href="https://www.prepa1.uady.mx/pago/Formato_exani.php"
                rel="noopener noreferrer"
                class="hover:underline hover:text-secondary"
              >
                INSCRIPCIÓN AL CURSO
              </a>
            </td>
          </tr>
          <tr class="bg-white flex flex-col md:table-row">
            <td colspan="2" class="text-center px-4 py-3">
              <a
                href="https://www.prepa1.uady.mx/documentos/Curso_entrenamiento_2025.pdf"
                rel="noopener noreferrer"
                class="hover:underline hover:text-secondary"
              >
                CONVOCATORIA
              </a>
            </td>
          </tr>
          <tr class="bg-white flex flex-col md:table-row">
            <td colspan="2" class="text-center px-4 py-3">
              <a
                href="https://www.prepa1.uady.mx/documentos/Lineamientos_2025.pdf"
                rel="noopener noreferrer"
                class="hover:underline hover:text-secondary"
              >
                LINEAMIENTOS
              </a>
            </td>
          </tr>

          <!-- Programa PISEB -->
          <tr
            class="bg-secondary text-white font-bold uppercase text-lg flex md:table-row"
          >
            <td colspan="2" class="text-center py-3">
              Programa Institucional de Seguimiento de Egresados de Bachillerato
              (PISEB)
            </td>
          </tr>
          <tr class="bg-white flex flex-col md:table-row">
            <td
              class="px-4 py-3 text-center flex-1 md:w-1/2 border-b border-gray-300"
            >
              Si eres egresado del año 2022 de nuestra escuela, ¡Te invitamos a
              participar en la encuesta de Seguimiento de Egresados! <br />
              <a
                href="http://www.prepa1.uady.mx/documentos/PISEB_QR.png"
                rel="noopener noreferrer"
                class="hover:underline hover:text-secondary"
              >
                Código QR a la encuesta.
              </a>
            </td>
            <td
              class="px-4 py-3 text-center flex-1 md:w-1/2 border-b border-gray-300"
            >
              <ResourceItem
                title="PISEB"
                image="https://www.prepa1.uady.mx/imagenes/piseb.jpg"
                link="https://uady.mx/egresados/piseb"
                alt="PISEB"
              />
            </td>
          </tr>
          <!-- Normatividad -->
          <tr class="bg-secondary text-white font-bold uppercase text-lg">
            <td colspan="2" align="center">NORMATIVIDAD DE LA ESCUELA</td>
          </tr>
          <tr class="bg-white">
            <td colspan="2" align="center" class="px-4 py-3 text-center">
              <span class="Es_aviso">
                <a
                  href="documentos/colaborativo_2024.pdf"
                  rel="noopener noreferrer"
                  class="text-center hover:underline hover:text-secondary"
                >
                  Manual de trabajo colaborativo para tutores padres - madres
                </a>
              </span>
            </td>
          </tr>
          <tr class="bg-white">
            <td colspan="2" align="center" class="px-4 py-3 text-center">
              <span class="Es_aviso">
                <a
                  href="documentos/Estudiantes_2024.pdf"
                  rel="noopener noreferrer"
                  class="text-center hover:underline hover:text-secondary"
                >
                  Manual para estudiantes de nuevo ingreso
                </a>
              </span>
            </td>
          </tr>
          <tr class="bg-white">
            <td colspan="2" align="center" class="px-4 py-3 text-center">
              <span class="Es_aviso">
                <a
                  href="documentos/Maunal2do3ro2024.pdf"
                  rel="noopener noreferrer"
                  class="text-center hover:underline hover:text-secondary"
                >
                  Manual para estudiantes de 2do y 3er año
                </a>
              </span>
            </td>
          </tr>
          <tr class="bg-white">
            <td colspan="2" align="center" class="px-4 py-3 text-center">
              <span class="Es_aviso">
                <a
                  href="documentos/disposiciones2024.pdf"
                  rel="noopener noreferrer"
                  class="text-center hover:underline hover:text-secondary"
                >
                  Disposiciones generales para los alumnos
                </a>
              </span>
            </td>
          </tr>
          <tr class="bg-white">
            <td colspan="2" align="center" class="px-4 py-3 text-center">
              <span class="Es_aviso">
                <a
                  href="documentos/justif2024.pdf"
                  rel="noopener noreferrer"
                  class="text-center hover:underline hover:text-secondary"
                >
                  Disposiciones para la Justificación de Inasistencias
                </a>
              </span>
            </td>
          </tr>
          <tr class="bg-white">
            <td colspan="2" align="center" class="px-4 py-3 text-center">
              <span class="Es_aviso">
                <a
                  href="documentos/instalaciones2024.pdf"
                  rel="noopener noreferrer"
                  class="text-center hover:underline hover:text-secondary"
                >
                  Normas para el uso de las instalaciones y servicios
                </a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainContent',
  components: {
    ResourceItem: () => import('./ResourceItem.vue'),
  },
};
</script>

<style scoped>
.table-header {
  background-color: #f4f4f4;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.table-cell {
  padding: 15px;
}
.title-row {
  background-color: #f8f8f8;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
