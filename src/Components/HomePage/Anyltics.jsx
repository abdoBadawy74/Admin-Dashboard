import upArrow from "../../assets/svgs/ArrowUp.svg"
import DownArrow from "../../assets/svgs/ArrowDown.svg"

export default function Anyltics() {
  return (
    <div className='w-[100%] d-flex '>
    <div className='w-[80%] pt-5 pr-3'>
        <div className="flex gap-4">
            <div className="bg-[#D8FDEF] p-4 rounded-xl">
                <h4 className="text-[#1C1C1C] font-medium text[18px]" >مستخدمين اونلاين </h4>
                <div className="flex flex-row-reverse items-center gap-4 ">
                    <p className="font-medium text-[35px] text-[#1C1C1C]">
                        156
                    </p>
                    
                    <p className="flex flex-row-reverse gap-1 text-[#1C1C1C] text-[14px]">
                        15.03%+
                        <img src={upArrow} alt="arrow" />
                    </p>
                </div>
            </div>

            <div className="bg-[#E3F5FF] p-4 rounded-xl">
                <h4 className="text-[#1C1C1C] font-medium text[18px]" >مستخدمين جدد </h4>
                <div className="flex flex-row-reverse items-center gap-4 ">
                    <p className="font-medium text-[35px] text-[#1C1C1C]">
                       3,671
                    </p>
                    
                    <p className="flex flex-row-reverse gap-1 text-[#1C1C1C] text-[14px]">
                        0.03%-
                        <img src={DownArrow} alt="arrow" />
                    </p>
                </div>
            </div>

            <div className="bg-[#E5ECF6] p-4 rounded-xl">
                <h4 className="text-[#1C1C1C] font-medium text[18px]" > استشارات جدد </h4>
                <div className="flex flex-row-reverse items-center gap-4 ">
                    <p className="font-medium text-[35px] text-[#1C1C1C]">
                        7,265
                    </p>
                    
                    <p className="flex flex-row-reverse gap-1 text-[#1C1C1C] text-[14px]">
                        11.02%+
                        <img src={upArrow} alt="arrow" />
                    </p>
                </div>
            </div>

            <div className="bg-[#E3F5FF] p-4 rounded-xl">
                <h4 className="text-[#1C1C1C] font-medium text[18px]" > المدفوعات </h4>
                <div className="flex flex-row-reverse items-center gap-4 ">
                    <p className="font-medium text-[35px] text-[#1C1C1C]">
                        2,318
                    </p>
                    
                    <p className="flex flex-row-reverse gap-1 text-[#1C1C1C] text-[14px]">
                        6.08%+
                        <img src={upArrow} alt="arrow" />
                    </p>
                </div>
            </div>

            
        </div>
    </div>
</div>
  )
}
