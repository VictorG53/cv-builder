import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import "./fonts";
import { s } from "./styles";
import { SectionTitle } from "./components/SectionTitle";
import { Icon } from "./components/Icon";
import { SkillTag } from "./components/SkillTag";
import { TimelineItem } from "./components/TimelineItem";
import { DiplomaCard } from "./components/DiplomaCard";
import type { CVData, Lang } from "../types";
import { formatPhone } from "../formatPhone";
import { pdfLabels } from "../i18n/pdfLabels";

function isEmptyData(data: CVData) {
    return (
        !data.name &&
        !data.subtitle &&
        !data.email &&
        !data.phone &&
        !data.photo &&
        !data.about &&
        data.diplomas.length === 0 &&
        data.experience.length === 0 &&
        data.hardSkills.length === 0 &&
        data.softSkills.length === 0 &&
        data.languages.length === 0
    );
}

export function CVDocument({ data, lang }: { data: CVData; lang: Lang }) {
    const labels = pdfLabels[lang];

    if (isEmptyData(data)) {
        return (
            <Document>
                <Page size="A4" style={s.page}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 12,
                                color: "#9ca3af",
                                textAlign: "center",
                            }}
                        >
                            {labels.emptyState}
                        </Text>
                    </View>
                </Page>
            </Document>
        );
    }

    return (
        <Document>
            <Page size="A4" style={s.page}>
                {/* Header */}
                <View style={s.header}>
                    {data.photo && (
                        <View style={s.headerPhotoWrapper}>
                            <Image src={data.photo} style={s.headerPhoto} />
                        </View>
                    )}
                    <View style={s.headerInfo}>
                        <Text style={s.name}>{data.name}</Text>
                        <Text style={s.subtitle}>{data.subtitle}</Text>
                        <View style={s.headerContact}>
                            {data.email && (
                                <View style={s.headerContactItem}>
                                    <Icon name="mail" size={12} />
                                    <Text style={s.headerContactText}>
                                        {data.email}
                                    </Text>
                                </View>
                            )}
                            {data.phone && (
                                <View style={s.headerContactItem}>
                                    <Icon name="phone" size={12} />
                                    <Text style={s.headerContactText}>
                                        {formatPhone(data.phone)}
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>

                {/* About */}
                {data.about && (
                    <View style={s.section}>
                        <SectionTitle label={labels.about} icon="user" />
                        <View style={s.sectionBody}>
                            <Text style={s.aboutText}>{data.about}</Text>
                        </View>
                    </View>
                )}

                {/* Diplomas */}
                {data.diplomas.length > 0 && (
                    <View style={s.section}>
                        <SectionTitle
                            label={labels.diplomas}
                            icon="graduation-cap"
                        />
                        <View style={s.sectionBody}>
                            {data.diplomas.map((d, i) => (
                                <DiplomaCard
                                    key={i}
                                    title={d.title}
                                    years={d.years}
                                    school={d.school}
                                />
                            ))}
                        </View>
                    </View>
                )}

                {/* Experience */}
                {data.experience.length > 0 && (
                    <View style={s.section}>
                        <SectionTitle
                            label={labels.experience}
                            icon="briefcase"
                        />
                        <View style={s.sectionBody}>
                            {data.experience.map((job, i) => (
                                <TimelineItem
                                    key={i}
                                    company={job.company}
                                    period={job.period}
                                    role={job.role}
                                    city={job.city}
                                    description={job.description}
                                    hasLine={i < data.experience.length - 1}
                                />
                            ))}
                        </View>
                    </View>
                )}

                {/* Skills + Languages */}
                <View style={s.twoCol}>
                    {(data.hardSkills.length > 0 ||
                        data.softSkills.length > 0) && (
                        <View style={s.col}>
                            <SectionTitle
                                label={labels.skills}
                                icon="wrench"
                            />
                            <View style={s.sectionBody}>
                                {data.hardSkills.length > 0 && (
                                    <View style={s.skillsGroup}>
                                        <Text style={s.skillsGroupLabel}>
                                            {labels.hardSkills}
                                        </Text>
                                        <View style={s.skillsWrap}>
                                            {data.hardSkills.map((skill) => (
                                                <SkillTag
                                                    key={skill}
                                                    name={skill}
                                                />
                                            ))}
                                        </View>
                                    </View>
                                )}
                                {data.softSkills.length > 0 && (
                                    <View style={s.skillsGroup}>
                                        <Text style={s.skillsGroupLabel}>
                                            {labels.softSkills}
                                        </Text>
                                        <View style={s.skillsWrap}>
                                            {data.softSkills.map((skill) => (
                                                <SkillTag
                                                    key={skill}
                                                    name={skill}
                                                />
                                            ))}
                                        </View>
                                    </View>
                                )}
                            </View>
                        </View>
                    )}
                    {data.languages.length > 0 && (
                        <View style={{ width: 200 }}>
                            <SectionTitle
                                label={labels.languages}
                                icon="user"
                            />
                            <View style={s.sectionBody}>
                                {data.languages.map((lang, i) => (
                                    <View key={i} style={s.languageItem}>
                                        <Text style={s.languageName}>
                                            {lang.name}
                                        </Text>
                                        <Text style={s.languageLevel}>
                                            {lang.level}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    );
}
