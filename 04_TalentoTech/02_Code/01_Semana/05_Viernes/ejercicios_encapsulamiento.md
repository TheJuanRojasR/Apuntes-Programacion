1. Ejercicio 1: Control de acceso a una propiedad protegida
Crea una clase BankAccount con las siguientes características:

Una propiedad protegida llamada _balance (balance).
Un método público deposit(amount) que permita agregar fondos a la cuenta.
Un método público withdraw(amount) que permita retirar dinero de la cuenta solo si el balance es suficiente.
Un getter balance para obtener el balance actual de la cuenta sin modificarlo directamente.

2. Ejercicio 2: Uso de getters y setters con validación
Crea una clase Product con:

Una propiedad privada _price que almacene el precio del producto.
Un getter y un setter para la propiedad price. El setter debe asegurarse de que el precio nunca sea negativo.
Un getter y setter para la propiedad name, validando que el nombre no esté vacío.

Ejercicio 3: Control de acceso con propiedades protegidas
Crea una clase Car con las siguientes características:

Una propiedad protegida _speed que representa la velocidad actual del coche.
Métodos accelerate(amount) y brake(amount) que aumenten o disminuyan la velocidad del coche.
Un getter speed que permita consultar la velocidad sin modificarla.
Asegúrate de que la velocidad no pueda ser negativa usando validaciones en los setters o métodos.

Ejercicio 4: Clase con múltiples propiedades protegidas y métodos públicos
Crea una clase Employee con:

Propiedades protegidas _name, _position y _salary.
Métodos públicos promote(newPosition) y increaseSalary(amount) para modificar el puesto y el salario, respectivamente.
Un getter info que retorne un string con toda la información del empleado (nombre, puesto y salario).
Ejercicio 5: Control de acceso a propiedades con subclases
Crea una clase Person con:

Propiedades protegidas _name y _age.
Métodos getOlder() para aumentar la edad. Luego crea una subclase Student que extienda de Person:
Agrega una propiedad protegida _grade (calificación).
Métodos improveGrade(amount) y reduceGrade(amount) que incrementen o reduzcan la calificación del estudiante.
Ejercicio 6: Encapsulamiento y validación con múltiples clases
Crea una clase Order con las siguientes características:

Propiedades protegidas _totalAmount (total del pedido) y _items (lista de artículos en el pedido).
Métodos addItem(item, price) para agregar un artículo al pedido y removeItem(item) para quitarlo.
Un getter para consultar el total del pedido.
Un setter que impida que el total sea menor a 0.
Ejercicio 7: Gestión de un inventario con encapsulamiento
Crea una clase Inventory con:

Una propiedad protegida _stock que almacene la cantidad de un producto.
Métodos addStock(amount) para agregar más cantidad de producto y removeStock(amount) para quitar.
Un getter stock que permita consultar la cantidad actual de stock.
Valida que nunca puedas remover más stock del que tienes disponible.