import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import { REGISTER_SCHEMA } from '../schema/register';
import { RJSFSchema, RJSFValidationError } from '@rjsf/utils';

const log = (type: string) => console.log.bind(console, type);

const transformErrors = (errors: RJSFValidationError[]) => {
  errors.forEach((error) => {
    if (error.name === 'required') {
      error.message = `The ${error.property} is required`;
    }
  });
  return errors;
};

export const FormBuilder = () => {
  return (
    <div className="bg-white rounded-md p-10 shadow-md border border-purple-500">
      <Form
        showErrorList={false}
        noHtml5Validate
        schema={REGISTER_SCHEMA as RJSFSchema}
        validator={validator}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')}
        transformErrors={transformErrors}
      >
        <div className="flex justify-end">
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};
