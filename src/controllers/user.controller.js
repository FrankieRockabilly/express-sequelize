const {user} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getUser = (req, res, next) => {
	res.send({
			nama: `Frengki iskandar`,
			asal: `Rokan Hulu`,
			message : 'Jangan lupa beramal baik'
	});
};

exports.register = async (req, res, next) => {
	try {
		const insertData = req.body

		const hashedPassword = bcrypt.hashSync(insertData.password, 8)

		const regis = await user.create({
			firstname: insertData.firstname,
			lastname: insertData.lastname,
			username: insertData.username,
			email: insertData.email,
			password: hashedPassword
		})

		res.status(201).send({
			message: `user created`,
			id: regis.id
		})

	} catch (error) {
		return res.status(500).send({
			error: error
		})
	}
}

exports.login = async (req, res, next) => {
	try {
		const payload = req.body

		const getUser = await user.findOne({
			where: {email: payload.email}
		})

		if (!getUser) return res.status(404).send(`user not found`)

		const comparePassword = bcrypt.compareSync(payload.password, getUser.dataValues.password)

		if (comparePassword) {
			const token = jwt.sign({id: getUser.dataValues.id, email: getUser.dataValues.email}, process.env.JWT_SECRET, {expiresIn: 3600})

			return res.status(200).send({
				message: `login succes`,
				token: token
			})
		} else {
			return res.status(400).send(`invalid password`)
		}

	} catch (error) {
		return res.status(500).send({
			error: error
		})
	}
}

exports.getDetailUser = async (req, res, next) => {
	try {
		const params = req.params.id

		
		const getUser = await user.findOne({
			where: {email: req.user.email}
		})

		if (req.user.id !== params) return res.status(403).send(`cannot acces another user details`)

		res.status(200).send({
			message: `data user retrieved`,
			data: getUser
		})

	} catch (error) {
		return res.status(500).send({
			error: error
		})
	}
}

exports.deleteUser = async (req, res, next) => {
	try {
		const params = req.params.id

		

	} catch (error) {
		return res.status(500).send({
			error: error
		})
	}
}

exports.updateUser = async (req, res, next) => {
	try {
		const params = req.params.id
		const update = req.body

	
	} catch (error) {
		return res.status(500).send({
			error: error
		})
	}
}