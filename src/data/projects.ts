import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "proje-1",
        title: "Endüstriyel Elektrik Panosu",
        description: "400A Ana Dağıtım Panosu",
        thumbnail: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565514020125-bc28c89b3cb6?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542887800-cb64c4897f2e?q=80&w=2069&auto=format&fit=crop"
        ],
        specs: {
            voltage: "400V",
            current: "400A",
            type: "Ana Dağıtım"
        },
        date: "2024-01"
    },
    {
        id: "proje-2",
        title: "Fabrika Otomasyon Sistemi",
        description: "PLC Kontrollü Motor Sürücü Panosu",
        thumbnail: "https://images.unsplash.com/photo-1565514020125-bc28c89b3cb6?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1565514020125-bc28c89b3cb6?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518335345719-7925e0c52973?q=80&w=2069&auto=format&fit=crop"
        ],
        specs: {
            voltage: "220V",
            current: "50A",
            type: "Otomasyon"
        },
        date: "2024-02"
    },
    {
        id: "proje-3",
        title: "Güneş Enerjisi Panosu",
        description: "İnverter Bağlantı ve Koruma",
        thumbnail: "https://images.unsplash.com/photo-1542887800-cb64c4897f2e?q=80&w=2069&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1542887800-cb64c4897f2e?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop"
        ],
        specs: {
            voltage: "1000V DC",
            current: "100A",
            type: "Solar"
        },
        date: "2024-03"
    }
];
