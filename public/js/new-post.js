const newPostHandler = async (event) => {
    event.preventDefault()
    console.log('clicked')

    const title = document.querySelector('#post-title').value.trim()
    const content = document.querySelector('#post-content').value.trim()

    if (title && content) {
        const response = await fetch('../controllers/api/posts.js', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to create post')
        }
    }
}
// click or submit?
document.querySelector('#create-post').addEventListener('click', newPostHandler)