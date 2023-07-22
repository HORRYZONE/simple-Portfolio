
const tagNavItems = document.querySelectorAll('.tag-nav-item');
    const cards = document.querySelectorAll('.card');

    tagNavItems.forEach(item => {
      item.addEventListener('click', () => {
        const selectedTag = item.getAttribute('data-tag');

        tagNavItems.forEach(item => item.classList.remove('active'));
        cards.forEach(card => card.style.display = 'none');

        item.classList.add('active');

        if (selectedTag === 'all') {
          cards.forEach(card => card.style.display = 'block');
        } else {
          const filteredCards = document.querySelectorAll(`[data-tags*="${selectedTag}"]`);
          filteredCards.forEach(card => card.style.display = 'block');
        }
      });
    });

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');

        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.querySelector(`[data-tab="${tabId}-content"]`).classList.add('active');
      });
    });

document.addEventListener('DOMContentLoaded', function() {
  // Add the typewriter effect to the "About content" section
  const typewriterElement = document.getElementById('typewriter-container');
  const aboutText = "Hi, I'm Danish";
  let typewriterIndex = 0;

  function typewriter() {
    typewriterElement.textContent = aboutText.slice(0, typewriterIndex);
    typewriterIndex++;

    if (typewriterIndex <= aboutText.length) {
      setTimeout(typewriter, 150); // Adjust the typing speed here (in milliseconds)
    }
  }

  typewriter();

});

