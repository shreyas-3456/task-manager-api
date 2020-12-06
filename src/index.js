const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const multer = require('multer');
const upload = multer({
	dest: 'images',
	limits: {
		fileSize: 1000000,
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(doc|docx)$/)) {
			return cb(new Error('pls upload a word document'));
		}
		cb(undefined, true);
		// cb(new Error('file must be a PDF'))
		// cb(undefined,true)
		// cb(undefined,false)
	},
});
const errorMiddleware = (req, res, next) => {
	throw new Error('from my middleware');
};

app.post(
	'/upload',
	upload.single('upload'),
	(req, res) => {
		res.send();
	},
	(error, req, res, next) => {
		res.status(400).send({ error: error.message });
	}
);
