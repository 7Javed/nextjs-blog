// sanity/pet.ts
export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Pet Name'
        },
        {
            name: 'Description',
            type: 'string',
            title: 'Pet Description'
        },
        {
            name: 'Image',
            type: 'image',
            title: 'Pet Image'
        },
    ]
}
