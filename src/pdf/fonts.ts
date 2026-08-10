import { Font } from "@react-pdf/renderer";

Font.register({
    family: "SpaceMono",
    fonts: [
        { src: "/fonts/SpaceMono-Regular.ttf", fontWeight: "normal" },
        { src: "/fonts/SpaceMono-Bold.ttf", fontWeight: "bold" },
    ],
});
