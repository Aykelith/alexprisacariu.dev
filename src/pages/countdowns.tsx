//= Functions & Modules
// Own
import { useConstructor } from "../utils/useConstructor";
// Others
import React, { useState, useRef } from "react";

export default function CountdownsPage() {
    return (
        <div id="CountdownsPage" className="page">
            <div className="box">
                <main className="flex flex-col gap-3 items-center">
                    <Countdown 
                        title="Pay day"
                        calculateDate={() => {
                            const currentDate = new Date();
                            if (currentDate.getDate() >= 12 && currentDate.getHours() >= 10) {
                                currentDate.setMonth(currentDate.getMonth() + 1);
                            }

                            currentDate.setDate(12);
                            currentDate.setHours(10, 0, 0);

                            if (currentDate.getDay() === 0) {
                                currentDate.setDate(10);
                            } else if (currentDate.getDay() === 6) {
                                currentDate.setDate(11);
                            }

                            return currentDate;
                        }}
                    />
                    <Countdown 
                        title="Days in Rubrikk"
                        calculateDate={() => new Date(2022, 7, 26)}
                        fromGivenDate={true}
                    />
                    <Countdown 
                        title="Wedding"
                        calculateDate={() => new Date(2024, 3, 14)}
                    />
                </main>
            </div>
        </div>
    );
}

const OneSecondInMs = 1000;
const OneMinuteInMs = 60 * OneSecondInMs;
const OneHourInMs = 60 * OneMinuteInMs;
const OneDayInMs = 24 * OneHourInMs;

type CountdownProps = {
    title: String;
    calculateDate: () => Date;
    fromGivenDate?: boolean;
    addSeconds?: boolean;
};

function Countdown({ title, calculateDate, fromGivenDate, addSeconds }: CountdownProps) {
    const [countdownText, setCountdownText] = useState("");
    const countdownDate = useRef(0);
    const intervalID = useRef(null);

    useConstructor(() => {
        countdownDate.current = calculateDate().getTime();

        const calculateDifference = fromGivenDate
            ? (givenCountdownDate: number) => Date.now() - givenCountdownDate
            : (givenCountdownDate: number) => givenCountdownDate - Date.now();

        intervalID.current = setInterval(
            () => {
                let difference = calculateDifference(countdownDate.current);
                if (difference < 0) {
                    countdownDate.current = calculateDate().getTime();
                    difference = calculateDifference(countdownDate.current);
                }

                const days = Math.floor(difference / OneDayInMs);
                if (days) difference -= days * OneDayInMs;

                const hours = Math.floor(difference / OneHourInMs);
                if (hours) difference -= hours * OneHourInMs;

                const minutes = Math.floor(difference / OneMinuteInMs);
                if (minutes) difference -= minutes * OneMinuteInMs;

                const seconds = Math.floor(difference / OneSecondInMs);

                setCountdownText(`${days ? `${days}d ` : ''}${!days && !hours ? '' : `${hours}h `}${!days && !hours && !minutes ? '' : `${minutes}m `}${addSeconds ? `${seconds}s` : ''}`);
            },
            1000
        );
    });
    
    return (
        <div className="flex flex-col items-center">
            <div className="font-bold text-lg">{title}</div>
            <div>{countdownText}</div>
        </div>
    );
}

