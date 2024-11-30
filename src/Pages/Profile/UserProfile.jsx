import edit from "../../assets/svgs/edit.svg";
import deleteIcon from "../../assets/svgs/delete.svg";

export default function UserProfile() {
  return (
    <div className="w-[90%] mx-5 my-2 rounded-3xl border-2 overflow-hidden">
      <div className="bg-[#2A9D8F] h-[160px]"></div>

      <div className="flex p-4  flex-wrap">

        <div className="basis-full md:basis-2/3 p-4">
          <div className="flex justify-center md:justify-between flex-wrap">
            <div className="flex gap-3 flex-wrap justify-center md:justify-start ">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" className="w-[160px] h-[160px] rounded-full mx-auto -mt-20 border-2 border-white" />
              <div>
                <p className="text-xl font-bold text-center md:text-start"> محمد علي غالب </p>
                <p className="font-medium text-center md:text-start">  mohamedghalab@gmail.com </p>
              </div>
            </div>
            <div>
              <button className=" px-3 py-1 rounded-lg">
                <img src={edit} alt="edit" />
                تعديل</button>
              <button className="px-3 py-1 rounded-lg">
                <img src={deleteIcon} alt="edit" />
                حذف</button>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex gap-4 flex-wrap ">
              <div className="basis-full md:basis-1/2">
                <p className="text-[#344054] my-2">  الاسم الكامل </p>
                <p className="border  p-2 rounded-lg font-medium"> محمد علي غالب </p>
              </div>

              <div className="basis-full md:basis-1/2">
                <p className="text-[#344054] my-2">   العنوان  </p>
                <p className="border  p-2 rounded-lg font-medium"> جدة السعودية </p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="basis-full md:basis-1/2">
                <p className="text-[#344054] my-2">  البريد الالكتروني </p>
                <p className="border  p-2 rounded-lg font-medium">mohamedghalab@gmail.com </p>
              </div>

              <div className="basis-full md:basis-1/2">
                <p className="text-[#344054] my-2">   رقم الهاتف   </p>
                <p className="border  p-2 rounded-lg font-medium"> +589 846964 448</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg- gray-300 basis-full md:basis-1/3 border rounded-2xl">
          <h4 className="text-center my-5 font-medium text-[16px]">سجل الاستشارات </h4>
          <div className="flex justify-between px-4 border-b pb-2 font-medium">
            <p>رقم الاستشارة </p>
            <p>السعر </p>
            <p>الحالة </p>
          </div>
          <div className="flex justify-between px-4 pb-2 items-center my-3">
            <p>6549823</p>
            <p>50 ر.س  </p>
            <p className="p-1 text-white bg-[#2dd27a] rounded-lg">قيد الانتظار  </p>
          </div>
          <div className="flex justify-between px-4 pb-2 items-center my-3">
            <p>6549823</p>
            <p>50 ر.س  </p>
            <p className="p-1 text-white bg-[#FFCC00CC] rounded-lg">قيد الانتظار  </p>
          </div>
          <div className="flex justify-between px-4 pb-2 items-center my-3">
            <p>6549823</p>
            <p>50 ر.س  </p>
            <p className="p-1 text-white bg-[#FF6259] rounded-lg">قيد الانتظار  </p>
          </div>
          <div className="flex justify-between px-4 pb-2 items-center my-3">
            <p>6549823</p>
            <p>50 ر.س  </p>
            <p className="p-1 text-white bg-[#2dd27a] rounded-lg">قيد الانتظار  </p>
          </div>
          <div className="flex justify-between px-4 pb-2 items-center my-3">
            <p>6549823</p>
            <p>50 ر.س  </p>
            <p className="p-1 text-white bg-[#2dd27a] rounded-lg">قيد الانتظار  </p>
          </div>
          <div className="flex justify-between px-4 pb-2 items-center my-3">
            <p>6549823</p>
            <p>50 ر.س  </p>
            <p className="p-1 text-white bg-[#FFCC00CC] rounded-lg">قيد الانتظار  </p>
          </div>
          <div className="flex justify-between px-4 pb-2 items-center my-3">
            <p>6549823</p>
            <p>50 ر.س  </p>
            <p className="p-1 text-white bg-[#FF6259] rounded-lg">قيد الانتظار  </p>
          </div>
        </div>
      </div>

    </div>
  )
}
