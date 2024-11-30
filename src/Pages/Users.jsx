import Table from "../Components/Table/Table"

const Users = () => {
    const headers = [
        { key: "name", label: "اسم المستخدم", align: "left", bgColor: "#A8C5DA" },
        { key: "joinDate", label: "تاريخ الانضمام", align: "center", bgColor: "#D8FDEF" },
        { key: "status", label: "الحالة", align: "center", bgColor: "#E3F5FF" },
        { key: "consultations", label: "عدد الاستشارات", align: "center", bgColor: "#E5ECF6" },
        { key: "balance", label: "رصيد الحساب", align: "right", bgColor: "#E3F5FF" },
    ];

    const rows = [
        {
            id: 1,
            name: "علي أحمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "1/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "5 استشارات",
            balance: "500 ر.س",
        },
        {
            id: 2,
            name: "ملك محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "1/1/2024",
            status: <span style={{ color: "#CBD5E0" }}>غير نشط</span>,
            consultations: "2 خدمات",
            balance: "50 ر.س",
        },
        {
            id: 3,
            name: "ميه أبو شابة",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#CBD5E0" }}>غير نشط</span>,
            consultations: "10 استشارات",
            balance: "20 ر.س",
        },
        {
            id: 4,
            name: "زين كريم",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
        {
            id: 5,
            name: "محمد علي",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
        {
            id: 6,
            name: "علي محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
        {
            id: 7,
            name: "محمد محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
        {
            id: 8,
            name: "علي علي",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
        {
            id: 9,
            name: "محمد علي",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
        {
            id: 10,
            name: "علي محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
        {
            id: 11,
            name: "محمد محمد",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
        {
            id: 12,
            name: "علي علي",
            img: "https://www.w3schools.com/howto/img_avatar.png",
            joinDate: "5/1/2024",
            status: <span style={{ color: "#38A169" }}>نشط</span>,
            consultations: "3 خدمات",
            balance: "100 ر.س",
        },
    ];

    const customStyles = {
        tableStyle: { width: "100%", borderCollapse: "collapse", borderRadius: "10px" },
        headerStyle: { color: "#2D3748", fontWeight: "bold", fontSize: "1em" },
        cellStyle: { padding: "10px", textAlign: "center", fontSize: "0.9em", fontWeight: "500" },
    };

    return <Table headers={headers} rows={rows} customStyles={customStyles} route="users" />;
};

export default Users;
