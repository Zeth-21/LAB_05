const { validarCheckout, procesarOrden } = require('../src/checkout/checkoutBrunoFerrini');

const CUPONES_VALIDOS = ['FERRINI20', 'DESCUENTO1'];

describe('Módulo de Checkout (Envío y Pago) - Bruno Ferrini', () => {

  // === CLASES VÁLIDAS ===
  test('TC-01: Procesar compra exitosa con datos de envío y pago correctos', () => {
    const ordenValida = {
      items: [{ producto: 'Zapatos Oxford Cuero', precio: 299, cantidad: 1 }],
      direccion: 'Av. Las Nazarenas 123, Surco',
      telefono: '987654321',
      tarjeta: '4557889912345678',
      cupon: 'FERRINI20'
    };
    const r = procesarOrden(ordenValida, CUPONES_VALIDOS);
    expect(r.exito).toBeTruthy();
    expect(r.mensaje).toContain('Orden procesada con éxito');
  });

  test('TC-02: Procesar compra aplicando cupón en el límite exacto inferior de caracteres (5 chars)', () => {
    const ordenCuponCorto = {
      items: [{ producto: 'Botines Elegantes', precio: 350, cantidad: 1 }],
      direccion: 'Jr. San Martín 456, Huamanga',
      telefono: '951234567',
      tarjeta: '4557889912345678',
      cupon: 'MODA5'
    };
    const cuponesConCinco = [...CUPONES_VALIDOS, 'MODA5'];
    const r = procesarOrden(ordenCuponCorto, cuponesConCinco);
    expect(r.exito).toBeTruthy();
  });

  // === EDGE CASES ===
  test('TC-03: Rechazar checkout si la dirección de envío está vacía', () => {
    const orden = { items: [{ precio: 100 }], direccion: '   ', telefono: '987654321', tarjeta: '4557889912345678' };
    const r = validarCheckout(orden, CUPONES_VALIDOS);
    expect(r.exito).toBeFalsy();
    expect(r.mensaje).toBe('La dirección de envío es obligatoria.');
  });

  test('TC-04: Rechazar si el teléfono contiene letras o caracteres especiales', () => {
    const orden = { items: [{ precio: 100 }], direccion: 'Av. Larco 456', telefono: '9876-543A', tarjeta: '4557889912345678' };
    const r = validarCheckout(orden, CUPONES_VALIDOS);
    expect(r.exito).toBeFalsy();
    expect(r.mensaje).toBe('El teléfono de contacto debe contener solo 9 dígitos numéricos.');
  });

  // === CLASES INVÁLIDAS ===
  test('TC-05: Rechazar pago si el carrito de compras está totalmente vacío', () => {
    const orden = { items: [], direccion: 'Av. Larco 456', telefono: '987654321', tarjeta: '4557889912345678' };
    const r = validarCheckout(orden, CUPONES_VALIDOS);
    expect(r.exito).toBeFalsy();
    expect(r.mensaje).toBe('El carrito de compras no puede estar vacío.');
  });

  test('TC-06: Rechazar si el número de tarjeta no tiene exactamente 16 dígitos', () => {
    const orden = { items: [{ precio: 100 }], direccion: 'Av. Larco 456', telefono: '987654321', tarjeta: '123456' };
    const r = validarCheckout(orden, CUPONES_VALIDOS);
    expect(r.exito).toBeFalsy();
    expect(r.mensaje).toBe('El número de tarjeta debe tener exactamente 16 dígitos.');
  });

  test('TC-07: Rechazar si el monto total de compra es menor al mínimo requerido (S/. 50)', () => {
    const orden = { items: [{ producto: 'Medias de Seda', precio: 30, cantidad: 1 }], direccion: 'Av. Larco 456', telefono: '987654321', tarjeta: '4557889912345678' };
    const r = validarCheckout(orden, CUPONES_VALIDOS);
    expect(r.exito).toBeFalsy();
    expect(r.mensaje).toBe('El monto mínimo para procesar una compra en web es de S/. 50.');
  });

test('TC-08: Rechazar si el cupón ingresado no existe en el sistema', () => {
    const orden = { 
      items: [{ precio: 100 }], 
      direccion: 'Av. Larco 456', 
      telefono: '987654321', 
      tarjeta: '4557889912345678', 
      cupon: 'FALSO' 
    }; 
    const r = validarCheckout(orden, CUPONES_VALIDOS);
    expect(r.exito).toBeFalsy();
    expect(r.mensaje).toBe('El código de cupón ingresado no es válido.');
  });

  // === ANÁLISIS DE VALORES LÍMITE (AVL) ===
  test('TC-09: Error si el cupón tiene una longitud menor al límite permitido (4 caracteres)', () => {
    const orden = { items: [{ precio: 100 }], direccion: 'Av. Larco 456', telefono: '987654321', tarjeta: '4557889912345678', cupon: 'BF26' };
    const r = validarCheckout(orden, CUPONES_VALIDOS);
    expect(r.exito).toBeFalsy();
    expect(r.mensaje).toBe('Los cupones deben tener una longitud de entre 5 y 10 caracteres.');
  });

  test('TC-10: Error si el cupón excede la longitud máxima permitida (11 caracteres)', () => {
    const orden = { items: [{ precio: 100 }], direccion: 'Av. Larco 456', telefono: '987654321', tarjeta: '4557889912345678', cupon: 'FERRINODES11' };
    const r = validarCheckout(orden, CUPONES_VALIDOS);
    expect(r.exito).toBeFalsy();
    expect(r.mensaje).toBe('Los cupones deben tener una longitud de entre 5 y 10 caracteres.');
  });
});
