import { IProps } from "../../types/IProps";

export const Container = ({children, styles}: IProps) => {
    return (
        <div style={styles}>
        {children}
        </div>
    );
    }