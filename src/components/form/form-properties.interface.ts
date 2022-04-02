export interface IFormContext {
    submitData: { [key: string]: any};
	errors: any;
	setFields(event: any, { id, value}: { id: any; value: any;}): void;
    addField(data: any): void;
    validateFields(field: any): void;
}

export interface IFormProperties {
    onFormSubmit(event: any): void;
}