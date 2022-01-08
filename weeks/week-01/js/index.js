const storyList = document.querySelector('#story-list');
const mainMessage = document.querySelector('#main-message');
const nameMessage = document.querySelector('#name-message');
const contentMessage = document.querySelector('#content-message');
const saveButton = document.querySelector('#save-button');
const displayStory = document.querySelector('#display-story');
let isEditing = false;

/* 
 *  Story List 
 */
if (localStorage.length > 0) {
  // Items exist

  for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    const story = localStorage.getItem(name);
    const li = document.createElement('li');
    li.textContent = name;

    li.addEventListener('click', () => {
      displayStory.innerHTML = String.raw`
        <h4>${name}</h4>
        <p>${story}</p>
        <button type="button" id="edit-button">Edit Story</button>
        <button type="button" id="delete-button">Delete Story</button>
      `;

      const editButton = document.querySelector('#edit-button');
      const deleteButton = document.querySelector('#delete-button');

      editButton.addEventListener('click', () => {
        isEditing = true;
        displayStory.innerHTML = '';
        document.querySelector('#story-name').value = name;
        document.querySelector('#story-content').value = story;
      });

      deleteButton.addEventListener('click', () => {
        localStorage.removeItem(name);
        location.reload();
      });
    });

    storyList.appendChild(li);
  }

} else {
  // No items yet

  storyList.textContent = 'No stories yet. Write one to get started!';

}

/* 
 *  Save Story button
 */
saveButton.addEventListener('click', () => {
  const storyName = document.querySelector('#story-name').value;
  const storyContent = document.querySelector('#story-content').value;

  const addStory = (type) => {
    // Created a function since used in editing and initial creation

    localStorage.setItem(storyName, storyContent);
    nameMessage.textContent = '';
    contentMessage.textContent = '';
    mainMessage.classList.remove('error-message');
    mainMessage.classList.add('success-message');
    mainMessage.textContent = `${type} story successfull!`;
    document.querySelector('#story-name').value = '';
    document.querySelector('#story-content').value = '';

    // Finish the addition/edit by refreshing the page
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  mainMessage.textContent = '';

  if (storyName === '' || storyContent === '') {
    // Something is missing

    if (storyName === '') {
      nameMessage.textContent = 'Please add a name and try again!'
    }
  
    if (storyContent === '') {
      contentMessage.textContent = 'Please add a story and try again!'
    }

  } else if (localStorage.getItem(storyName) != null) {
    // Story name already exists; check if editing

    if (isEditing) {
      // Edit story

      addStory('Edit');
      isEditing = false;

    } else {
      // Display error message

    nameMessage.textContent = '';
    contentMessage.textContent = '';
    mainMessage.classList.remove('success-message');
    mainMessage.classList.add('error-message');
    mainMessage.textContent = 'This story name already exists. Please choose a new name or edit the existing story.';

    }

  } else {
    // Add new story

    addStory('Add');
  }
});