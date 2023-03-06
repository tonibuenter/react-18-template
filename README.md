# Fetch-on-Render

Traditionally fetch-on-render such as:

```
useEffect(() => {
  fetchSomething().then(setState);
}, []);
```

Leads to the waterfall problem if used in a hierarchy of components which results in adding the request times.


Solution: bundle remote calls together (if possible)!


# Fetch-Then-Render
