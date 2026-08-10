import { View, Text } from "@react-pdf/renderer";
import { s } from "../styles";
import { Icon } from "./Icon";

type Props = {
    title: string;
    years: string;
    school: string;
};

export function DiplomaCard({ title, years, school }: Props) {
    return (
        <View style={s.diplomaCard}>
            <View style={s.diplomaTop}>
                <Text style={s.diplomaTitle}>{title}</Text>
                <Text style={s.diplomaYears}>{years}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                <Icon name="map-pin" size={8} />
                <Text style={s.diplomaSchool}>{school}</Text>
            </View>
        </View>
    );
}
