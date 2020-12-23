import React from "react"
import s from "./index.module.scss"

export function CSSModule() {
  return (
    <div className={s["card-container3"]}>
      <img className={s["avatar"]} src="/avatar.jpg" alt="" />
      <div className={s["info-container"]}>
        <div>
          <p className={s["summary"]}>
            architecto reprehenderit nostrum sed aspernatur quaerat nobis.
          </p>
        </div>
        <div className={s["personal-info"]}>
          <div className={s["name"]}>Miss Hester Gulgowski</div>
          <div className={s["position"]}>Investor</div>
        </div>
      </div>
    </div>
  )
}
