import React from "react";
import { Text } from "@react-pdf/renderer";
import { s } from "../styles";

export function SkillTag({ name }: { name: string }) {
    return <Text style={s.skillTag}>{name}</Text>;
}
