# Welome to React 18 Template

Purpose of this repository to unlock and visualize react 18 features including popular compatible libraries such as:
- mui
- react-router-dom
- redux toolkit
- and more...



## Pattern for Fetch and Render

### Fetch-on-Render

Traditionally fetch-on-render such as:

```
useEffect(() => {
  fetchSomething().then(setState);
}, []);
```

Leads to the waterfall problem if used in a hierarchy of components which results in adding the request times.


Solution: bundle remote calls together (if possible)!


### Fetch-Then-Render
