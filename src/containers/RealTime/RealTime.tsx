import * as React from 'react'
import './RealTime.css'

export interface IProps {
    humidity: number;
    temp: number;
    weather: string;
    windLevel: string;
    windType: string;
};

class RealTime extends React.Component<any, IProps> {

    constructor(props: IProps) {
        super(props)

        this.state = {
            humidity: 48,
            temp: -5,
            weather: '晴',
            windLevel: '3级',
            windType: '南风',
        }
    }

    public render() {
        const {
            humidity,
            temp,
            weather,
            windLevel,
            windType
        } = this.state

        return (
            <div className="RealTime">
                <div className="temp">{temp}</div>
                <div className="weather">{weather}</div>
                <div className="wind">`{windType} {windLevel}`</div>
                <div className="humidity">{`湿度 ${humidity}%`}</div>
            </div>
        );
    }
}

export default RealTime;