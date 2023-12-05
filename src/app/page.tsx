import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24 ">
     

      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold">
          <span className="text-blue-500">Draggable Tldraw</span>
        </h1>
        <h2 className="text-3xl font-semibold">
          A draggable Tldraw whiteboard using React-Grid-Layout and Tldraw
        </h2>

        <Link href="/draw">
          <Button variant={"outline"}>Try Drawing</Button>
        </Link>
      </div>
    </main>
  );
}
