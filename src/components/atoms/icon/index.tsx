import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { HamburguerIcon } from "./hamburguer";
import { CloseIcon } from "./close";

const FullCart = () => <TfiShoppingCartFull size="3em" title="Icon cart with products" />;
const EmptyCart = () => <TfiShoppingCart size="3em" title="Empty icon cart of products" />;
const LightTheme = () => <MdOutlineLightMode color="white" size="3em" title="Light theme's icon" />;
const DarkTheme = () => <MdOutlineDarkMode size="3em" title="Dark theme's icon" />;

type Icon = "fullCart" | "emptyCart" | "lightTheme" | "darkTheme" | "closeIcon" | "hamburguerIcon";

type Props = {
  type: Icon;
};

export default function Icon({ type }: Props) {
  const icon: Record<Icon, React.ReactNode> = {
    fullCart: <FullCart />,
    emptyCart: <EmptyCart />,
    lightTheme: <LightTheme />,
    darkTheme: <DarkTheme />,
    hamburguerIcon: <HamburguerIcon />,
    closeIcon: <CloseIcon />,
  };

  return <div>{icon[type]}</div>;
}
