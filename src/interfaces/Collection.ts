import { ApiImage } from "./ApiImage";
import { CollectionProperties } from "./CollectionProperties";

export interface Collection {
    categoryId: number
    created: string
    description: string
    groupTreatments: boolean
    id: number
    images: ApiImage[]
    name: string
    physical: boolean
    properties: CollectionProperties
    updated: string
    visible: boolean
}