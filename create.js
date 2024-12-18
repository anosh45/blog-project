// // Handle blog form submission
// document.getElementById('blogForm').addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     // Get form values
//     const title = document.getElementById('title').value;
//     const content = document.getElementById('content').value;
  
//     // Create a new blog post element
//     const blogPost = document.createElement('div');
//     blogPost.classList.add('blog-post');
//     blogPost.innerHTML = `
//       <h3>${title}</h3>
//       <p>${content}</p>
//     `;
  
//     // Append the blog post to the display area
//     document.getElementById('blogs').appendChild(blogPost);
  
//     // Clear the form
//     document.getElementById('blogForm').reset();
//   });
  document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    // Create a blog post container
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
  
    // Blog content
    blogPost.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
  
    // Append the blog post to the display section
    document.getElementById('blogs').appendChild(blogPost);
  
    // Clear the form after posting
    document.getElementById('blogForm').reset();
  });
  
  // Event delegation for Edit and Delete
  document.getElementById('blogs').addEventListener('click', function (event) {
    const target = event.target;
  
    // If Edit button is clicked
    if (target.classList.contains('edit-btn')) {
      const blogPost = target.parentElement;
      const currentTitle = blogPost.querySelector('h3').innerText;
      const currentContent = blogPost.querySelector('p').innerText;
  
      // Pre-fill the form with current blog data
      document.getElementById('title').value = currentTitle;
      document.getElementById('content').value = currentContent;
  
      // Remove the current blog post
      blogPost.remove();
    }
  
    // If Delete button is clicked
    if (target.classList.contains('delete-btn')) {
      const blogPost = target.parentElement;
      blogPost.remove();
    }
  });