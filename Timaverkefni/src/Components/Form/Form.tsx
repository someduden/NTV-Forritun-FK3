import { useRef, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '../ui/select';
import { Card, CardHeader, CardTitle } from '../ui/card';
import {
  FieldSet,
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
} from '../ui/field';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

type DataType = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  selectedFruit: string;
  date: string;
  message: string;
  radioButton: string;
  preferences: {
    newsletter: boolean;
    promotions: boolean;
  };
};

export function Form() {
  const [guests, setGuests] = useState(0);

  const dataRef = useRef<DataType>({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    selectedFruit: '',
    date: '',
    message: '',
    radioButton: '',
    preferences: {
      newsletter: false,
      promotions: false,
    },
  });

  const increment = () => {
    setGuests((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setGuests((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  return (
    <div className="flex justify-center pb-5">
      <Card className="w-[40%] p-6 bg-gray-500">
        <CardHeader>
          <CardTitle>Heimavinna - Tími 3</CardTitle>
        </CardHeader>
        <form
          onSubmit={() => {
            window.alert(JSON.stringify(dataRef.current));
          }}
        >
          <FieldSet>
            <FieldGroup>
              {/* INPUTS */}
              <Field>
                <div className="flex space-x-4">
                  <Input
                    id="fname"
                    autoComplete="off"
                    placeholder="First name"
                    onChange={(e) => {
                      dataRef.current = {
                        ...dataRef.current,
                        fname: e.target.value,
                      };
                    }}
                    className="bg-white"
                  />
                  <Input
                    id="lname"
                    autoComplete="off"
                    placeholder="Last name"
                    onChange={(e) => {
                      dataRef.current = {
                        ...dataRef.current,
                        lname: e.target.value,
                      };
                    }}
                    className="bg-white"
                  />
                </div>

                <div className="flex space-x-4">
                  <Input
                    type="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={(e) => {
                      dataRef.current = {
                        ...dataRef.current,
                        email: e.target.value,
                      };
                    }}
                    className="bg-white"
                  />
                  <Input
                    type="number"
                    id="phone"
                    autoComplete="off"
                    placeholder="Mobile number"
                    onChange={(e) => {
                      dataRef.current = {
                        ...dataRef.current,
                        phone: e.target.value,
                      };
                    }}
                    className="bg-white"
                  />
                </div>
                <FieldDescription className="text-white">
                  I will collect this for my own personal use.
                </FieldDescription>

                {/* SELECT */}
                <FieldGroup>
                  <Select
                    onValueChange={(e) => {
                      dataRef.current = {
                        ...dataRef.current,
                        selectedFruit: e,
                      };
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
              </Field>
            </FieldGroup>

            {/* RADIO BUTTONS */}
            <FieldGroup className="flex flex-col gap-6">
              <Field>
                <RadioGroup
                  defaultValue="compact"
                  className="flex gap-6"
                  onValueChange={(e) => {
                    dataRef.current = {
                      ...dataRef.current,
                      radioButton: e,
                    };
                  }}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="yes" className="bg-white" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="no" className="bg-white" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </Field>

              {/* CHECKBOXES */}

              <Field className="flex flex-col gap-3 items-start">
                <FieldLabel>Additional Preferences</FieldLabel>
                <div className="flex gap-6 items-center justify-start">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="newsletter-checkbox"
                      name="newsletter-checkbox"
                      defaultChecked={dataRef.current.preferences.newsletter}
                      onCheckedChange={(value) => {
                        dataRef.current.preferences.newsletter = !!value;
                      }}
                      className="bg-white"
                    />
                    <FieldLabel htmlFor="newsletter-checkbox">
                      Newsletter
                    </FieldLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="promotions-checkbox"
                      name="promotions-checkbox"
                      defaultChecked={dataRef.current.preferences.promotions}
                      onCheckedChange={(value) => {
                        dataRef.current.preferences.promotions = !!value;
                      }}
                      className="bg-white"
                    />
                    <FieldLabel htmlFor="promotions-checkbox">
                      Promotions
                    </FieldLabel>
                  </div>
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>

          <FieldGroup>
            <div className="flex flex-col items-start gap-2 pt-4">
              <Label htmlFor="date">Appointment</Label>
              <div className="flex flex-row gap-2">
                <Input
                  type="date"
                  id="date"
                  placeholder="Preferred date (YYYY-MM-DD)"
                  onChange={(e) => {
                    dataRef.current = {
                      ...dataRef.current,
                      date: e.target.value,
                    };
                  }}
                  className="bg-white w-70"
                />

                <div className="flex flex-row gap-1">
                  <Button type="button" variant="outline" onClick={increment}>
                    +
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={decrement}
                    disabled={guests === 0}
                  >
                    -
                  </Button>
                  <Label>{`${guests} Guests`}</Label>
                </div>
              </div>
              <div className="flex flex-col pb-4 gap-2">
                <Label>Leave a message:</Label>
                <Textarea
                  className="bg-white w-100"
                  placeholder="Enter your message here..."
                  onChange={(e) => {
                    dataRef.current = {
                      ...dataRef.current,
                      message: e.target.value,
                    };
                  }}
                />
              </div>
            </div>
          </FieldGroup>
          <div className="flex flex-col gap-2">
            <Button variant="secondary">Submit</Button>
            <Button variant="outline" type="reset">
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
