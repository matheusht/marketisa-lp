import Footer from "./Footer/page";
import History from "./History/page";
import { Main } from "./components/Main";
import Services from "./services/page";
import Whatsapp from "./social/page";

export default function Home() {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto"></div>
      </section>
      <Main />
      <History />
      <Services />
      <Whatsapp />
      <Footer />
    </>
  );
}
