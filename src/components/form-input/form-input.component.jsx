import { Input, FormInputLabel, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherFields }) => {
  return (
    <Group>
      <Input {...otherFields} />
      {label && (
        <FormInputLabel shrink={otherFields.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
