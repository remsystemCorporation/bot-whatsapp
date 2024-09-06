const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('SERVIDOR EN LINEA 🛡️');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();

client.on('message_create', message => {
	if (message.body === '!start') {
		// al escribir !start en el chat de nuestro bot este nos respondera con "Servidor activo"
		client.sendMessage(message.from, 'Servidor activo');
	}
});