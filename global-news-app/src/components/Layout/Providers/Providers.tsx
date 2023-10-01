
import { IChildren } from "Types/types";
import StylesProvider from "./StylesProvider"

const Providers = ({ children }: IChildren) => (
  <StylesProvider>{children}</StylesProvider>
);
export default Providers;
