import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { s } from "../styles";
import { Icon } from "./Icon";

type IconName = "user" | "wrench" | "layers" | "briefcase" | "graduation-cap" | "map-pin";

export function SectionTitle({ label, icon }: { label: string; icon: IconName }) {
    return (
        <View style={s.sectionHeader}>
            <View style={s.sectionIconBox}>
                <Icon name={icon} size={10} />
            </View>
            <Text style={s.sectionTitle}>{label}</Text>
        </View>
    );
}
