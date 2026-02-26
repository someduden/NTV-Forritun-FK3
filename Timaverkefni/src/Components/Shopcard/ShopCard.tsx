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
import { Button } from "../Button";

export function ShopCard() {
  const [input, setInput] = useState("input text");
  const [email, setEmail] = useState("");

  const onClick = () => {
    alert("submitted");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shopping Card</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>
          <Button onClick={onClick} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
