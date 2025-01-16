import { ReactNode } from "react";
import { Container } from "../ui/styles/global";

type IChildren = {
  children: ReactNode;
};

export const ContainerView: React.FC<IChildren> = ({ children }: IChildren) => {
  return <Container>{children}</Container>;
};
