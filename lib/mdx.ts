const inlineFormat = (text: string) =>
  text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.*?)`/g, "<code>$1</code>");

export const renderSimpleMdx = (source: string) => {
  const lines = source.split("\n");
  let html = "";
  let inList = false;

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h2>${inlineFormat(line.replace("## ", ""))}</h2>`;
      return;
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inlineFormat(line.replace("- ", ""))}</li>`;
      return;
    }

    if (!line.trim()) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      return;
    }

    html += `<p>${inlineFormat(line)}</p>`;
  });

  if (inList) html += "</ul>";
  return html;
};
