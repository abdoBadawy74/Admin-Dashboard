import Table from "../Components/Table/Table"

const Consultations = () => {
    const headers = [
        { key: "name", label: "اسم المستخدم", align: "left", bgColor: "#A8C5DA" },
        { key: "consName", label: "اسم المستشار", align: "center", bgColor: "#D8FDEF" },
        { key: "consType", label: "نوع الاستشارة", align: "center", bgColor: "#E3F5FF" },
        { key: "consPrice", label: " سعر الاستشارة", align: "center", bgColor: "#E5ECF6" },
        { key: "consNum", label: "رقم الاستشارة", align: "right", bgColor: "#E3F5FF" },
        { key: "status", label: "الحالة", align: "right", bgColor: "" },
    ];

    const rows = [
        {
            name: "علي أحمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "1",
            status: <p style={{ color: "#FFF", background: "#FFCC00CC", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}>قيد الانتظار </p>,
        },
        {
            name: "ملك محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "2",
            status: <p style={{ color: "#FFF", background: "#FF3B30CC", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}> ملغاة</p>,
        },
        {
            name: "ميه أبو شابة",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "3",
            status: <p style={{ color: "#FFF", background: "#34C759CC", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}>مكتملة</p>,
        },
        {
            name: "زين كريم",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "4",
            status: <p style={{ color: "#FFF", background: "#264653", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}>قيد التنفيذ </p>,
        },
        {
            name: "محمد علي",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "5",
            status: <p style={{ color: "#FFF", background: "#264653", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}>قيد التنفيذ </p>,
        },
        {
            name: "علي محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "6",
            status: <p style={{ color: "#FFF", background: "#FF3B30CC", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}> ملغاة</p>,
        },
        {
            name: "محمد محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "7",
            status: <p style={{ color: "#FFF", background: "#FF3B30CC", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}> ملغاة</p>,
        },
        {
            name: "علي علي",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "8",
            status: <p style={{ color: "#FFF", background: "#FFCC00CC", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}>قيد الانتظار </p>,
        },
        {
            name: "محمد محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            consName: "محمد علي",
            consType: "استشارة نفسية",
            consPrice: "500 ر.س",
            consNum: "9",
            status: <p style={{ color: "#FFF", background: "#34C759CC", width: "100%", height: "100%", textAlign: "center", padding: "10px" }}>مكتملة</p>,
        }

    ]

    const customStyles = {
        tableStyle: { width: "100%", borderCollapse: "collapse", borderRadius: "10px" },
        headerStyle: { color: "#2D3748", fontWeight: "bold", fontSize: "1em" },
        cellStyle: { padding: "10px", textAlign: "center", fontSize: "0.9em", fontWeight: "500" },
    };

    return <Table headers={headers} rows={rows} customStyles={customStyles} />;
};

export default Consultations;
