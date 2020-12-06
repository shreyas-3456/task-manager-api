const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 		to: 'shreyas.nigam25@gmail.com',
// 		from: 'shreyas.nigam25@gmail.com',

const sendWelcomeEmail = (email, name) => {
	sgMail
		.send({
			to: email,
			from: 'shreyas.nigam25@gmail.com',
			subject: 'Welcome to the App',
			text: `Welcome to the app ${name}. Let me know how you enjoying our app  `,
		})
		.then(() => {
			console.log('sent email');
		})
		.catch((e) => console.log(e.body.response));
};

const sendRegretEmail = (email, name) => {
	sgMail
		.send({
			to: email,
			from: 'shreyas.nigam25@gmail.com',
			subject: 'Cancellation of account',
			text: `We are sorry to see you leave ${name}, would like tell us about your experiance and want we could have done better ? Click the link below to tell us`,
		})
		.then(() => {
			console.log('email sent');
		})
		.catch((e) => {
			console.error(e.response.body);
		});
};

module.exports = {
	sendWelcomeEmail,
	sendRegretEmail,
};
