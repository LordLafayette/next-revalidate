import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/form">go to form</Link>
      <br />
      <Link href="/time">go to time</Link>
    </div>
  );
}
