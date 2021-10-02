# reddit-client-practice

Simple Reddit client that shows the top 50 entries from Reddit - www.reddit.com/top

Implemented using NextJS, a ReactJS framework - used it because I'm familiar with it, it's pretty straight-forward for deployment with Vercel() and it has some great useful features like running in dev mode with hot reloading, server/client side rendering, easy git integration, automatic build on push, and others.

Additionally used SemanticUI for the views for a couple of reasons, first obviously is having a stylish look and some pre-made components to make things easier, and secondly it handles basic responsiveness pretty well.

Integrated Redux with react-redux.

For fetching the json data from Reddit api, I initially attempted to use just a *fetch* method but that had some issues due to a CORS preventive measure, so I used *useSWR* as I've used it reliably in the past and it also makes the handling of error and responses a bit easier.

The running app can be visited in https://reddit-client-practice.vercel.app/
