import React from "react"
import "./index.scss"

export function SASS() {
  return (
    <div className="card-container">
    <img
      className="avatar"
      src="/avatar.jpg"
      alt=""
    />
    <div className="info-container">
      <div>
        <p className="summary">
          Amet sequi aspernatur. Et architecto reprehenderit nostrum sed
          aspernatur quaerat nobis. Rerum blanditiis est est quo sint qui
          commodi quia.
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
