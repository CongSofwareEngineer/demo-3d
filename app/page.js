'use client'
import Image from "next/image";
import Model3d from "./components/Model3d";
import Fiber3D from "./components/Fiber3D";
import ImageAni from "./components/ImageAni";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Fiber3D />
     
      <div  className="h-screen w-full relative indent-1">
        <ImageAni />
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={1}/>
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={2}/>
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={3}/>
      </div>
    </main>
  );
}
