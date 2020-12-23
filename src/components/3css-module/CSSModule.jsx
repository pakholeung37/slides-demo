import React from "react"
// import s from "./index.module.scss"

export function CSSModule() {
  return (
    <div className="card-container">
      <img className="avatar" src="/avatar.jpg" alt="" />
      <div className="info-container">
        <div>
          <p className="summary">
            architecto reprehenderit nostrum sed aspernatur quaerat nobis.
          </p>
        </div>
        <div className="personal-info">
          <div className="name">Miss Hester Gulgowski</div>
          <div className="position">Investor</div>
        </div>
      </div>
    </div>
  )
}
