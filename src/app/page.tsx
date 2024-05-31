import { Button } from "./components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Marketing</span>
            <h1>
              Hello Im <br /> <span>Marketisa</span>
            </h1>
          </div>
          <div>
            {/* photo */}
            <div>photo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
