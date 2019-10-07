import React, { memo, useCallback } from "react";

function Logout({ username, onLogout }) {
  console.log("========render logout========");
  return <div onClick={onLogout}>Logout {username}</div>;
}

const MemoizedLogout = memo(Logout);

export default function UseMemo() {
  const onLogout = useCallback(() => cookies.clear(), [cookies]);
  return (
    <>
      <MemoizedLogout username="truong" onLogout={onLogout} />
    </>
  );
}

// refer: https://dmitripavlutin.com/use-react-memo-wisely/
