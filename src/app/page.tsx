import { Button } from "~/components/ui/Button";

export default function Home() {
  return (
    <div>
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
    </div>
  );
}
