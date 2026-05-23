import { Minka, User } from "@/domain/models";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Andrea Torres",
    avatarUrl: "https://i.pravatar.cc/150?u=andrea",
  },
  {
    id: "2",
    name: "Juan Pérez",
    avatarUrl: "https://i.pravatar.cc/150?u=juan",
  },
  {
    id: "3",
    name: "Carla Ruiz",
    avatarUrl: "https://i.pravatar.cc/150?u=carla",
  },
  {
    id: "4",
    name: "Leandro",
    avatarUrl: "/assets/leandro.jpg",
  },
  {
    id: "5",
    name: "Lucía Méndez",
    avatarUrl: "https://i.pravatar.cc/150?u=lucia",
  },
  {
    id: "6",
    name: "Diego Vega",
    avatarUrl: "https://i.pravatar.cc/150?u=diego",
  },
  {
    id: "7",
    name: "Sofía Castro",
    avatarUrl: "https://i.pravatar.cc/150?u=sofia",
  },
  {
    id: "8",
    name: "Gabriel Luna",
    avatarUrl: "https://i.pravatar.cc/150?u=gabriel",
  },
];

export const mockMinkas: Minka[] = [
  {
    id: "minka-1",
    title: "Limpieza de Playa Agua Dulce",
    description:
      "Únete a nuestro squad para retirar residuos plásticos y microplásticos de una de las playas más emblemáticas de Chorrillos.",
    category: "Ambiental",
    date: "Sábado, 24 de Mayo - 08:30 AM",
    location: "Chorrillos, Lima",
    rewardPoints: 50,
    image: "/assets/playa.jpg",
    gallery: [
      "/assets/playa.jpg",
      "https://images.unsplash.com/photo-1618477461853-cf6ed80fafa5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop"
    ],
    organizer: "Minkea Green Team",
    asistentes: [mockUsers[0], mockUsers[1], mockUsers[2], mockUsers[3]],
    impactDescription:
      "Cada kilo de plástico retirado evita que miles de fragmentos lleguen a la cadena alimenticia marina.",
    meetingPoint: {
      lat: -12.1643,
      lng: -77.0315,
      address: "Playa Agua Dulce, Chorrillos",
      reference: "Entrada principal frente al monumento de los héroes.",
    },
  },
  {
    id: "minka-2",
    title: "Visita al Asilo San Lucas",
    description:
      "Tarde de juegos de mesa, cuentos y compañía para los adultos mayores del asilo. ¡Tu tiempo es el mejor regalo!",
    category: "Social",
    date: "Domingo, 25 de Mayo - 03:00 PM",
    location: "Cercado de Lima",
    rewardPoints: 75,
    image: "/assets/sanlucas.jpg",
    gallery: [
      "/assets/sanlucas.jpg",
      "/assets/sanlucas2.jpg",
      "/assets/sanlucas3.jpg"
    ],
    organizer: "Conexión Generacional",
    asistentes: [mockUsers[4], mockUsers[5], mockUsers[0]],
    impactDescription:
      "Combatimos la soledad en el adulto mayor a través de conexiones humanas significativas.",
    meetingPoint: {
      lat: -12.0464,
      lng: -77.0298,
      address: "Jr. Conde de Superunda 450, Lima",
      reference: "A dos cuadras de la Plaza de Armas.",
    },
  },
  {
    id: "minka-3",
    title: "Reforestación Lomas de Paraíso",
    description:
      "Ayúdanos a plantar especies nativas para preservar el ecosistema de lomas y combatir el avance urbano descontrolado.",
    category: "Ambiental",
    date: "Sábado, 31 de Mayo - 07:00 AM",
    location: "Villa María del Triunfo",
    rewardPoints: 100,
    image: "/assets/lomasparaiso.jpg",
    gallery: [
      "/assets/lomasparaiso.jpg",
      "/assets/lomasparaiso2.jpg",
      "/assets/lomasparaiso3.jpg"
    ],
    organizer: "Lomas Vivas",
    asistentes: [mockUsers[6], mockUsers[7], mockUsers[1], mockUsers[2]],
    impactDescription:
      "Las lomas son pulmones críticos para Lima. Plantar un árbol hoy es asegurar agua para mañana.",
    meetingPoint: {
      lat: -12.0167,
      lng: -76.9667,
      address: "Av. Paraíso, Villa María del Triunfo",
      reference: "Último paradero de la línea de transporte 'Unidad de Villa' Ruta 8712 N°22",
    },
  },
  {
    id: "minka-4",
    title: "Entrega de donación en el Hospital del Niño",
    description:
      "Llevamos alegría y creatividad a los niños en recuperación a través de talleres de pintura y manualidades.",
    category: "Salud",
    date: "Miércoles, 28 de Mayo - 10:00 AM",
    location: "Hospital del Niño, Breña",
    rewardPoints: 60,
    image: "/assets/hospitaldelnino.jpg",
    gallery: [
      "/assets/hospitaldelnino.jpg",
      "https://images.unsplash.com/photo-1505751172107-57325a483a9a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop"
    ],
    organizer: "Sonrisas de Papel",
    asistentes: [mockUsers[3], mockUsers[4]],
    impactDescription:
      "El arte reduce los niveles de cortisol y acelera los procesos de recuperación emocional en niños.",
    meetingPoint: {
      lat: -12.0633,
      lng: -77.0428,
      address: "Av. Brasil 600, Breña",
      reference: "Puerta de Emergencia, frente al parque.",
    },
  },
  {
    id: "minka-5",
    title: 'Apoyo en Comedor Popular "Santa Rosa"',
    description:
      "Asistencia en la preparación y distribución de raciones diarias para familias en situación de vulnerabilidad.",
    category: "Social",
    date: "Lunes, 26 de Mayo - 09:00 AM",
    location: "Villa El Salvador",
    rewardPoints: 50,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?q=80&w=800&auto=format&fit=crop"
    ],
    organizer: "Ollas Comunes Unidas",
    asistentes: [mockUsers[5], mockUsers[6], mockUsers[7]],
    impactDescription:
      "Aseguramos la seguridad alimentaria de más de 150 vecinos en el sector 3.",
    meetingPoint: {
      lat: -12.2117,
      lng: -76.9383,
      address: "Av. Revolución s/n, Villa El Salvador",
      reference: "Frente al Mercado Central de VES.",
    },
  },
];
