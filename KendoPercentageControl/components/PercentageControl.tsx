import * as React from 'react'

export interface PercentageControlProps {
    value: string | null;
}

export class PercentageControl extends React.Component<PercentageControlProps, {}> {

    render() {

        return (
            <div>{this.props.value}%</div>
        );
    }
}