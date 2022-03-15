# dcs-permalinks-box

Permalinks utility for DCS, and general, soon to be converted to an styleguidist RHL.

## TODO:

### Have default fetchable paths

For example:
Organization, language and resource would be retrievable paths, meaning that as long as they are part of the path structure declared with the

```js
["organization", "language", "resource"];
```

array, and any of these paths match the url, as in (/unfoldingWord/en/ult), the library will attempt to fetch the data from Gitea API using the data provided in the url.

### Dynamic urls depending on app data

The library should allow to input the data that each path should contain. If data is provided, then the library should change the url to match that data.

Example:

```js
const Component = ({ organization, language, resource }) => {
  const { data } = usePermalinks({
    routes: [
      {
        entry: "",
        path: ["organization", "language", "resource"],
        input: { organization, language, resource }, //The library will use this object to fill data for the matching path part and change url accordingly.
        inputFirst: true,
        fetch: true
      }
    ]
  });
};
```
