export default {
    validate: async function validate(schema, data) {
        try {
            await schema.validate(data, { abortEarly: false });
        } catch (error) {
            const errorFormatted = yupToObject(error);
            throw new BadRequest(errorFormatted);
        }
    }
}