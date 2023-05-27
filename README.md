# Next.js workshop - App dir
During this workshop we will learn Next.js app dir basics, including:

* Streaming and suspense
* Nested layouts
* New app dir defaults
* Comparison with pages
* Accessing request object
* Data fetching
* Loading fonts

And more.

## Exercises
Our team decided to migrate this app from the Next.js basics workshop, from pages to app dir. You were assigned for the task.

Don't forget to:
* Pass a locale to the Schedule component
* Ensure the Rating component still works after the migration
* Show a skeleton while fetching information for the rating component
* Use nested layouts if needed

Also, the information of the store won't change. We also want to be sure the ratings are always up to date and we can revalidate the schedule information every 15 minutes.

## Bonus
* Re-implement the `rating` endpoint as a route handler.
* Re-implement the `visitors` endpoint as a route handler using a DB.

## Resources
You can find some snippets in the [snippets](./snippets) folder or slides in [here](https://docs.google.com/presentation/d/1UIscklSUjKq2DbRLT4qAGHbXEYhUZbEZs2BragMElfg/edit?usp=sharing).
