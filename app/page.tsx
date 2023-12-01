import Link from "next/link";
import Banner from "./components/Banner";
import Diagram from "./components/Diagram";
import TeamSection from "./components/Team";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <h1>ATS267</h1>
      <TeamSection />
      {/* <Diagram /> */}
      <Link href={'/login'}>Login</Link>
    </main>
  )
}
