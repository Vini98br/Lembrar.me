import {useState, useEffect} from 'react';
import {
  NativeSyntheticEvent,
  Button,
  TextInputSubmitEditingEventData,
  GestureResponderEvent,
} from 'react-native';
import {FormData} from '../pages/NewObject/index';

const useForm = (
  callback: () => void,
  validate: (values: FormData) => any
) => {
  const [values, setValues] = useState<any>({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    // }
  }, [errors]);

  const handleSubmit = (event: GestureResponderEvent) => {
    if (event) event.preventDefault();
    // setErrors(validate(values!));
    console.log(values)
    setIsSubmitting(true);
  };

  const handleChange = (inputName: keyof FormData) => (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    event.persist();
    setValues((prev: any) => ({...prev, [inputName]: event.nativeEvent.text}));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
