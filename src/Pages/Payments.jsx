import Table from "../Components/Table/Table"

const Payments = () => {
    const headers = [
        { key: "name", label: "اسم المستخدم", align: "left", bgColor: "#A8C5DA" },
        { key: "price", label: " قيمة المبلغ ", align: "center", bgColor: "#D8FDEF" },
        { key: "payDate", label: "تاريخ الدفع ", align: "center", bgColor: "#E3F5FF" },
        { key: "consType", label: "نوع الاستشارة  ", align: "center", bgColor: "#E5ECF6" },
        { key: "consNum", label: "رقم الاستشارة  ", align: "center", bgColor: "#E3F5FF" },
    ];

    const rows = [
        {
            name: "علي أحمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "1/1/2024",
            consType: "استشارة نفسية",
            consNum: "1",
        },
        {
            name: "ملك محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "1/1/2024",
            consType: "استشارة نفسية",
            consNum: "2",
        },
        {
            name: "ميه أبو شابة",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "3",
        },
        {
            name: "زين كريم",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "4",
        },
        {
            name: "محمد علي",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "5",
        },
        {
            name: "علي محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "6",
        },
        {
            name: "محمد محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "7",
        },
        {
            name: "علي أحمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "1/1/2024",
            consType: "استشارة نفسية",
            consNum: "1",
        },
        {
            name: "ملك محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "1/1/2024",
            consType: "استشارة نفسية",
            consNum: "2",
        },
        {
            name: "ميه أبو شابة",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "3",
        },
        {
            name: "زين كريم",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "4",
        },
        {
            name: "محمد علي",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "5",
        },
        {
            name: "علي محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "6",
        },
        {
            name: "محمد محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            price: "500 ر.س",
            payDate: "5/1/2024",
            consType: "استشارة نفسية",
            consNum: "7",
        }
    ]

    const customStyles = {
        tableStyle: { width: "100%", borderCollapse: "collapse", borderRadius: "10px" },
        headerStyle: { color: "#2D3748", fontWeight: "bold", fontSize: "1em" },
        cellStyle: { padding: "10px", textAlign: "center", fontSize: "0.9em", fontWeight: "500" },
    };

    return <Table headers={headers} rows={rows} customStyles={customStyles} />;
};

export default Payments;
