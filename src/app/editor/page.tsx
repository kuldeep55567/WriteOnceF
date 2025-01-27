import React from 'react'
import Editor from '@/components/blogs/editor'
function page() {
    return (
        <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-center mt-10">
                Create Your Blog Post
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 text-center">
                Start writing your amazing blog post below using the editor!
            </p>
            <Editor />
        </div>
    )
}

export default page
