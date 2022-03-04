import * as React from 'react'
import { NumericTextBox, NumericTextBoxChangeEvent } from "@progress/kendo-react-inputs";

export interface PercentageControlProps {
    value: number | null;
    onChange(value: number | null): void;
}

export class PercentageControl extends React.Component<PercentageControlProps, {}> {

    constructor(props: PercentageControlProps) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(evt: NumericTextBoxChangeEvent) {
        this.props.onChange(evt.value);
    }

    render() {

        return (
            <NumericTextBox
                width={200}
                format="p"
                value={this.props.value}
                min={0}
                max={1}
                step={0.1}
                onChange={this.onChange}
            />
        );
    }
}