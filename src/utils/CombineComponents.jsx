import React from 'react';


export const CombineComponents = (...components) => {
    return components.reduce((AccumComponent, CurrentComponent) => {
        return ({ children }) => {
            return (
                <AccumComponent >
                    <CurrentComponent>
                        {children}
                    </CurrentComponent>
                </AccumComponent>
            )
        }
    }, (props) => <>{props.children}</>)
};

