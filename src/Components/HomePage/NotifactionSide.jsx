import notfcation from "../../assets/svgs/notification.svg"
import person1 from "../../assets/person1.png"
import person2 from "../../assets/person2.png"
import person3 from "../../assets/person3.png"
import person4 from "../../assets/person4.png"

export default function NotifactionSide() {
    return (
        <div className='md:w-[20%] w-[100%] md:fixed top-0 left-0 z-20  bg-white text-center md:text-start notification h-[100vh] pt-5 pr-4 border-r'>
            <div>
                <div className='flex justify-between px-4'>
                    <h4 className="font-medium">الاشعارات </h4>
                    <img src={notfcation} alt="notfcation" />
                </div>

                <div className="flex gap-2 items-center my-2">
                    <img src={person1} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>كيف يمكنني استرداد اموالي </p>
                        <p className="text-[12px] text-gray-300">الان</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person2} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>كيف استلم اموالي </p>
                        <p className="text-[12px] text-gray-300">منذ 12 ساعه  </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person3} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>كيف اشحن رصيد حسابي </p>
                        <p className="text-[12px] text-gray-300"> قبل يوم    </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person4} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>كيف يمكنني استرداد اموالي </p>
                        <p className="text-[12px] text-gray-300">12 فبراير  </p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className='flex justify-between px-4'>
                    <h4 className="font-medium">مستخدمين اونلاين </h4>
                </div>

                <div className="flex gap-2 items-center my-2">
                    <img src={person1} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>محمد علي </p>
                        <p className="text-[12px] text-gray-300">
                            مستخدم جديد
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person2} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>ملك محمد </p>
                        <p className="text-[12px] text-gray-300">
                            مستخدم جديد
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person3} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>عايش القجطاني </p>
                        <p className="text-[12px] text-gray-300">
                            مستخدم مميز
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person4} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>غالب فهر </p>
                        <p className="text-[12px] text-gray-300">
                            مستخدم مميز
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className='flex justify-between px-4'>
                    <h4 className="font-medium"> مستشارين اونلاين  </h4>
                </div>

                <div className="flex gap-2 items-center my-2">
                    <img src={person1} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>محمد علي </p>
                        <p className="text-[12px] text-gray-300">
                            مستخدم جديد
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person2} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>ملك محمد </p>
                        <p className="text-[12px] text-gray-300">
                            مستخدم جديد
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person3} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>عايش القجطاني </p>
                        <p className="text-[12px] text-gray-300">
                            مستخدم مميز
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <img src={person4} alt="person1" className="w-[24px] h-[24px] rounded-full" />
                    <div>
                        <p>غالب فهر </p>
                        <p className="text-[12px] text-gray-300">
                            مستخدم مميز
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
