import fetch from "node-fetch";

// fetch('https://jsonplacehold.typicode.com/todos/1')
// .then((firstToDo) => firstToDo.json())
// .then(jsonData => console.log(jsonData))
// .catch((err) => console.log("Error Received in response:: " + err))

async function myAsyncFunction() {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await userResponse.json();

    const user = users[1];

    console.log(user);

    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+user.id);

    const posts = await postsResponse.json();

    console.log(posts);
}

myAsyncFunction();