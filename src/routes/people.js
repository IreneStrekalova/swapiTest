const router = require('express').Router();
const axios = require('axios');
const ewok = require('../helpers/ewok');

router.route('/:id')
	.get(async (req, res, next) => {
		try {
			const url = `https://swapi.dev/api/people/${req.params.id}`;
			const response = await axios(url);

			if (req.query.encoding == 'ewok') response.data = await ewok(response.data);

			res.status(response.status).send(response.data)
		} catch (err) {
			next(err);
		}
	})

module.exports = router;