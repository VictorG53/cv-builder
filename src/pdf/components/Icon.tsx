import React from "react";
import { Svg, Path, Circle, Rect } from "@react-pdf/renderer";

type IconName = "user" | "wrench" | "layers" | "briefcase" | "graduation-cap" | "map-pin" | "mail" | "phone";

const stroke = "#9ca3af";
const sw = 1.5;
const shared = { fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function Icon({ name, size = 10 }: { name: IconName; size?: number }) {
    const style = { width: size, height: size };

    switch (name) {
        case "user":
            return (
                <Svg viewBox="0 0 24 24" style={style}>
                    <Path {...shared} d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <Circle {...shared} cx="12" cy="7" r="4" />
                </Svg>
            );
        case "wrench":
            return (
                <Svg viewBox="0 0 24 24" style={style}>
                    <Path {...shared} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
                </Svg>
            );
        case "layers":
            return (
                <Svg viewBox="0 0 24 24" style={style}>
                    <Path {...shared} d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                    <Path {...shared} d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                    <Path {...shared} d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                </Svg>
            );
        case "briefcase":
            return (
                <Svg viewBox="0 0 24 24" style={style}>
                    <Path {...shared} d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <Rect {...shared} width="20" height="14" x="2" y="6" rx="2" />
                </Svg>
            );
        case "graduation-cap":
            return (
                <Svg viewBox="0 0 24 24" style={style}>
                    <Path {...shared} d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <Path {...shared} d="M22 10v6" />
                    <Path {...shared} d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </Svg>
            );
        case "mail":
            return (
                <Svg viewBox="0 0 24 24" style={style}>
                    <Rect {...shared} width="20" height="16" x="2" y="4" rx="2" />
                    <Path {...shared} d="M2 7l10 7 10-7" />
                </Svg>
            );
        case "phone":
            return (
                <Svg viewBox="0 0 24 24" style={style}>
                    <Path {...shared} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
                </Svg>
            );
        case "map-pin":
            return (
                <Svg viewBox="0 0 24 24" style={style}>
                    <Path {...shared} d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <Circle {...shared} cx="12" cy="10" r="3" />
                </Svg>
            );
    }
}
