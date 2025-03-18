// src/utils/extractText.js
export function extractText(json) {
    return json.data.ueberMich.aboutUs.value.document.children.map(
        (item) => item.children[0].value
    );
}