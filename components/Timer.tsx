import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
export default function Timer() {
    const counter = new Date('May 5,2024 9:30:00').getTime();
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            var now = new Date().getTime();
            var timelapsed = counter - now;
            var min = Math.floor((timelapsed % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((timelapsed % (1000 * 60)) / 1000);
            setDay(Math.floor(timelapsed / (1000 * 60 * 60 * 24)));
            setHour(Math.floor((timelapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinute(min);
            setSecond(sec);
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div className="flex flex-row justify-evently gap-3 m-5 p-6">
            <Card className="dark">
                <CardContent>
                    <h1 className="text-white font-bold text-[25px]">{day < 10 ? '0' + day : day}</h1>
                    <p>days</p>
                </CardContent>
            </Card>
            <Card className="dark">
                <CardContent>
                    <h1 className="text-white font-bold text-[25px]">{hour < 10 ? '0' + hour : hour}</h1>
                    <p>hrs</p>
                </CardContent>
            </Card>
            <Card className="dark">
                <CardContent>
                    <h1 className="text-white font-bold text-[25px]">{minute < 10 ? '0' + minute : minute}</h1>
                    <p>mins</p>
                </CardContent>
            </Card>
            <Card className="dark">
                <CardContent>
                    <h1 className="text-white font-bold text-[25px]">{second < 10 ? '0' + second : second}</h1>
                    <p>secs</p>
                </CardContent>
            </Card>
        </div>
    );
}
