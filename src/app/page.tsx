import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/form">form</Link>
      <br />
      <Link href="/time">time</Link>
    </div>
  );
}
