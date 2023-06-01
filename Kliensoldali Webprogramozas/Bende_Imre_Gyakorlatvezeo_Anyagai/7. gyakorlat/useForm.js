function useForm(defaultValue, validators) {
  const [formState, setFormState] = useState(defaultValue);
  const [validationState, setValidationState] = useState(() =>
    Object.keys(validators).reduce((defaultValidation, key) => {
      return {
        ...defaultValidation,
        [key]: validators[key](formState[key]),
      };
    }, {}),
  );
  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setValidationState({
      ...validationState,
      [name]: validators[name](value),
    });
  };
  const isValid = Object.values(validationState).every(validationResult => !validationResult);
  return {
    handleFormChange,
    formState,
    validationState,
    isValid,
  };
}