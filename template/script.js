document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('userInput');
  const reverseBtn = document.getElementById('reverseBtn');
  const resultDisplay = document.getElementById('result');
  const copyBtn = document.getElementById('copyBtn');

  // Escuchar cada pulsación de tecla para validar la longitud
  input.addEventListener('input', () => {
    const textLength = input.value.length;

    // El botón aparece solo si hay más de 3 letras (>3)
    if (textLength > 3) {
      reverseBtn.style.display = 'flex';
    } else {
      reverseBtn.style.display = 'none';
      // Opcional: limpiar el resultado si el texto es muy corto
      resultDisplay.textContent = '';
      copyBtn.style.display = 'none';
    }
  });

  const reverseString = () => {
    const text = input.value;
    const reversed = text.split('').reverse().join('');
    resultDisplay.textContent = reversed;

    if (reversed.length > 0) {
      copyBtn.style.display = 'flex';
    }
  };

  reverseBtn.addEventListener('click', reverseString);

  // Copiar al portapapeles
  copyBtn.addEventListener('click', () => {
    const textToCopy = resultDisplay.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = 'Copied! ✅';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    });
  });
});
