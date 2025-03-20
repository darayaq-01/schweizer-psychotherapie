/* // src/utils/extractText.js
export function extractText(json, path ) {
  const target = path.split('.').reduce((acc, key) => acc?.[key], json.data);
  return target.value.document.children.map(
    (item) => {
      // console.log({item});
      return item.children[0].value;
    }
  )} */
 // src/utils/extractText.js
// src/utils/extractText.js
// src/utils/extractText.js
// src/utils/extractText.js
export function extractText(json, path = 'ueberMich.aboutUs') {
  const target = path.split('.').reduce((acc, key) => acc?.[key], json.data);

  const processInline = (nodes) => {
    return nodes.map(node => {
      if (node.type === 'link') {
        return `<a href="${node.url}" class="link">${processInline(node.children)}</a>`;
      }
      return node.value || processInline(node.children || []);
    }).join('');
  };

  return target.value.document.children.map(block => {
    // Bloques de párrafo
    if (block.type === 'paragraph') {
      return `<p>${processInline(block.children)}</p>`;
    }
    
    // Bloques de lista
    if (block.type === 'list') {
      const items = block.children.map(item => 
        `<li>${processInline(item.children)}</li>`
      ).join('');
      return block.listType === 'numbered' ? `<ol>${items}</ol>` : `<ul>${items}</ul>`;
    }

    // Bloques de encabezado (h1-h6)
    if (/^heading/.test(block.type)) {
      const level = block.type.replace('heading', '');
      return `<h${level}>${processInline(block.children)}</h${level}>`;
    }

    return '';
  });
}