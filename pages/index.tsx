import getLanguages, {LangsArray} from "../utils/languages";
import Image from "next/image";

export async function getStaticProps(context) {
  const langs = await getLanguages()
 return {
   props: {
     langs
   }
 }
}

function langsToBars (langs: LangsArray) {
  if (!langs) return []
  let langsx = []
  for (const language of Object.entries(langs).sort((a, b) => b[1] - a[1]).slice(0, 10)) {
    langsx.push((<div
      className="flex flex-row justify-between w-full bg-cyan-600 relative"
      key={language[0]}
      >
      <p className="px-2 py-1 z-20 font-semibold">
        {language[0]}
      </p>
      <p className="px-2 py-1 z-20 font-semibold">
        {language[1]}%
      </p>
      <div
        className="absolute top-0 left-0 z-10 h-full bg-cyan-500 max-w-full"
        style={{ width: language[1]+"%" }}
      >
        &nbsp;
      </div>
    </div>))
  }

  return langsx
}

export default function Home({ langs }) {
  return (
    <main className="container w-auto mx-auto">
      <div
        className="flex flex-row justify-center items-center gap-16 min-h-[65vh] py-4 lg:min-h-[85vh]"
        id="home"
      >
        <div className="my-my-32 w-8/12 md:pr-32 lg:pr-64">
          <p className="text-4xl text-right">
            Hey, my name is&nbsp;
            <span className="text-cyan-300 font-extrabold">Marek Vospěl</span>
          </p>
          <button
            className="mt-4 py-2 px-4 rounded-lg float-right text-sm uppercase bg-cyan-500 hover:bg-cyan-300 transition-colors duration-300">About me</button
          >
        </div>
        <img
          className="w-4/12 max-h-screen hidden md:block"
          src="/icons/vospelnb.png"
          alt="Marek Vospěl"
        />
      </div>
      <div className="flex py-4 pb-32" id="about">
        <div className="mx-4 w-full">
          <p className="text-xl">
            I&apos;m a front-end developer & Cyber Security student from Czech Republic.
          </p>
          <br />
          <p className="text-xl font-bold">My most frequently used languages:</p>
          <div className="my-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

            {langsToBars(langs)}

          </div>
        </div>
      </div>
    </main>
  )
}
