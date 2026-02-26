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
} from "../ui/field";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export function Timaverkefni3() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");

  return (
    <Card className="grid">
      <CardHeader>
        <CardTitle>Form</CardTitle>
      </CardHeader>
      <div className="w-full max-w-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.alert(`${fname} ${lname} + ${email} + ${phone} `);
          }}
        >
          <FieldSet>
            <FieldGroup>
              <Field>
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
                <FieldDescription>
                  I will collect this for my own personal use.
                </FieldDescription>
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field className="">
                <RadioGroup defaultValue="compact" className="w-fit">
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
            </FieldGroup>
          </FieldSet>
          <FieldSet>
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
          </FieldSet>
          <Button type="submit" />
        </form>
      </div>
    </Card>
  );
}
