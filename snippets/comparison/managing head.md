# Managing head
In the pages directory, the next/head React component is used to manage <head> HTML elements such as title and meta . In the app directory, next/head is replaced with a new head.js special file.

## Before
```jsx
// pages/posts/[id].js
import Head from 'next/head'
import {useRouter} from 'next/router'

export default function PostPage() {
  const {params} = useRouter();

  return (
    <>
      <Head>
        <title>My post - {params.id}</title>
      </Head>
      <main>
        <h1>My page</h1>
      </main>
    </>
  )
}
```

## After
```jsx
// app/posts/[id]/page.js
export default function PostPage() {
  return (
    <main>
      <h1>My page</h1>
    </main>
  )
}
```

```jsx
// app/posts/[id]/head.js
export default function Head({params}) {
  return (
    <>
      <title>My post - {params.id}</title>
    </>
  )
}
```