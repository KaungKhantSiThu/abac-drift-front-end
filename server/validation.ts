import Joi from "joi";

// author validation
export const AuthorSchema = Joi.object({
	name: Joi.string().min(3).required(),
});

// book validation
export const BookSchema = Joi.object({
	title: Joi.string().min(3).required(),
	isbn: Joi.string().min(3).required(),
	authors: Joi.array(),
	published: Joi.date().required(),
	pageCount: Joi.number(),
});

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
	motorcycle: Joi.object()
})
