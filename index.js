require('dotenv').config();
const port = process.env.PORT;
const app = require('express')();
const peopleRoute = require('./src/routes/people');
const planetRoute = require('./src/routes/planets');

app.use('/people', peopleRoute);
app.use('/planets', planetRoute);

app.use((err, req, res, next) => {
	if (!err.status) err.status = 500;
	if (!err.message) err.message = 'Something is wrong';
	console.log(`ERROR :: ${err}`);
	res.status(err.status).send(err.message);
})

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});