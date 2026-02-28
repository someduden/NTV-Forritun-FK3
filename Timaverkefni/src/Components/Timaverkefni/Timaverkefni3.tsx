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
import { Button } from "../Button";
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

export function Timaverkefni3() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");
  const [preferences, setPrefrences] = useState({
    newsletter: false,
    promotions: false,
  });

  return (
    <Card className="p-6 max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Form</CardTitle>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.alert(`${fname} ${lname} + ${email} + ${phone} `);
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
                />
                <Input
                  id="lname"
                  autoComplete="off"
                  placeholder="Last name"
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
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
                />
                <Input
                  type="number"
                  id="phone"
                  autoComplete="off"
                  placeholder="Mobile number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <FieldDescription>
                I will collect this for my own personal use.
              </FieldDescription>

              {/* SELECT */}
              <FieldGroup>
                <Select
                  onValueChange={(e) => {
                    setSelectedFruit(e);
                  }}
                >
                  <SelectTrigger className="w-full max-w-48">
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
              <RadioGroup defaultValue="compact" className="flex gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-two" id="option-two" />
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
                  />
                  <FieldLabel htmlFor="promotions-checkbox">
                    Promotions
                  </FieldLabel>
                </div>
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>

        <Button type="submit" />
      </form>
    </Card>
  );
}
