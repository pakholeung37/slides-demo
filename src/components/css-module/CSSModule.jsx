import React from "react"
import s from "./index.module.scss"

export function CSSModule() {
  return (
    <figure className={s["card-container"]}>
      <img
        className={s["avatar"]}
        src="/avatar.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div className={s["info-container"]}>
        <blockquote>
          <p className={s["summary"]}>
            Amet sequi aspernatur. Et architecto reprehenderit nostrum sed
            aspernatur quaerat nobis. Rerum blanditiis est est quo sint qui
            commodi quia.
          </p>
        </blockquote>
        <figcaption className={s["personal-info"]}>
          <div className={s["name"]}>Miss Hester Gulgowski</div>
          <div className={s["position"]}>Investor</div>
        </figcaption>
      </div>
    </figure>
  )
}
