const Joi = require('joi');

const CollaboraionPayloadSchema = Joi.object({
	noteId: Joi.string().required(),
	userId: Joi.string().required(),
});

module.exports = { CollaboraionPayloadSchema };
