module.exports = {
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'gonzalo.dietrich@ethereal.email',
    pass: 'nT4qpTVg8UPZtF5rCu',
  },
  // to fix "msg": "self-signed certificate in certificate chain" error
  tls: {
    rejectUnauthorized: false
}
};
