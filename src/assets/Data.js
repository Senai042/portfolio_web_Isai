import profilePic from "./profile.jpg";
import educationPic from "./education.jpg";
import proyectsPic from "./GitHub.jpg";
import contactsPic from "./gmail.jpg";

function CardsData() {
    return [
        {
            id: "quienSoy",
            image: profilePic,
            title: "Isai",
            description: `Yaharoo!
            I'm 20 years old, Costa Rica is where I was born & live.
            I enjoy practicing karate in my free time, I'm almost a brown belt.
            I'm B2+ in English and B1 in Portuguese.`,
        },
        {
            id: "educacion",
            image: educationPic,
            title: "Computer Engineering",
            description: `I graduated from Colegio Diurno de Florencia, a public high school in Costa Rica. Currently, I am pursuing a degree in Computer Engineering at the Costa Rica Institute of Technology (ITCR). Additionally, I have completed complementary courses through Edutin Academy to further enhance my skills.`,
        },
        {
            id: "proyectos",
            image: proyectsPic,
            title: "Python, Java, JS-React",
            description: "Welcome to my github!",
            link: "https://github.com/Senai042"
        },
        {
            id: "contactos",
            image: contactsPic,
            title: "Contact Information",
            gmail:'isai.0210@gmail.com',
            Cellphone:'+506 63773035',
            Instagram: 'Ig: is_ai_042',
        },
    ];
}

export default CardsData;
