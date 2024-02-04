import { FormBuilder } from './components/FormBuilder';
import JSONSchemaIcon from './assets/json-schema-logo.svg';

function App() {
  return (
    <div className="max-w-screen-lg py-10 mx-auto">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="mb-3 text-center text-lg">
          Generate form with JSON Schema and{' '}
          <a
            href="https://rjsf-team.github.io/react-jsonschema-form/docs/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-500"
          >
            react-jsonschema-form
          </a>
        </h2>
        <img
          className="w-36 m-auto"
          src={JSONSchemaIcon}
          alt="json schema icon"
        />
      </div>
      <FormBuilder />
    </div>
  );
}

export default App;
