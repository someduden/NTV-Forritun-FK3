import { Input as ShadInput } from "../ui/input";

export const Input = ShadInput;

export function oldInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
  }

  return (
    <input
      type="text"
      value={value}
      placeholder="Enter your name..."
      onChange={(e) => handleChange(e)}
    />
  );
}
