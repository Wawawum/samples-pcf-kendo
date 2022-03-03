import * as React from 'react'

export interface ColorPaletteProps {
    value: string | null;
}

export class ColorPalette extends React.Component<ColorPaletteProps, {}> {

    render() {

        return (
            <div>{this.props.value}</div>
        );
    }
}