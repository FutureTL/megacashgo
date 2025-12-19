"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8 text-muted-foreground">Page not found</p>
      <Button onClick={() => router.push("/")}>
        Go back home
      </Button>
    </div>
  );
}
