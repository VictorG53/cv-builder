import { StyleSheet } from "@react-pdf/renderer";

export const colors = {
    black: "#111827",
    gray900: "#111827",
    gray600: "#4b5563",
    gray500: "#6b7280",
    gray400: "#9ca3af",
    gray200: "#e5e7eb",
    gray100: "#f3f4f6",
    white: "#ffffff",
};

export const s = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        paddingTop: 24,
        paddingBottom: 24,
        paddingHorizontal: 48,
        fontFamily: "SpaceMono",
        color: colors.gray900,
    },

    // Header
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 16,
    },
    headerPhotoWrapper: {
        width: 85,
        height: 85,
        borderRadius: 5,
        flexShrink: 0,
        border: `1px solid ${colors.gray200}`,
        overflow: "hidden",
    },
    headerPhoto: {
        width: "100%",
        height: "100%",
        borderRadius: 4,
        objectFit: "cover",
    },
    headerPhotoText: {
        fontSize: 7,
        color: colors.gray400,
    },
    headerInfo: {
        flex: 1,
    },
    headerContact: {
        flexDirection: "row",
        gap: 12,
        marginTop: 6,
    },
    headerContactItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
    },
    headerContactText: {
        fontSize: 10,
        color: colors.gray500,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 11,
        color: colors.gray500,
    },

    // Section
    section: {
        marginBottom: 9,
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginBottom: 6,
    },
    sectionIconBox: {
        backgroundColor: colors.gray100,
        border: `1px solid ${colors.gray200}`,
        borderRadius: 3,
        padding: 3,
        width: 18,
        height: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: "bold",
        paddingLeft: 1,
    },
    sectionBody: {
        marginLeft: 24,
    },

    // Two-column row
    twoCol: {
        flexDirection: "row",
        gap: 16,
        marginBottom: 12,
    },
    col: {
        flex: 1,
    },

    // Languages
    languageItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 3,
        borderBottom: `1px solid ${colors.gray200}`,
    },
    languageName: {
        fontSize: 8,
        fontWeight: "bold",
    },
    languageLevel: {
        fontSize: 7.5,
        color: colors.gray500,
    },

    // About
    aboutText: {
        fontSize: 8,
        color: colors.gray600,
        lineHeight: 1.6,
    },

    // Skills
    skillsWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
    },
    skillsGroup: {
        marginBottom: 4,
    },
    skillsGroupLabel: {
        fontSize: 6.5,
        color: colors.gray400,
        marginBottom: 3,
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    skillTag: {
        backgroundColor: colors.gray100,
        border: `1px solid ${colors.gray200}`,
        borderRadius: 3,
        paddingHorizontal: 3,
        paddingVertical: 1,
        fontSize: 6,
        color: "#374151",
    },

    // Timeline
    timelineItem: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 6,
    },
    timelineDotCol: {
        alignItems: "center",
        width: 10,
    },
    timelineDot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: colors.gray400,
        marginTop: 2,
    },
    timelineLine: {
        width: 1,
        backgroundColor: colors.gray200,
        flex: 1,
        marginTop: 2,
    },
    timelineContent: {
        flex: 1,
        paddingBottom: 4,
    },
    timelineTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
    },
    timelineCompany: {
        fontSize: 9,
        fontWeight: "bold",
    },
    timelineCity: {
        fontSize: 7,
        color: colors.gray400,
    },
    timelinePeriod: {
        fontSize: 7,
        color: colors.gray500,
    },
    timelineRole: {
        fontSize: 8,
        color: colors.gray500,
        marginBottom: 4,
    },
    timelineDesc: {
        fontSize: 7.5,
        color: colors.gray600,
        lineHeight: 1.5,
        marginBottom: 2,
    },

    // Diploma
    diplomaCard: {
        backgroundColor: colors.gray100,
        border: `1px solid ${colors.gray200}`,
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom: 3,
    },
    diplomaTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
    },
    diplomaTitle: {
        fontSize: 8,
        fontWeight: "bold",
    },
    diplomaYears: {
        fontSize: 7.5,
        color: colors.gray500,
    },
    diplomaSchool: {
        fontSize: 7.5,
        color: colors.gray500,
    },

    // Project
    projectCard: {
        backgroundColor: colors.gray100,
        border: `1px solid ${colors.gray200}`,
        borderRadius: 4,
        padding: 10,
        marginBottom: 6,
    },
    projectTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },
    projectTitle: {
        fontSize: 9,
        fontWeight: "bold",
    },
    projectLink: {
        fontSize: 7,
        color: colors.gray500,
    },
    projectDesc: {
        fontSize: 7.5,
        color: colors.gray600,
        lineHeight: 1.5,
        marginBottom: 6,
    },
    projectTagsWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
    },
    projectTag: {
        backgroundColor: colors.gray200,
        borderRadius: 3,
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontSize: 7,
        color: colors.gray600,
    },
});
