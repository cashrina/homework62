import QR from "../../assets/qr.jpg";

const Contacts = () => {
    return (
        <>
            <h1 className="mt-5">Вы можете с нами связаться:</h1>
            <p>Написав нам на почту:</p>
            <a className="link-underline-primary" style={{cursor: "pointer"}}>ailan.com@gmail.com</a>
            <p className="mt-4">Позвонить по номеру:</p>
            <a className="link-underline-success" style={{cursor: "pointer"}}>0703 009 888</a>
            <p className="mt-4">Также можете отсканировать qr код ниже, чтобы написать нам в телеграм</p>
            <img src={QR} alt="QR" style={{width:"25%"}} />
            <p>Ну отсканируйте Вы этот код, ну полюбите Вы бтс</p>
        </>
    );
};

export default Contacts;