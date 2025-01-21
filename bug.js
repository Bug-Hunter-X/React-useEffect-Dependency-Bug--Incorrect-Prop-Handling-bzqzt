```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Setting count to 1 only once, regardless of props.name change
    if (props.name === 'Initial') {
      setCount(1);
    }
  }, [props.name]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```