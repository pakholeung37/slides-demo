import React from "react"

export function AtomicCSS() {
  return (
    <div className=" rounded-2xl mx-4 p-8 bg-gray-100">
      <img className=" w-32 h-32 rounded-full mx-auto" src="/avatar.jpg" alt="" />
      <div className=" pt-6 text-center space-y-4">
        <div>
          <p className=" text-lg font-bold">architecto reprehenderit nostrum sed aspernatur quaerat nobis.</p>
        </div>
        <div className=" text-left">
          <div className=" text-red-600">Miss Hester Gulgowski</div>
          <div className=" text-gray-500">Investor</div>
        </div>
      </div>
    </div>
  )
}
