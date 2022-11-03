# Lesson plan
  
---
```
  const [counter1, setCounter1] = useState(0)
```

and then
```
      <div className="col1">
        <div className="inlineB">
          <p className="num">{counter1}</p>
          <button className="minus" onClick={() => setCounter1(counter1 -1)}>-</button>
          <button className="plus" onClick={() => setCounter1(counter1 +1)}>+</button>
        </div>
      </div>
```