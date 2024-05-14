"use client";
import { usePathname, useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const pathName = usePathname();
  if (pathName === "/") {
    router.push("/about");
  }
  return "";
};
export default HomePage;
