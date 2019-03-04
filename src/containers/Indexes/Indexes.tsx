import * as React from 'react';

export default class Indexes extends React.Component {
    public render() {
        const Index = () => (
            <div className="Index">
                <div className="level">适宜</div>
                <div className="name">洗车指数</div>
            </div>
        )

        return (
            <div className="Indexes">
                <Index />
                <Index />
                <Index />
                <Index />
                <Index />
                <Index />
            </div>
        );
    }
}