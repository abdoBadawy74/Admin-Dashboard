import users from "../../assets/svgs/users.svg"
import consultant from "../../assets/svgs/consultant.svg"
import consultation from "../../assets/svgs/consultations.svg"
import payment from "../../assets/svgs/payments.svg"
import reports from "../../assets/svgs/reports.svg"
import call from "../../assets/svgs/callCenter.svg"


export const links = [
  {
    name: "المتسخدمين",
    path: "users",
    icon: users,
  },
  {
    name: "المستشارين",
    path: "/dashboard/users/add",
    icon: consultant,
  },
  {
    name: "الاستشارات",
    path: "/dashboard/categories",
    icon: consultation,
  },
  {
    name: "المدفوعات",
    path: "/dashboard/category/add",
    icon: payment,
  },
  {
    name: "التقارير",
    path: "/dashboard/products",
    icon: reports,
  },
  {
    name: "خدمة العملاء ",
    path: "/dashboard/Product/add",
    icon: call,
  },
];