import React from "react";

const initState = {
    posts: [
        {
            userId: "1",
            id: "10",
            title: "optio molestias id quia eum",
            body:
                "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        },
        {
            userId: "2",
            id: "11",
            title: "et ea vero quia laudantium autem",
            body:
                "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
        },
        {
            userId: "2",
            id: "12",
            title: "in quibusdam tempore odit est dolorem",
            body:
                "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        }
    ]
};

export const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_POST") {
        let newPosts = state.posts.filter(post => post.id !== action.id )
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
};