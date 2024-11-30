<template>
  <aside
    class="bg-white h-screen border-r border-gray-300 text-sm transition-transform transform sm:translate-x-0"
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Sidebar content -->
    <nav class="p-4 space-y-4">
      <!-- Elementos de navegación -->
      <div>
        <SidebarItem title="Inicio" link="#" />
      </div>
      <div>
        <SidebarDropdown title="Plan de estudios">
          <SidebarSubItem title="MEFI 2016" link="#" />
          <SidebarSubItem title="MEFI 2024" link="#" />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarDropdown title="Modelo Educativo">
          <SidebarSubItem
            title="Documento descriptivo"
            link="https://correouady-my.sharepoint.com/:b:/g/personal/prepa1_correo_uady_mx/EeynrYk5UIlLlVky_FCUZDIBNLZAxiULQ4JlIZ8QiUCQ7A?e=BrsQui"
          />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarDropdown title="Organigrama">
          <SidebarSubItem title="Secretaría Académica" link="#" />
          <SidebarSubItem title="Secretaría Administrativa" link="#" />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarItem
          title="Código de Ética y Conducta"
          link="https://www.prepa1.uady.mx/documentos/Eticayconducta.pdf"
        />
      </div>
      <div>
        <SidebarItem
          title="Unidad de Transparencia"
          link="https://www.transparencia.uady.mx/"
        />
      </div>
      <div>
        <SidebarItem
          title="Directorio Telefónico"
          link="https://www.prepa1.uady.mx/directorio1.php"
        />
      </div>
      <div>
        <SidebarDropdown title="Avisos de privacidad">
          <SidebarSubItem
            title="Estudiantes"
            link="https://www.prepa1.uady.mx/documentos/ap_alumnos.pdf"
          />
          <SidebarSubItem
            title="Personal"
            link="https://www.prepa1.uady.mx/documentos/ap_personal.pdf"
          />
          <SidebarSubItem
            title="Clases en línea"
            link="https://www.prepa1.uady.mx/documentos/Aviso_privacidad_vc.pdf"
          />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarDropdown title="Trámites">
          <SidebarSubItem
            title="Control Escolar"
            link="https://www.prepa1.uady.mx/controlesc.php"
          />
          <SidebarSubItem
            title="Tecnologías de Información"
            link="https://www.prepa1.uady.mx/ti.php"
          />
          <SidebarSubItem
            title="Departamento de Caja"
            link="https://www.prepa1.uady.mx/DeptoCaja.php"
          />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarDropdown title="Manuales">
          <SidebarSubItem
            title="Restablecer contraseñas (INET y correo institucional)"
            link="https://www.prepa1.uady.mx/documentos/restablecimiento_contrasenas.pdf"
          />
          <SidebarSubItem
            title="Establecer correo alternativo"
            link="https://www.prepa1.uady.mx/documentos/correo_alternativo.pdf"
          />
          <SidebarSubItem
            title="Acceso a la plataforma UADY VIRUAL"
            link="https://www.prepa1.uady.mx/documentos/plataforma_ems.pdf"
          />
          <SidebarSubItem
            title="Configuración de archivos CSV"
            link="https://www.prepa1.uady.mx/documentos/configuracion_csv.pdf"
          />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarDropdown title="Prácticas de laboratorio">
          <SidebarSubItem
            title="Archeas, Bacterias, Protistas y Hongos"
            link="https://www.prepa1.uady.mx/pizarra/archeas.pdf"
          />
          <SidebarSubItem
            title="Los Seres Vivos y su Diversidad"
            link="https://www.prepa1.uady.mx/pizarra/seresvi.pdf"
          />
        </SidebarDropdown>
      </div>
      <!-- Menú desplegable: Calificaciones -->
      <div>
        <SidebarDropdown title="Calificaciones">
          <SidebarSubItem
            title="Alumnos"
            link="https://www.prepa1.uady.mx/alumnos/login.php"
          />
          <SidebarSubItem
            title="Maestros"
            link="https://www.prepa1.uady.mx/maestros/log_inet.php"
          />
          <SidebarSubItem
            title="Administrativos"
            link="https://www.prepa1.uady.mx/maestros/log_inet.php"
          />
        </SidebarDropdown>
      </div>

      <!-- Menú desplegable: Correo -->
      <div>
        <SidebarDropdown title="Correo">
          <SidebarSubItem
            title="alumnos.uady.mx"
            link="http://www.alumnos.uady.mx/"
          />
          <SidebarSubItem
            title="correo.uady.mx"
            link="http://www.correo.uady.mx/"
          />
        </SidebarDropdown>
      </div>

      <!-- Elemento de menú: UADY Virtual EMS -->
      <div>
        <SidebarItem
          title="UADY Virtual EMS"
          link="http://ems.uadyvirtual.uady.mx/course/index.php?categoryid=3"
        />
      </div>

      <!-- Menú desplegable: Sistema de Atención -->
      <div>
        <SidebarDropdown title="Sistema de Atención">
          <SidebarSubItem
            title="Administrar"
            link="http://www.srs.uady.mx/srs/index.php"
          />
          <SidebarSubItem
            title="Ingresar solicitud"
            link="http://www.srs.uady.mx/sistemas/prepa1/"
          />
        </SidebarDropdown>
      </div>
    </nav>
  </aside>
  <!-- Botón para abrir/cerrar el sidebar -->
  <button
    @click="toggleSidebar"
    class="fixed bottom-4 left-4 z-50 block sm:hidden bg-primary text-white p-2 rounded-full shadow-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
</template>

<script>
import SidebarItem from './Sidebars/SidebarItem.vue';
import SidebarDropdown from './Sidebars/SidebarDropdown.vue';
import SidebarSubItem from './Sidebars/SidebarSubItem.vue';

export default {
  components: {
    SidebarItem,
    SidebarDropdown,
    SidebarSubItem,
  },
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>
