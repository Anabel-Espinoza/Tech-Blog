const newCommentHandler = async (event) => {
    event.preventDefault()
    console.log('clicked')

    const body = document.querySelector('.comment-input').value.trim()
    const post_id = event.target.getAttribute('data-id')
    console.log(post_id)

    if (body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ body, post_id }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.reload()
        } else {
            alert('Failed to post comment')
        }
    }
}

document.querySelector('.new-comment').addEventListener('submit', newCommentHandler)
console.log('new-comment js')