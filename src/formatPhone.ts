export function formatPhone(phone: string) {
    const digits = phone.replace(/\D/g, "");
    // Non-breaking space: react-pdf collapses plain ASCII spaces in Text layout.
    return digits.replace(/(.{2})(?=.)/g, "$1\u00A0");
}
