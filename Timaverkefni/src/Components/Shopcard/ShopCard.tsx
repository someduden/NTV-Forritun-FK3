import { useState } from "react";
import { Input } from "../Input/Input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ShopCard() {
  const [input, setInput] = useState("input text");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shopping Card</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Button?</CardAction>
      </CardHeader>
      <CardContent>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
