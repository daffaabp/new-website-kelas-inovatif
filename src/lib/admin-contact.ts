/**
 * Nomor WhatsApp admin — satu sumber (hardcode). Ubah di sini saja.
 */
const DIGITS = "62895402122395";

export const ADMIN_WHATSAPP_DIGITS = DIGITS;

const compact =
    DIGITS.startsWith("62") && DIGITS.length >= 11 ? `0${DIGITS.slice(2)}` : DIGITS;

/** Contoh: 095402122395 */
export const ADMIN_PHONE_DISPLAY_COMPACT = compact;

/** Contoh: 0954-0212-2395 */
export const ADMIN_PHONE_DISPLAY_DASHED =
    compact.length >= 10 && compact.startsWith("0")
        ? `${compact.slice(0, 4)}-${compact.slice(4, 8)}-${compact.slice(8)}`
        : compact;

/** `https://wa.me/628…` — tanpa query */
export function waMeBase(): string {
    return `https://wa.me/${ADMIN_WHATSAPP_DIGITS}`;
}

/** Pesan teks biasa; query `text` di-encode. */
export function waMeUrl(plainText: string): string {
    return `${waMeBase()}?text=${encodeURIComponent(plainText)}`;
}
