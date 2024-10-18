'use strict';

function arrayData () {

    const catalogo = [
        {
            placa: 'KIU586',
            marca: 'Audi',
            color: 'Negro',
            anio: 1998,
            modelo: 'AX56',
            multas: ['20/01/2000', '06/12/2005', '15/10/2010'],
            propietarios:[
                {
                    nombre: 'Juan',
                    documento: 123456,
                    ciudad: 'Bogotá'
                },
                {
                    nombre: 'Patricio',
                    documento: 654321,
                    ciudad: 'Medellin'
                }
            ]
        }
        ,
        {
            placa: 'XYZ123',
            marca: 'BMW',
            color: 'Blanco',
            anio: 2005,
            modelo: 'X5',
            multas: ['12/03/2007', '22/08/2011'],
            propietarios: [
                {
                    nombre: 'Carlos',
                    documento: 789012,
                    ciudad: 'Cali'
                },
                {
                    nombre: 'Ana',
                    documento: 210987,
                    ciudad: 'Cartagena'
                }
            ]
        },
        {
            placa: 'ABC789',
            marca: 'Mercedes',
            color: 'Rojo',
            anio: 2012,
            modelo: 'C-Class',
            multas: ['05/11/2013', '19/07/2016'],
            propietarios: [
                {
                    nombre: 'Luis',
                    documento: 345678,
                    ciudad: 'Barranquilla'
                },
                {
                    nombre: 'Maria',
                    documento: 876543,
                    ciudad: 'Santa Marta'
                }
            ]
        },
        {
            placa: 'LMN456',
            marca: 'Toyota',
            color: 'Azul',
            anio: 2018,
            modelo: 'Corolla',
            multas: ['10/02/2019', '30/09/2020'],
            propietarios: [
                {
                    nombre: 'Pedro',
                    documento: 567890,
                    ciudad: 'Bucaramanga'
                },
                {
                    nombre: 'Lucia',
                    documento: 987654,
                    ciudad: 'Pereira'
                }
            ]
        }
    ];
    return catalogo;
}

module.exports = {
    arrayData
};