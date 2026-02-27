document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('userInput');
  const resultDisplay = document.getElementById('result');
  const copyBtn = document.getElementById('copyBtn');

  // Escuchar cambios en tiempo real
  input.addEventListener('input', () => {
    const text = input.value;

    // Verificamos si hay más de 3 letras
    if (text.length > 3) {
      // Invertimos el string
      const reversed = text.split('').reverse().join('');

      // Mostramos el resultado y el botón de copiar
      resultDisplay.textContent = reversed;
      copyBtn.style.display = 'flex';
    } else {
      // Si hay 3 letras o menos, limpiamos y ocultamos
      resultDisplay.textContent = '';
      copyBtn.style.display = 'none';
    }
  });

  // Funcionalidad para copiar al portapapeles
  copyBtn.addEventListener('click', () => {
    const textToCopy = resultDisplay.textContent;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalContent = copyBtn.innerHTML;
        copyBtn.innerHTML = 'Copied! ✅';
        setTimeout(() => {
          copyBtn.innerHTML = originalContent;
        }, 2000);
      });
    }
  });
});
