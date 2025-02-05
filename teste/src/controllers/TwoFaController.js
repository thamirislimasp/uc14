const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

class TwoFaController {

    gerarToken(request, response) {
        const secret = speakeasy.generateSecret();

        qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {

        })
    }

    verificarToken(request, response) {

    }
}

