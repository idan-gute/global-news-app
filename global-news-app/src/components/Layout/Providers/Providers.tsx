
import { IChildren } from "Types";
import StylesProvider from "./StylesProvider"

const Providers = ({ children }: IChildren) => (
  <StylesProvider>{children}</StylesProvider>
);
export default Providers;
