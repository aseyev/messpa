import React from 'react'

export const deletePost = (id) => {
    return {
        type: "DELETE_POST",
        id
    }
}


