import { Controller } from "./components/Controller/controller";
import Mapass from "./components/Map/map";
import { Menu } from "./components/Menu/menu";

export default function App() {
  return (
    <main>
    <Menu/>
    <Controller/>
    <Mapass/>
    </main>
  )
}
