"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/a-propos");
  }, [router]);
  return null;
}
