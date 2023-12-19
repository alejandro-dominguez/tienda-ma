const generateOrderObject = (clientName, clientEmail, clientPhone, products) => {
    return {
        cliente: {
            nombre: clientName,
            email: clientEmail,
            telefono: clientPhone,
        },
        items: products,
        fecha: new Date().toLocaleString()
    }
}

export default generateOrderObject;
