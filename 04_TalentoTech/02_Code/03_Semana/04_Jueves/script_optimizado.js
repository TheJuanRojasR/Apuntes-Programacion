'use strict'

/* 
Le pase el codigo a ChatGPT para poderlo optimizar.
Tiene un error porque se pierden los estilos de los botones guardar y eliminar.
*/

const CREATE_BUTTON = document.getElementById('create_button');
const DATA_TABLE = document.getElementById('data_table');

// Centralizar el manejo de localStorage en una función
function getEmployeeList() {
    return JSON.parse(localStorage.getItem('listaIngresados')) || [];
}

function setEmployeeList(employeeList) {
    localStorage.setItem('listaIngresados', JSON.stringify(employeeList));
}

// Obtener la geolocalización con promesas
function obtenerLocalizacion() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
                (error) => reject(new Error(`Error al obtener la ubicación: ${error.message}`))
            );
        } else {
            reject(new Error("Geolocalización no soportada"));
        }
    });
}

// Validar la información del formulario
function validarInformacionForm(formData) {
    for (let [key, value] of formData.entries()) {
        if (!value.trim()) {
            alert(`${key} es requerido.`);
            return false;
        }
        if (key === 'rolEmployee' && value === "") {
            alert('Debe seleccionar un rol.');
            return false;
        }
    }
    return true;
}

// Crear el objeto empleado
function crearObjetoEmpleado(formData, location, date) {
    const employeeList = getEmployeeList();
    return {
        id: employeeList.length > 0 ? employeeList[employeeList.length - 1].id + 1 : 1,
        nameEmployee: formData.get('nameEmployee'),
        rolEmployee: formData.get('rolEmployee'),
        timeEmployee: date.toLocaleString(),
        locationEmployee: `Lat: ${location.latitude}, Long: ${location.longitude}`
    };
}

// Función para ingresar datos al localStorage
function crearIngreso() {
    const REGISTER_FROM = document.getElementById('register_form');
    const formData = new FormData(REGISTER_FROM);
    const date = new Date();

    if (!validarInformacionForm(formData)) return;

    obtenerLocalizacion()
        .then(location => {
            const newEmployee = crearObjetoEmpleado(formData, location, date);
            const employeeList = getEmployeeList();
            employeeList.push(newEmployee);
            setEmployeeList(employeeList);
            alert('Empleado registrado correctamente');
            agregarEmpleadoTabla(newEmployee);
        })
        .catch(error => {
            console.error('Error al obtener la ubicación:', error);
        });
}

// Mostrar empleados existentes al cargar la página
function mostrarEmpleados() {
    const employeeList = getEmployeeList();
    if (employeeList.length === 0) {
        console.info('No hay datos en el localStorage.');
        return;
    }
    employeeList.forEach(agregarEmpleadoTabla);
}

// Crear fila de empleado
function agregarEmpleadoTabla(employee) {
    const row = document.createElement('tr');
    row.appendChild(crearCelda(employee.nameEmployee));
    row.appendChild(crearCelda(employee.rolEmployee));
    row.appendChild(crearCelda(employee.timeEmployee));
    row.appendChild(crearCelda(employee.locationEmployee));

    row.appendChild(crearBoton('Actualizar', () => actualizarEmpleado(employee.id)));
    row.appendChild(crearBoton('Eliminar', () => eliminarEmpleado(employee.id)));

    DATA_TABLE.appendChild(row);
}

// Crear celda de la tabla
function crearCelda(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

// Crear botón con evento
function crearBoton(text, onClick) {
    const cell = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    cell.appendChild(button);
    return cell;
}

// Actualizar empleado
function actualizarEmpleado(id) {
    const employeeList = getEmployeeList();
    const employee = employeeList.find(emp => emp.id === id);
    if (!employee) return;

    const row = [...DATA_TABLE.getElementsByTagName('tr')].find(
        tr => tr.children[0].textContent === employee.nameEmployee
    );

    if (row) {
        const nameInput = crearInput('text', employee.nameEmployee);
        const rolSelect = crearSelectRol(employee.rolEmployee);

        row.children[0].innerHTML = '';
        row.children[0].appendChild(nameInput);

        row.children[1].innerHTML = '';
        row.children[1].appendChild(rolSelect);

        row.children[2].textContent = employee.timeEmployee;
        row.children[3].textContent = employee.locationEmployee;

        const saveButton = crearBoton('Guardar', () => guardarCambios(employee, nameInput.value, rolSelect.value));
        row.children[4].innerHTML = '';
        row.children[4].appendChild(saveButton);
    }
}

// Crear input de texto
function crearInput(type, value) {
    const input = document.createElement('input');
    input.type = type;
    input.value = value;
    return input;
}

// Crear select de roles
function crearSelectRol(selectedRol) {
    const rolSelect = document.createElement('select');
    const roles = ['Doctor', 'Enfermera', 'Administrativo'];

    roles.forEach(role => {
        const option = document.createElement('option');
        option.value = role;
        option.textContent = role;
        if (selectedRol === role) {
            option.selected = true;
        }
        rolSelect.appendChild(option);
    });
    return rolSelect;
}

// Guardar cambios de un empleado actualizado
function guardarCambios(employee, newName, newRol) {
    employee.nameEmployee = newName;
    employee.rolEmployee = newRol;
    const employeeList = getEmployeeList();
    setEmployeeList(employeeList);
    location.reload();
}

// Eliminar empleado
function eliminarEmpleado(id) {
    let employeeList = getEmployeeList();
    employeeList = employeeList.filter(emp => emp.id !== id);
    setEmployeeList(employeeList);
    location.reload();
}

// Mostrar empleados al cargar la página
mostrarEmpleados();

// Evento de clic para crear el ingreso
CREATE_BUTTON.addEventListener('click', crearIngreso);
