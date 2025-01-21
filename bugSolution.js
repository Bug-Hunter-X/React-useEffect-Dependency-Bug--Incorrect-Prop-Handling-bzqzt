```javascript
function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Setting count based on current props.name value
    if (props.name === 'Initial') {
      setCount(1);
    } else if (props.name === 'Changed') {
      setCount(2);
    }
  }, [props.name]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```