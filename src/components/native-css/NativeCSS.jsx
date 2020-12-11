import React from "react"
import "./index.css"

export function NativeCSS() {
  return (
    <figure className="card-container">
      <img
        className="avatar"
        src="/avatar.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div className="info-container">
        <blockquote>
          <p className="summary">
            Amet sequi aspernatur. Et architecto reprehenderit nostrum sed
            aspernatur quaerat nobis. Rerum blanditiis est est quo sint qui
            commodi quia.
          </p>
        </blockquote>
        <figcaption className="personal-info">
          <div className="name">Miss Hester Gulgowski</div>
          <div className="position">Investor</div>
        </figcaption>
      </div>
    </figure>
  )
}
