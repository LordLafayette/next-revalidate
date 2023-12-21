import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h6>Date : {Date()}</h6>
      <Link href="/form">go to Form</Link>
    </div>
  );
}
