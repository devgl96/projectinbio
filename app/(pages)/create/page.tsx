import { Rocket } from "lucide-react";
import { Header } from "../../components/LandingPage/Header";
import TextInput from "../../ui/TextInput";
import Button from "../../ui/Button";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket className="size-10" />
        </div>
        <form className="w-full flex items-center gap-2">
          <span className="text-white">projectinbio.com/</span>
          <TextInput />
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div className="flex flex-col gap-2">
          <span className="text-accent-pink">Erro de exemplo</span>
        </div>
      </div>
    </div>
  );
}
