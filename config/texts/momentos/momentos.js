const textMoments = `
Vamo Juntos criar nossa galeria album aqui
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textMoments
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textMoments}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textMoments\}/g, formattedText);
    }
  });
});
