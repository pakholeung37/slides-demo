import React from "react"

export function AtomicCSS() {
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 mx-4">
      <img
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="/avatar.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
            Amet sequi aspernatur. Et architecto reprehenderit nostrum sed
            aspernatur quaerat nobis. Rerum blanditiis est est quo sint qui
            commodi quia.
          </p>
        </blockquote>
        <figcaption className="font-medium text-right">
          <div className="text-red-600">Miss Hester Gulgowski</div>
          <div className="text-gray-500">Investor</div>
        </figcaption>
      </div>
    </figure>
  )
}
