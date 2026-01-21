import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "e210",
        title: "Schaltschrank 1",
        description: "Industrielle Projektlösung",
        thumbnail: "/images/cover/e210_cover.png",
        images: [
            "/images/E210/MB13_038_E210_0.png",
            "/images/E210/MB13_038_E210_1.png",
            "/images/E210/MB13_038_E210_2.png",
            "/images/E210/MB13_038_E210_3.png",
            "/images/E210/MB13_038_E210_4.png",
            "/images/E210/MB13_038_E210_5.png",
            "/images/E210/MB13_038_E210_6.png",
            "/images/E210/MB13_038_E210_7.jpg",
            "/images/E210/MB13_038_E210_8.jpg",
            "/images/E210/MB13_038_E210_9.jpg",
            "/images/E210/MB13_038_E210_10.jpg",
            "/images/E210/MB13_038_E210_11.jpg"
        ],
        specs: {
            type: "Steuerungsbau"
        }
    },
    {
        id: "e500",
        title: "Schaltschrank 2",
        description: "Energieverteilungssystem",
        thumbnail: "/images/cover/e500_cover.png",
        images: [
            "/images/E500/e500_0.png",
            "/images/E500/e500_1.png",
            "/images/E500/e500_2.png",
            "/images/E500/E500_3.png",
            "/images/E500/e500_4.png",
            "/images/E500/e500_5.png",
            "/images/E500/e500_6.png",
            "/images/E500/e500_7.jpg",
            "/images/E500/e500_8.jpg",
            "/images/E500/e500_9.jpg",
            "/images/E500/e500_10.jpg"
        ],
        specs: {
            type: "Energieverteilung"
        }
    },
    {
        id: "j1",
        title: "Schaltschrank 3",
        description: "Präzisionsmontage",
        thumbnail: "/images/cover/j1_cover.png",
        images: [
            "/images/J1/j1_0.png",
            "/images/J1/j1_1.png",
            "/images/J1/j1_2.png",
            "/images/J1/j1_3.png",
            "/images/J1/j1_4.png",
            "/images/J1/j1_5.jpg",
            "/images/J1/j1_6.jpg",
            "/images/J1/j1_7.jpg"
        ],
        specs: {
            type: "Anschlusslösung"
        }
    },
    {
        id: "mcc1",
        title: "Schaltschrank 4",
        description: "Zentrale Motorsteuerung",
        thumbnail: "/images/cover/mcc1_cover.png",
        images: [
            "/images/MCC1/MB17_004_MCC1_0.png",
            "/images/MCC1/MB17_004_MCC1_1.png",
            "/images/MCC1/MB17_004_MCC1_2.png",
            "/images/MCC1/MB17_004_MCC1_3.png",
            "/images/MCC1/MB17_004_MCC1_4.png",
            "/images/MCC1/MB17_004_MCC1_5.png"
        ],
        specs: {
            type: "MCC"
        }
    }
];
