export function setDefaultFormValues(schema) {
	const values = {};
	schema.forEach((field) => (values[field.name] = ''));
	return values;
}
