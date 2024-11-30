import img from "../assets/person3.png"
import user from "../assets/svgs/users.svg"
import call from "../assets/svgs/call.svg"
import location from "../assets/svgs/location.svg"
import email from "../assets/svgs/emial.svg"
import dollar from "../assets/svgs/dollar.svg"
import note from "../assets/svgs/note.svg"
import sendIcon from "../assets/svgs/send.svg"
import attach from "../assets/svgs/plusIcon.svg"

export default function CallCenter() {
    return (
        <div className='w-[100%] h-[100vh]  p-5'>

            <div className="w-[100%] md:w-[70%] rounded-3xl min-h-[80vh] border-2 p-3 px-5">
                <div className="flex items-center gap-3 mb-3 border-b-2 pb-2">
                    <img src={img} alt="person" className="w-[45px] h-[45px] rounded-full" />
                    <p className="font-medium">محمد عبد العظيم</p>
                </div>
                <div className='flex items-stretch flex-wrap'>
                    <div className="border basis-full md:basis-1/4 rounded-xl pr-3 py-3 min-h-[70vh] ">
                        <div className="flex p-2 border-b-2 my-2 gap-3">
                            <img src={user} alt="userIcon" />
                            <p className="font-medium">محمد عبد العظيم</p>
                        </div>

                        <div className="flex p-2 border-b-2 my-2 gap-3">
                            <img src={call} alt="userIcon" />
                            <p className="font-medium">5879 16987 664</p>
                        </div>
                        <div className="flex p-2 border-b-2 my-2 gap-3">
                            <img src={location} alt="userIcon" />
                            <p className="font-medium"> الرياض - جزران</p>
                        </div>
                        <div className="flex p-2 border-b-2 my-2 gap-3">
                            <img src={email} alt="userIcon" />
                            <p className="font-medium"> rawan@gmail.com </p>
                        </div>
                        <div className="flex p-2 border-b-2 my-2 gap-3">
                            <img src={dollar} alt="userIcon" />
                            <p className="font-medium"> المحفظة :500ر.س </p>
                        </div>
                        <div className="flex p-2 border-b-2 my-2 gap-3">
                            <img src={note} alt="userIcon" />
                            <p className="font-medium"> رقم الاستشارة  </p>
                        </div>
                    </div>

                    <div className="basis-full md:basis-2/3 rounded-xl p-3 flex flex-col gap-3 justify-between min-h-[70vh] flex-grow">
                        <div className="flex flex-col gap-3">
                            <div className="bg-[#E3F5FF] max-w-[60%] p-3 text-center font-medium rounded-lg rounded-tr-2xl self-start">
                                <p>كيف حالك يا فندم ايه الاخبار ؟ِ  </p>
                            </div>
                            <div className="bg-[#F7F9FB] max-w-[60%] p-3 text-center font-medium rounded-lg rounded-tr-2xl self-end">
                                <p>الحمد لله يا فندم كنت عاوز اسالك سوال  </p>
                            </div>
                            <div className="bg-[#E3F5FF] max-w-[60%] p-3 text-center font-medium rounded-lg rounded-tr-2xl self-start">
                                <p> اتفضل يا فندم  </p>
                            </div>
                            <div className="bg-[#F7F9FB] max-w-[60%] p-3 text-center font-medium rounded-lg rounded-tr-2xl self-end">
                                <p>في استشارة معينة محتاج الغيها لو سمحت  </p>
                            </div>
                            <div className="bg-[#E3F5FF] max-w-[60%] p-3 text-center font-medium rounded-lg rounded-tr-2xl self-start">
                                <p> تمام ايه رقم الاستشارة  </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex flex-grow p-3 border rounded-xl ">
                                <input type="text" placeholder="اكتب رسالتك هنا" className="flex-grow outline-0" />
                                <button>
                                    <img src={sendIcon} alt="Send" />
                                </button>
                            </div>
                            <button>
                                <img src={attach} alt="Send" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
