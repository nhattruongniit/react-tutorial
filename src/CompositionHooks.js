import React from 'react';

function Contacts() {
  return (
    <div className="contact">this is contacts</div>
  )
}

function Chats() {
  return (
    <div className="chats">this is chats</div>
  )
}

function SplitPane({ left, right }) {
  return (
    <>
      <div className="splitPane-left">{left}</div>
      <div className="splitPane-right">{right}</div>
    </>
  )
}

export default function CompositionHook() {
  return (
    <div className="splitPane">
      <SplitPane
        left={<Contacts />}
        right={<Chats />}
      />

      
    </div>
  )
}