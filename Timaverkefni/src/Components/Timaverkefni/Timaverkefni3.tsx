import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";
import { Card, CardHeader, CardTitle } from "../ui/card";
import {
  FieldSet,
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
} from "../ui/field";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function Timaverkefni3() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");
  const [savedDate, setSavedDate] = useState("");
  const [guests, setGuests] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("no");
  const [preferences, setPrefrences] = useState({
    newsletter: false,
    promotions: false,
  });

  const increment = () => {
    setGuests((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setGuests((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  return (
    <Card className="p-6 bg-gray-500">
      <CardHeader>
        <CardTitle>Heimavinna - Tími 3</CardTitle>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.alert(
            `${fname} ${lname} has registered with the email ${email} and phone number ${phone}. They would like to be rewarded with ${selectedFruit} and chose ${selectedValue}. Their scheduled appointment is on ${savedDate} and they will be bringing ${guests} guests with them, Newsletter: ${preferences.newsletter} Promotions: ${preferences.promotions}. They have left the message ${message}.  `,
          );
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
                    setFName(e.target.value);
                  }}
                  className="bg-white"
                />
                <Input
                  id="lname"
                  autoComplete="off"
                  placeholder="Last name"
                  onChange={(e) => {
                    setLName(e.target.value);
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
                    setEmail(e.target.value);
                  }}
                  className="bg-white"
                />
                <Input
                  type="number"
                  id="phone"
                  autoComplete="off"
                  placeholder="Mobile number"
                  onChange={(e) => {
                    setPhone(e.target.value);
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
                    setSelectedFruit(e);
                  }}
                >
                  <SelectTrigger className="w-full max-w-48 bg-white">
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
                value={selectedValue}
                onValueChange={setSelectedValue}
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="yes"
                    id="option-one"
                    className="bg-white"
                  />
                  <Label htmlFor="option-one">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="no"
                    id="option-two"
                    className="bg-white"
                  />
                  <Label htmlFor="option-two">No</Label>
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
                    checked={preferences.newsletter}
                    onCheckedChange={(value) =>
                      setPrefrences((prev) => ({
                        ...prev,
                        newsletter: !!value,
                      }))
                    }
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
                    checked={preferences.promotions}
                    onCheckedChange={(value) =>
                      setPrefrences((prev) => ({
                        ...prev,
                        promotions: !!value,
                      }))
                    }
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
                  setSavedDate(e.target.value);
                }}
                className="bg-white w-60"
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
                className="bg-white w-90"
                placeholder="Enter your message here..."
                onChange={(e) => {
                  setMessage(e.target.value);
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
  );
}
