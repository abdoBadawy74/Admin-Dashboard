import Anyltics from "../Components/HomePage/Anyltics"
import Charts from "../Components/HomePage/Charts"
import NotifactionSide from "../Components/HomePage/NotifactionSide"

export default function HomePage() {
  return (
    <div className="w-[100%] flex justify-between flex-wrap">
      <div className="w-[75%]">
        <Anyltics />
        <Charts />
      </div>
      <NotifactionSide/>

    </div>
  )
}
