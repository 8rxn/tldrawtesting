import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Home } from "lucide-react";
type Props = {};

const notfound = (props: Props) => {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24 ">
      <div className="flex flex-col items-center gap-4  ">
        <h1 className="text-6xl font-bold">
          {" "}
          You Seem {" "}
          <span className="text-blue-500">Lost</span>
        </h1>
        <h2 className="text-3xl font-semibold border-b-2 ">
          While drawing you might have drawn yourself <br /> too far away from the pages that existed.
        </h2>

        <Link href="/">
          <Button variant={"outline"}>
            Go Back <Home className="w-6 h-6 p-1" />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default notfound;
