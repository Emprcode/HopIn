const posts = [
  {
    id: 1,
    description:
      "Excellent experience! Easy booking, great vehicle selection, and friendly support. Will definitely rent again!",
    author: {
      name: "Michael Foster",
      role: "Customer",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    description:
      "Excellent experience! Easy booking, great vehicle selection, and friendly support. Will definitely rent again!",
    author: {
      name: "Michael Foster",
      role: "Customer",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    description:
      "Excellent experience! Easy booking, great vehicle selection, and friendly support. Will definitely rent again!",
    author: {
      name: "Michael Foster",
      role: "Customer",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    description:
      "Excellent experience! Easy booking, great vehicle selection, and friendly support. Will definitely rent again!",
    author: {
      name: "Michael Foster",
      role: "Customer",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    description:
      "Excellent experience! Easy booking, great vehicle selection, and friendly support. Will definitely rent again!",
    author: {
      name: "Michael Foster",
      role: "Customer",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const Testomonial = () => {
  return (
    <div className="sm:py-12 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            why choose us!
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What our customer has to say
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Customer satisfaction is our only vision.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between p-5 rounded-lg shadow-lg border-solid border-2 border-indigo-100 shadow-indigo-400/50"
            >
              <div className="group relative">
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
