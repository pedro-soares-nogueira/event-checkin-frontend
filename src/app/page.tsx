import { AttendeeList } from "@/components/attendee-list";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-center gap-6">
      <Header />
      <AttendeeList />
    </main>
  );
}
