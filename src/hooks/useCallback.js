import React, { useState, useMemo, useCallback, useEffect } from "react";

const ChildComponent = ({ action }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const val = action();
    setValue(val);
  });

  return <div>Child: {value}</div>;
};

const HooksCallBack = () => {
  const [callbackCount, setCallbackCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  const memoFunction = () => {
    console.log("memo called: ", memoCount);
  };

  // Here if we give an empty array of dependencies, the callback function will return the old value of callbackCount
  // because useCallback will return its memoized version
  const callBackFunction = useCallback(() => {
    console.log("callback called: ", callbackCount);
    return callbackCount;
  }, [callbackCount]);

  // We create the memo hook, when memoCount changes, the function will be executed again
  useMemo(memoFunction, [memoCount]);

  return (
    <>
      <div>
        <h2>React Hooks useCallback & useMemo</h2>
        <p>
          1/ Both of them take a function and an array of dependencies as
          parameters like ‘useEffect’. The function’s return value will only be
          changed if one of the dependencies value changes — otherwise a cached
          value will be returned.
        </p>
        <p>
          useCallback( <span>doSomething()</span> }, [dependencies]) <br />{" "}
          <br />
          useMemo(() => {<span>doSomething()</span>}, [dependencies])
          <br /> <br />
          useEffect(() => {<span>doSomething()</span>}, [dependencies])
          <br />
        </p>
        <br />
        <p>
          2/ Note that passing an empty array of dependencies will cause the
          Hook to execute the function once but passing it no array at all will
          return a new value on every call.
        </p>
        <p>useCallback(() => {<span>doSomethingOnce()</span>}, [])</p>
        <br />
        <p>
          3/ The main difference between the two is that ‘useCallback’ returns a
          memoized callback and ‘useMemo’ returns a memoized value that is the
          result of the function parameter.
        </p>
        <br />
        <p>
          4/ If you have to process a lot of data, ‘useMemo’ is the perfect Hook
          as it will do the work once at the first render and then return a
          cached version on every other render.
        </p>
        <br />
        <p>
          5/ ‘useCallback’, however, is used differently. Take for example a
          parent component that often re-renders. Inside the parent, we have a
          child component that takes a function-prop. At each re-render, the
          Child will re-execute its function prop uselessly. However, if you
          pass ‘useCallback’ as a prop with a dependency array, it resolves the
          issue because the function will be executed only when the dependency
          changes. Every other re-render will then get a cached function.
        </p>
        <br />
        <p>
          6/ Now you should be ready to optimise your code with React Hooks. <b>To recap: you should not use ‘useCallback’ and ‘useMemo’ for everything. ‘useMemo’ should be used for big data processing while ‘useCallback’ is a way to add more dependency to your code to avoid useless rendering.</b>
        </p>
      </div>
      <h1>Demo</h1>
      <ChildComponent action={callBackFunction} /> <br />
      {/* Change the callback hook dependency to trigger a change in the child */}
      <button onClick={() => setCallbackCount(callbackCount + 1)}>
        Change callback count
      </button>
      <br />
      <br />
      {/* After creating useMemo, each change of memoCount will trigger the function passed to the hook,
        otherwise the memoized value will be returned */}
      <button type="button" onClick={() => setMemoCount(memoCount + 1)}>
        Change memo count
      </button>
    </>
  );
};

export default HooksCallBack;

// https://blog.hackages.io/react-hooks-usecallback-and-usememo-8d5bb2b67231?gi=b6b600e3ebc7
// https://kentcdodds.com/blog/usememo-and-usecallback