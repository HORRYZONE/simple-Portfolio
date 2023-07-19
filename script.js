// JavaScript code goes here

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
  tab.addEventListener('click', async () => {
    const tabId = tab.getAttribute('data-tab');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');
    
    tab.classList.add('active');
    
    try {
      const response = await fetch(`${tabId}.html`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${tabId} content`);
      }
      const tabHTML = await response.text();
      document.getElementById(`${tabId}-content`).innerHTML = tabHTML;
      document.getElementById(`${tabId}-content`).style.display = 'block';
    } catch (error) {
      console.error(error);
    }
  });
});

