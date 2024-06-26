import CardItem from './CardItem';
import Bolt from '../../assets/bolt.jpg';
import Cadance from '../../assets/cadance.jpg';
import DJ from '../../assets/dj.jpg';
import Girl from '../../assets/girl.jpg';
import Dublicat from '../../assets/dublikat.jpg';
import Krack from '../../assets/krach.jpg';

const Home = () => {
    const contentHome = [
        { image: Bolt, title: "Понедельник", text: "Нью-рейв — музыкальный жанр, отличающийся смесью насыщенного электронного звучания новой волны с элементами альтернативного рока, диско, эйсид-хауса и других стилей." },
        { image: Girl, title: "Вторник", text: "Эйсид-хаус— стиль электронной музыки, относящийся к категории хаус-музыки. Эйсид-хаус впервые появился в середине 1980-х годов" },
        { image: Cadance, title: "Среда", text: "Электро  — жанр электронной музыки и раннего хип-хопа, на создание которого повлияла драм-машина Roland  и фанк" },
        { image: Krack, title: "Четверг", text: "Индастриал-техно — поджанр техно, сформированный на территории Великобритании в начале 1990-х годов частично из культуры индастриал-дэнса. Для стиля характерен суровый и шумный звук, вдохновлённый эстетикой ранних индастриал-музыкантов" },
        { image: Girl, title: "Пятница", text: "Транс — поджанр электронной танцевальной музыки, который появился в 1990-е годы. Стиль получил такое название из-за повторяющихся музыкальных фраз, прогрессий, секвенций и остинато" },
        { image: Dublicat, title: "Суббота", text: "Техно — жанр электронной танцевальной музыки, зародившийся в Германии и впоследствии подхваченный американскими продюсерами" },
        { image: DJ, title: "Воскресенье", text: "Ре́йв  — организованная танцевальная вечеринка с привлечением диджеев, обеспечивающих бесшовное воспроизведение электронной танцевальной музыки." }
    ];

    return (
        <div className="container">
            <h1 className="mt-4 mb-4">Каждый день новая музыка</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {contentHome.map((item, index) => (
                    <CardItem image={item.image} title={item.title} text={item.text} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Home;
