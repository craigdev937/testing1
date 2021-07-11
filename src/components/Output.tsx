import React from "react";

type Props = {
    children: React.ReactNode,
};

export const Output = (props: Props): JSX.Element => {
    return (
        <React.Fragment>
            <p>{props.children}</p>
        </React.Fragment>
    );
};






