import React from "react"
import fs from "fs"
import { join } from "path"
import markdownToHtml from "@lib/markdownToHTML"
import { NextPage } from "next"

const PP: NextPage<{ content: string }> = ({ content }) => {
  return (
    <main className="flex flex-col items-center color-slip-jeen justify-center flex-1 w-full h-full px-8 main-section">
      <h1 className="text-xl mt-4 mb-4 font-bold text-white md:text-4xl">นโยบายความเป็นส่วนตัว</h1>

      <article
        className="prose lg:prose-xl leading-6 text-white prose-p:inline font-texts"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </main>
  )
}

export async function getStaticProps() {
  const pp = join(process.cwd(), "/src/_data/pp.md")
  const fileContents = fs.readFileSync(pp, "utf8")

  const content = await markdownToHtml(fileContents || "")

  return {
    props: {
      content,
    },
  }
}

export default PP
