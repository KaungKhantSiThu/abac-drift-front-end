import Joi from "joi";

export const MotorcycleSchema = Joi.object({
	title: Joi.string().required(),
	price: Joi.number().required(),
	gear: Joi.string().required(),
	mileage: Joi.number().required(),
	engine: Joi.number().required(),
	year: Joi.number().required(),
	manufacturer: Joi.string().required(),
	imageURLs: Joi.array().required(),
	description: Joi.string().required(),
	seller: Joi.string().required()
})

export const AppointmentSchema = Joi.object({
	datetime: Joi.date().required(),
	seller: Joi.string().required(),
	buyer: Joi.string().required(),
	status: Joi.string().required(),
	location: Joi.string().required(),
	motorcycle: Joi.object().required(),
	note: Joi.string().required()
})

export const UserSchema = Joi.object({
	username: Joi.string().required(),
	email: Joi.string().required(),
	bio: Joi.string(),
	dob: Joi.date().required(),
	type: Joi.string().valid('buyer', 'seller').required(),
	appointments: Joi.array(),
	phoneNumber: Joi.string().required()
})
