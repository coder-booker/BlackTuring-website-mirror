import Link from "next/link";
import "./Logo.css";

export default function Logo() {
  return (
    <h1 id="logo">
      <Link href="/home">Logo</Link>
    </h1>
  );
}