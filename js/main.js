// Build table of contents
const displayLinks = (items, list) => {
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="${item.url}">${item.label}</a>
    `;
    list.appendChild(li);
  });
}

// Fetch the data and send to build function
fetch('data/data.json')
.then(response => response.json())
.then(data => {
  const links = data.links;
  const linksList = document.querySelector('#links-list');
  displayLinks(links, linksList);
});