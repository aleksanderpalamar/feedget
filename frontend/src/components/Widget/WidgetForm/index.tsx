import { CardButton } from "../CardButton";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

export function WidgetForm() {
  return (
    <div className="bg-[#18181B] p-4 relative text-white rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <Header title="Deixe seu Feedback"  />
      <CardButton /> 
      <Footer title={"Feito com"} subtitle={"❤️"} description={"Palamar"} />
    </div>
  );
}
