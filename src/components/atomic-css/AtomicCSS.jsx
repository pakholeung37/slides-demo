import React from "react"

export function AtomicCSS() {
  return (
    <figure className="bg-gray-100 p-8 mx-4 rounded-2xl">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src="/avatar.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
            Amet sequi aspernatur. Et architecto reprehenderit nostrum sed
            aspernatur quaerat nobis. Rerum blanditiis est est quo sint qui
            commodi quia.
          </p>
        </blockquote>
        <figcaption className="font-medium text-left">
          <div className="text-red-600">Miss Hester Gulgowski</div>
          <div className="text-gray-500">Investor</div>
        </figcaption>
      </div>
    </figure>
  )
}
