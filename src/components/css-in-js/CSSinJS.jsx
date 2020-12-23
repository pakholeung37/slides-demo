/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react"

export function CSSinJS() {
  return (
    <div
      css={{
        borderRadius: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        padding: "2rem",
        backgroundColor: "rgb(243, 244, 246)",
      }}
    >
      <img
        src="/avatar.jpg"
        alt=""
        css={{
          width: "8rem",
          height: "8rem",
          borderRadius: "50%",
          margin: "0 auto",
        }}
      />
      <div
        css={{
          paddingTop: "1.5rem",
          textAlign: "center",
          " & > * ~ *": { marginTop: "1rem" },
        }}
      >
        <div>
          <p
            css={{
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              fontWeight: "600",
            }}
          >
            architecto reprehenderit nostrum sed aspernatur quaerat nobis.
          </p>
        </div>
        <div css={{ fontWeight: 500, textAlign: "left" }}>
          <div css={{ color: "rgb(220, 38, 38)" }}>Miss Hester Gulgowski</div>
          <div css={{ color: "rgb(107, 114, 128)" }}>Investor</div>
        </div>
      </div>
    </div>
  )
}
