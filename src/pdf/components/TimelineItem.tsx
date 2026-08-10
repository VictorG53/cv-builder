import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { s } from "../styles";
import { Icon } from "./Icon";

type Props = {
    company: string;
    period: string;
    role: string;
    city: string;
    description: readonly string[];
    hasLine?: boolean;
};

export function TimelineItem({
    company,
    period,
    role,
    city,
    description,
    hasLine = true,
}: Props) {
    return (
        <View style={s.timelineItem}>
            <View style={s.timelineDotCol}>
                <View style={s.timelineDot} />
                {hasLine && <View style={s.timelineLine} />}
            </View>
            <View style={s.timelineContent}>
                <View style={s.timelineTop}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <Text style={s.timelineCompany}>{company}</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <Icon name="map-pin" size={8} />
                            <Text style={s.timelineCity}>{city}</Text>
                        </View>
                    </View>
                    <Text style={s.timelinePeriod}>{period}</Text>
                </View>
                <Text style={s.timelineRole}>{role}</Text>
                {description.map((line, i) => (
                    <Text key={i} style={s.timelineDesc}>
                        &gt; {line}
                    </Text>
                ))}
            </View>
        </View>
    );
}
