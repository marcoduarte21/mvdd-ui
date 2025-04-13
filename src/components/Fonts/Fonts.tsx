import { IProps } from "../../types/IProps";

export const H1 = ({ styles, children }: IProps) => {
  return <div style={styles}>{children}</div>;
};
