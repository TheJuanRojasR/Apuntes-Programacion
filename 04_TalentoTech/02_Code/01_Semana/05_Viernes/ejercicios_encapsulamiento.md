

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