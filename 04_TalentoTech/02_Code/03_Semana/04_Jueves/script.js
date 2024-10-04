'use strict'

const CREATE_BUTTON = document.getElementById('create_button');
const DATA_TABLE = document.getElementById('data_table');

// Obtener la geolocalización con promesas
function obtenerLocalizacion () {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    console.error(`Error al obtener la ubicación: ${error.message}`);
                    reject(error);
                }
            );
        } else {
            console.log("Geolocalización no es soportada por este navegador.");
            reject(new Error("Geolocalización no soportada"));
        }
    });
}

// Funcion para ingresar datos al localStorage
function crearIngreso () {
    const REGISTER_FROM = document.getElementById('register_form');
    const formData = new FormData(REGISTER_FROM);
    const date = new Date();
    let employeeList = JSON.parse(localStorage.getItem('listaIngresados')) || [];

    // Validar información del formulario
    const isValidInformation = validarInformacionForm(formData);
    if (!isValidInformation) {
        console.log('La información del formulario no es válida.');
        return;
    }

    // Obtener la localización con promesas
    obtenerLocalizacion ()
        .then((location) => {
            const employeeObject = {
                id: employeeList.length > 0 ? employeeList[employeeList.length - 1].id + 1 : 1, // Incremental ID
                nameEmployee: formData.get('nameEmployee'),
                rolEmployee: formData.get('rolEmployee'),
                timeEmployee: date.toLocaleString(),
                locationEmployee: `Lat: ${location.latitude}, Long: ${location.longitude}`
            };

            // Guardar el objeto en localStorage
            employeeList.push(employeeObject);
            localStorage.setItem('listaIngresados', JSON.stringify(employeeList));
            alert("Empleado registrado correctamente:", employeeObject);
            agregarEmpleadoTabla(employeeObject);
        })
        .catch((error) => {
            console.log('Error al obtener la ubicación:', error);
        });
}

// Función para validar la información del formulario
function validarInformacionForm ( data ) {
    let isValid = true;

    for (let [key, value] of data.entries()) {
        // Validar que los campos no estén vacíos
        if (!value.trim()) {
            console.error(`${key} es requerido.`);
            isValid = false;
        }

        // Validar que se haya seleccionado un rol
        if (key === 'rolEmployee' && value === "") {
            console.error(`Tiene que escoger una opción.`);
            isValid = false;
        }
    }
    return isValid;
}

function mostrarEmpleado () {
    const employeeList = JSON.parse(localStorage.getItem('listaIngresados'));

    if (!employeeList || employeeList.length === 0) {
        console.info('No hay datos en el localStorage.');
        return;
    }

    employeeList.forEach(employee => {
        agregarEmpleadoTabla(employee);
    });
}

function agregarEmpleadoTabla ( employee ) {
    const row = document.createElement('tr');

    function crearCelda (text) {
        const cell = document.createElement('td');
        cell.textContent = text;
        return cell;
    };

    row.appendChild(crearCelda(employee.nameEmployee));
    row.appendChild(crearCelda(employee.rolEmployee));
    row.appendChild(crearCelda(employee.timeEmployee));
    row.appendChild(crearCelda(employee.locationEmployee));

    // Crear celda para el botón de actualizar
    const updateCell = document.createElement('td');
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Actualizar';
    updateButton.className = 'button--edit';
    updateButton.addEventListener('click', () => actualizarEmpleado(employee.id));
    updateCell.appendChild(updateButton); // Añadir el botón a la celda
    row.appendChild(updateCell); // Añadir la celda con el botón a la fila

    // Crear celda para el botón de eliminar
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'button--delete';
    deleteButton.addEventListener('click', () => eliminarEmpleado(employee.id));
    deleteCell.appendChild(deleteButton); // Añadir el botón a la celda
    row.appendChild(deleteCell); // Añadir la celda con el botón a la fila
    
    DATA_TABLE.appendChild(row);
}

function actualizarEmpleado ( id ) {
    const employeeList = JSON.parse(localStorage.getItem('listaIngresados'));
    const employee = employeeList.find(emp => emp.id === id); // Buscar el empleado por ID

    if (employee) {
        const row = [...DATA_TABLE.getElementsByTagName('tr')].find(
            tr => tr.children[0].textContent === employee.nameEmployee
        );

        if (row) {
            // Crear input para editar el nombre
            const nameInput = document.createElement('input');
            nameInput.className = 'register__input';
            nameInput.value = employee.nameEmployee;

            // Crear el select con las opciones de rol
            const rolInput = document.createElement('select');
            rolInput.id = 'rol_select';
            rolInput.className = 'register__select';
            rolInput.name = 'rolEmployee';
            rolInput.required = true;

            // Opciones del select
            const roles = [
                { value: 'Doctor', text: 'Doctor' },
                { value: 'Enfermera', text: 'Enfermera' },
                { value: 'Administrativo', text: 'Administrativo' }
            ];

            roles.forEach(role => {
                const option = document.createElement('option');
                option.value = role.value;
                option.textContent = role.text;
                // Marcar como seleccionado el rol actual del empleado
                if (employee.rolEmployee === role.value) {
                    option.selected = true;
                }
                rolInput.appendChild(option);
            });

            // Reemplazar las celdas de nombre y rol con los inputs
            row.children[0].innerHTML = '';
            row.children[0].appendChild(nameInput);

            row.children[1].innerHTML = '';
            row.children[1].appendChild(rolInput);

            // Mantener la hora y la ubicación sin edición
            row.children[2].textContent = employee.timeEmployee;
            row.children[3].textContent = employee.locationEmployee;

            // Cambiar el botón de actualizar por un botón de guardar
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Guardar';
            saveButton.className = 'button--save';
            row.children[4].innerHTML = '';
            row.children[4].appendChild(saveButton);

            // Agregar el evento para guardar los cambios
            saveButton.addEventListener('click', () => {
                // Actualizar los valores en el objeto empleado
                employee.nameEmployee = nameInput.value;
                employee.rolEmployee = rolInput.value;

                // Actualizar el localStorage
                localStorage.setItem('listaIngresados', JSON.stringify(employeeList));

                // Recargar la página o actualizar la tabla visualmente
                location.reload();
            });
        }
    }
}


function eliminarEmpleado ( id ) {
    let employeeList = JSON.parse(localStorage.getItem('listaIngresados')) || [];
    employeeList = employeeList.filter(employee => employee.id !== id); // Filtrar el empleado por ID
    localStorage.setItem('listaIngresados', JSON.stringify(employeeList));
    location.reload(); // Recargar la página para actualizar la tabla
}

mostrarEmpleado()
// Evento de clic para crear el ingreso
CREATE_BUTTON.addEventListener('click', crearIngreso);
