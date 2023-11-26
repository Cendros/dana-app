import { StructureMinType } from "./structure";

export type EventType = {
    id: number
    structureId: number
    name: string
    value: number
    date: string
    dateExpiration: string
    image: string
    description: string
    quantity: number,
    ticketId: number
}

export type TicketType = {
    id: number
    event: EventType,
    structure: StructureMinType
}