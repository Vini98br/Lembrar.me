import {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  GestureResponderEvent,
} from 'react-native';
import {FormData} from '../pages/NewObject/index';

function useForm<T>(
  callback: (values: T) => Promise<any>,
  validate: (values: T) => any,
  initialState: any,
) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('veio2')
      try {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          console.log('veio3')
          await callback(values);
          Keyboard.dismiss();
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [errors]);

  const handleSubmit = (event: GestureResponderEvent) => {
    if (event) event.preventDefault();
    setErrors({});
    console.log('veio')
    // setErrors(validate(values!));
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
}

export default useForm;
