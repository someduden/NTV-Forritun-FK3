export function Input({
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
