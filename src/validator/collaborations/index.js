const InvariantError = require('../../exceptions/InvariantError');
const { CollaboraionPayloadSchema } = require('./schema');

const CollaborationsValidator = {
	validateCollaborationPayload: (payload) => {
		const validationResult = CollaboraionPayloadSchema.validate(payload);

		if (validationResult.error) {
			throw new InvariantError(validationResult.error.message);
		}
	},
};

module.exports = CollaborationsValidator;
