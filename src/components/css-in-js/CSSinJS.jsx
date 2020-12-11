/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"

export function CSSinJS() {
  return (
    <figure
      css={{
        background: "#b4b4b4",
        borderRadius: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        padding: "2rem",
        backgroundColor: "rgb(243, 244, 246)",
      }}
    >
      <img
        css={{
          width: "8rem",
          height: "8rem",
          borderRadius: "50%",
          margin: "0 auto",
        }}
        src="/avatar.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div
        css={{
          paddingTop: "1.5rem",
          textAlign: "center",
          "& > * ~ *": { marginTop: "1rem" },
        }}
      >
        <blockquote>
          <p css={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}>
            Amet sequi aspernatur. Et architecto reprehenderit nostrum sed
            aspernatur quaerat nobis. Rerum blanditiis est est quo sint qui
            commodi quia.
          </p>
        </blockquote>
        <figcaption css={{ fontWeight: 500, textAlign: "left" }}>
          <div css={{ color: "rgb(220, 38, 38)" }}>Miss Hester Gulgowski</div>
          <div css={{ color: "rgb(107, 114, 128)" }}>Investor</div>
        </figcaption>
      </div>
    </figure>
  )
}
