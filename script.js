function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Laura Domínguez Montalvo
TEL:+57 3128958922
EMAIL: laura.dominguez@eurobelleza.com
NOTE:Coordinadora de Mercadeo
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
