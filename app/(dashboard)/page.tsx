import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div> dashboard page</div>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}