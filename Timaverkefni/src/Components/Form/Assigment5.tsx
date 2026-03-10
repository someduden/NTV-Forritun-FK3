import { useEffect, useState } from 'react';
import { Input } from '../Input/Input';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Field, FieldGroup, FieldSet } from '../ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import useDebounce from '@/Hooks/useDebounce';

type FormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  selectedFruit: string;
  radioButton: string | null;
};

type ViewState = 'start' | 'form';

export function TempForm() {
  // TODO: Remove ref data set, and only use state to keep track of realtime local data (written in input)
  // NOTE: You might want to detach the email from the data set (since it's used to index the localstorage)

  const [emailInput, setEmailInput] = useState('');

  const [values, setValues] = useState<FormValuesType>({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    selectedFruit: '',
    radioButton: null,
  });

  const [view, setView] = useState<ViewState>('start');

  const handleCreate = (e: React.MouseEvent) => {
    e.preventDefault();

    setValues({
      firstName: '',
      lastName: '',
      email: emailInput,
      mobileNumber: '',
      selectedFruit: '',
      radioButton: null,
    });

    setView('form');
  };

  const handleLoad = () => {
    if (!emailInput) {
      alert('Please enter an email to load');
      return;
    }

    const stored = localStorage.getItem(emailInput);

    if (!stored) {
      alert('User not found');
      return;
    }

    const parsed: FormValuesType = JSON.parse(stored);

    setValues(parsed);
    setView('form');
  };

  const onInputChange = (key: keyof FormValuesType, value: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // TODO: Use the correct state to connect to debounce state

  // Set delay time according to your needs
  const debouncedValues = useDebounce(values, 1000);
  // TODO: Write useEffect to repopulate the localstorage after debounce
  // NOTE: The email has to be present for this to work

  useEffect(() => {
    if (!debouncedValues.email) return;

    localStorage.setItem(
      debouncedValues.email,
      JSON.stringify(debouncedValues),
    );
  }, [debouncedValues]);

  // TODO: If no email is provided, display only the email input, or some other alternative UX

  if (view === 'start') {
    return (
      <Card className="my-4 w-2/3">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="grow border h-0"></div>
            <CardTitle>Already filled out form?</CardTitle>
            <div className="grow border h-0"></div>
          </div>
        </CardHeader>
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleLoad();
          }}
        >
          <FieldSet>
            <FieldGroup>
              <Field>
                <Input
                  className="bg-white"
                  id="email"
                  autoComplete="off"
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="asdf@ntv.is"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <div className="flex flex-col py-4 gap-4">
            <Button
              type="submit"
              className="bg-green-500 p-4 rounded text-white uppercase"
            >
              Load
            </Button>
            <Button
              type="button"
              className="bg-green-500 p-4 rounded text-white uppercase"
              onClick={handleCreate}
            >
              Create New
            </Button>
          </div>
        </form>
      </Card>
    );
  }

  if (view === 'form') {
    return (
      <div className="flex justify-center w-full">
        <Card className="w-1/3 max-w-7xl bg-blue-950">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="grow border h-0"></div>
              <CardTitle className="text-white">Example</CardTitle>
              <div className="grow border h-0"></div>
            </div>
          </CardHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-full"
          >
            <FieldSet>
              <FieldGroup>
                <Field>
                  <p className="text-white">
                    Saved user: {debouncedValues.email}
                  </p>
                  <Input
                    className="bg-white"
                    id="firstName"
                    autoComplete="off"
                    placeholder="Gunnsteinn"
                    // TODO: Set values to all input fields in the form
                    value={values.firstName}
                    onChange={(e) => onInputChange('firstName', e.target.value)}
                  />
                </Field>
                <Field>
                  <Input
                    className="bg-white"
                    id="lastName"
                    autoComplete="off"
                    placeholder="Skulason"
                    value={values.lastName}
                    onChange={(e) => onInputChange('lastName', e.target.value)}
                  />
                </Field>
                <Field>
                  <Input
                    className={`bg-white`}
                    id="email"
                    disabled={!!emailInput}
                    autoComplete="off"
                    type="email"
                    placeholder="asdf@ntv.is"
                    value={values.email}
                    onChange={(e) => onInputChange('email', e.target.value)}
                  />
                </Field>
                <Field>
                  <Input
                    className="bg-white"
                    id="mobileNumber"
                    autoComplete="off"
                    type="number"
                    placeholder="Mobile number"
                    value={values.mobileNumber}
                    onChange={(e) =>
                      onInputChange('mobileNumber', e.target.value)
                    }
                  />
                </Field>
              </FieldGroup>
              <FieldGroup>
                <Select
                  value={values.selectedFruit}
                  onValueChange={(v) => {
                    onInputChange('selectedFruit', v);
                  }}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FieldGroup>
              <FieldGroup>
                <RadioGroup
                  value={values.radioButton ?? ''}
                  className="w-fit flex"
                  onValueChange={(v) => {
                    onInputChange('radioButton', v);
                  }}
                >
                  <RadioGroupItem className="bg-white" value="yes" id="yes" />
                  <Label className="text-white" htmlFor="yes">
                    Yes
                  </Label>
                  <RadioGroupItem className="bg-white" value="no" id="no" />
                  <Label className="text-white" htmlFor="no">
                    No
                  </Label>
                </RadioGroup>
              </FieldGroup>
            </FieldSet>
            <div className="flex flex-col py-4 gap-4">
              <Button
                type="submit"
                className="bg-pink-500 p-4 rounded text-white uppercase"
                onClick={() => {
                  window.alert(
                    `Hello ${values.firstName}; email address ${values.email}`,
                  );
                }}
              >
                Submit
              </Button>
              <div className="flex items-center gap-2">
                <div className="grow border h-0"></div>
                <CardTitle className="text-white">or</CardTitle>
                <div className="grow border h-0"></div>
              </div>
              <Button
                type="button"
                className="bg-black p-4 rounded text-white uppercase border-pink-500 border"
                onClick={() => {
                  setView('start');
                }}
              >
                Back
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}
