import Image from "next/image";
import Model3d from "./components/Model3d";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Model3d />
    </main>
  );
}
