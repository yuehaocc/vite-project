import "./index.module.scss";
import { devDependencies } from "../../../package.json";

export default function Header() {
  return (
    <div className="header p-20px">
      <h1 className="font-bold text-2xl mb-2">
        vite version: {devDependencies.vite}
      </h1>
    </div>
  );
}
