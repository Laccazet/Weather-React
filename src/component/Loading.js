import gif from "../loading-gif.gif"

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <img src={gif} alt="loading-gif" className="w-1/6" />
    </div>
  )
}
