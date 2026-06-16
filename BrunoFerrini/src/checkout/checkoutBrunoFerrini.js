const validarCheckout = (orden, cuponesValidos) => {
  const { items, direccion, telefono, tarjeta, cupon } = orden;

  // TC-05: Verificación de carrito vacío
  if (!items || items.length === 0) {
    return { exito: false, mensaje: 'El carrito de compras no puede estar vacío.' };
  }

  // TC-03: Validación de dirección vacía
  if (!direccion || direccion.trim() === '') {
    return { exito: false, mensaje: 'La dirección de envío es obligatoria.' };
  }

  // TC-04: Verificación de sintaxis de teléfono
  const regexTelefono = /^\d{9}$/;
  if (!regexTelefono.test(telefono)) {
    return { exito: false, mensaje: 'El teléfono de contacto debe contener solo 9 dígitos numéricos.' };
  }

  // TC-06: Verificación de longitud estricta de tarjeta bancaria
  const regexTarjeta = /^\d{16}$/;
  if (!regexTarjeta.test(tarjeta)) {
    return { exito: false, mensaje: 'El número de tarjeta debe tener exactamente 16 dígitos.' };
  }

  // TC-07: Verificación de regla de negocio de monto mínimo
  const totalCompra = items.reduce((total, item) => total + (item.precio * (item.cantidad || 1)), 0);
  if (totalCompra < 50) {
    return { exito: false, mensaje: 'El monto mínimo para procesar una compra en web es de S/. 50.' };
  }

  // Validaciones lógicas del Cupón de Descuento
  if (cupon) {
    // TC-09 y TC-10: Valores Límite del Cupón (Largo de 5 a 10 caracteres)
    if (cupon.length < 5 || cupon.length > 10) {
      return { exito: false, mensaje: 'Los cupones deben tener una longitud de entre 5 y 10 caracteres.' };
    }

    // TC-08: Existencia del cupón en base de datos
    if (!cuponesValidos.includes(cupon)) {
      return { exito: false, mensaje: 'El código de cupón ingresado no es válido.' };
    }
  }

  return { exito: true, total: totalCompra };
};

const procesarOrden = (orden, cuponesValidos) => {
  const validacion = validarCheckout(orden, cuponesValidos);
  if (!validacion.exito) return validacion;

  return {
    exito: true,
    mensaje: `¡Compra Procesada! Orden procesada con éxito. Total cobrado: S/. \${validacion.total}. Su calzado será enviado pronto.`
  };
};

module.exports = { validarCheckout, procesarOrden };
